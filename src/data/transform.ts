import type { ColumnMapping, DataQualityReport, Dataset, Order, OrderStatus } from '../types'

const INR_SUFFIXES: [RegExp, number][] = [
  [/^\s*₹?\s*([\d,]+(\.\d+)?)\s*cr\b/i, 1e7],
  [/^\s*₹?\s*([\d,]+(\.\d+)?)\s*crore?s?\b/i, 1e7],
  [/^\s*₹?\s*([\d,]+(\.\d+)?)\s*l\b/i, 1e5],
  [/^\s*₹?\s*([\d,]+(\.\d+)?)\s*kh?/i, 1e3],
]

/** Parse a number that may carry ₹, commas, or L/K/Cr suffixes. Returns null when not numeric. */
export function parseNumber(v: unknown): number | null {
  if (v === null || v === undefined) return null
  if (typeof v === 'number') return isFinite(v) ? v : null
  const s = String(v).trim()
  if (!s) return null
  for (const [re, mult] of INR_SUFFIXES) {
    const m = s.match(re)
    if (m) {
      const n = parseFloat(m[1].replace(/,/g, ''))
      return isFinite(n) ? n * mult : null
    }
  }
  const n = parseFloat(s.replace(/,/g, ''))
  return isFinite(n) ? n : null
}

/** Accepts ISO, dd-mm-yyyy / dd/mm/yyyy, and Excel serial dates. */
export function parseDate(v: unknown): string | null {
  if (v === null || v === undefined || v === '') return null
  if (v instanceof Date) return toISO(v)
  if (typeof v === 'number') {
    if (v > 20000 && v < 60000) {
      const d = XLSXDate(v)
      return toISO(d)
    }
    return null
  }
  const s = String(v).trim()
  if (!s) return null
  // dd-mm-yyyy or dd/mm/yyyy
  const dmy = s.match(/^(\d{1,2})[-/.](\d{1,2})[-/.](\d{4})$/)
  if (dmy) {
    const [, d, m, y] = dmy
    if (Number(m) >= 1 && Number(m) <= 12) return `${y}-${m.padStart(2, '0')}-${d.padStart(2, '0')}`
  }
  const d = new Date(s)
  if (!isNaN(d.getTime())) return toISO(d)
  return null
}

function XLSXDate(serial: number): Date {
  const utcDays = Math.floor(serial - 25569)
  const ms = utcDays * 86400 * 1000
  return new Date(ms)
}

function toISO(d: Date): string {
  const y = d.getUTCFullYear()
  const m = String(d.getUTCMonth() + 1).padStart(2, '0')
  const day = String(d.getUTCDate()).padStart(2, '0')
  if (y < 2000 || y > 2100) return null as unknown as string
  return `${y}-${m}-${day}`
}

const STATUS_MAP: [RegExp, OrderStatus][] = [
  [/ship|dispatch|transit|out for deliv|in transit|on the way/i, 'Shipped'],
  [/deliv|complete|success|done|closed/i, 'Delivered'],
  [/cancel/i, 'Cancelled'],
  [/return|refund|rto|exchange/i, 'Returned'],
  [/pend|process|confirm|packed|ready|handover|pickup/i, 'Pending'],
]

export function normalizeStatus(raw: unknown): { status: OrderStatus; raw: string } {
  const s = raw === null || raw === undefined ? '' : String(raw).trim()
  if (!s || s.toLowerCase() === 'nan' || s.toLowerCase() === 'null') return { status: 'Other', raw: s }
  for (const [re, status] of STATUS_MAP) {
    if (re.test(s)) return { status, raw: s }
  }
  return { status: 'Other', raw: s || 'unknown' }
}

export function cleanLabel(v: unknown, fallback: string): string {
  const s = v === null || v === undefined ? '' : String(v).trim()
  if (!s || s.toLowerCase() === 'nan' || s.toLowerCase() === 'null') return fallback
  return s
}

/**
 * Raw rows → typed orders. A row is skipped when it has no sales value AND no
 * units (nothing to chart). All other gaps become labeled 'Unknown' buckets or
 * null profit so partial datasets still render sensibly.
 */
export function transformRows(
  rows: Record<string, unknown>[],
  mapping: ColumnMapping,
): { orders: Order[]; report: DataQualityReport } {
  const orders: Order[] = []
  const report: DataQualityReport = {
    totalRows: rows.length,
    usedRows: 0,
    skippedRows: 0,
    missingDates: 0,
    missingSales: 0,
    unknownProfit: 0,
    unknownStatus: 0,
    columnMapping: mapping,
    warnings: [],
  }

  for (const row of rows) {
    const get = (col: string | null) => (col ? row[col] : undefined)

    const sales = parseNumber(get(mapping.sales)) ?? 0
    const units = parseNumber(get(mapping.units)) ?? 0
    if (sales === 0 && units === 0) {
      report.skippedRows++
      continue
    }

    const date = parseDate(get(mapping.date))
    if (!date) report.missingDates++

    const statusInfo = normalizeStatus(get(mapping.status))
    if (statusInfo.status === 'Other') report.unknownStatus++

    const profitRaw = parseNumber(get(mapping.profit))
    if (profitRaw === null) report.unknownProfit++

    orders.push({
      date,
      category: cleanLabel(get(mapping.category), 'Unknown'),
      product: cleanLabel(get(mapping.product), 'Unknown'),
      units,
      sales,
      profit: profitRaw,
      status: statusInfo.status,
      statusRaw: statusInfo.raw,
      payment: cleanLabel(get(mapping.payment), 'Unknown'),
      fulfillment: cleanLabel(get(mapping.fulfillment), 'Unknown'),
      state: cleanLabel(get(mapping.state), 'Unknown'),
    })
  }

  report.usedRows = orders.length
  report.skippedRows = report.totalRows - orders.length

  if (report.usedRows === 0) {
    report.warnings.push('No usable rows found. Check that the file has header row and data.')
  }
  if (report.missingDates > 0) {
    report.warnings.push(`${report.missingDates} rows have no valid date — monthly trend excludes them.`)
  }
  if (report.unknownProfit > 0 && report.usedRows > 0) {
    report.warnings.push('No profit column detected — profit charts use estimated margin (see note below).')
  }
  if (report.unknownStatus > 0) {
    report.warnings.push(`${report.unknownStatus} rows have an unrecognized order status.`)
  }

  return { orders, report }
}

/** Attach estimated profit when the dataset has none: sales × margin. */
export function withEstimatedProfit(dataset: Dataset, margin: number): Dataset {
  const hasRealProfit = dataset.orders.some((o) => o.profit !== null)
  if (hasRealProfit) return dataset
  return {
    ...dataset,
    orders: dataset.orders.map((o) => ({ ...o, profit: o.sales * margin })),
    report: {
      ...dataset.report,
      warnings: [
        ...dataset.report.warnings.filter(
          (w) => !w.includes('No profit column detected'),
        ),
        `Profit is estimated at ${Math.round(margin * 100)}% of sales (dataset has no profit column).`,
      ],
    },
  }
}
