import type { ColumnMapping } from '../types'

/**
 * Header synonyms → normalized field. Matching is case/space/punctuation
 * insensitive, so 'ship-state', 'Ship State', 'SHIP-STATE ' all match.
 */
export const HEADER_SYNONYMS: Record<keyof Omit<ColumnMapping, never>, string[]> = {
  date: [
    'date',
    'order date',
    'orderdate',
    'order date ',
    'purchase date',
    'date of sale',
    'transaction date',
    'invoice date',
  ],
  category: [
    'category',
    'product category',
    'product type',
    'main category',
    'segment',
  ],
  product: [
    'product',
    'product name',
    'item name',
    'sku',
    'sku id',
    'asin',
    'style',
    'product title',
    'item',
  ],
  units: ['qty', 'quantity', 'units', 'units sold', 'qty ordered', 'order qty', 'qty sold'],
  sales: [
    'amount',
    'sales',
    'revenue',
    'sale price',
    'selling price',
    'order value',
    'total price',
    'total sales',
    'net amount',
    'gross amount',
  ],
  profit: ['profit', 'profit amount', 'earnings', 'net profit', 'margin amount'],
  status: [
    'status',
    'order status',
    'shipment status',
    'delivery status',
    'courier status',
    'fulfilment status',
  ],
  payment: [
    'payment method',
    'payment',
    'payment mode',
    'payment type',
    'pay type',
    'b2b or b2c',
    'sales channel',
  ],
  fulfillment: [
    'fulfilment',
    'fulfillment',
    'fulfilment method',
    'fulfillment method',
    'fulfilled by',
    'service level',
  ],
  state: [
    'ship state',
    'state',
    'ship-state',
    'shipping state',
    'state name',
    'customer state',
    'receiver state',
  ],
}

/** Normalize a header for fuzzy matching: lowercase, collapse spaces, strip punctuation. */
export function normalizeHeader(h: string): string {
  return h
    .toString()
    .trim()
    .toLowerCase()
    .replace(/[\s_\-./\\]+/g, ' ')
    .replace(/[^a-z0-9 %]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
}

/**
 * Map dataset columns to normalized fields.
 * Priority: user overrides → longest-synonym match (most specific wins).
 * Preference order lets 'courier status' beat 'status' when both exist.
 */
export function mapColumns(
  headers: string[],
  overrides: Partial<Record<keyof Omit<ColumnMapping, never>, string | null>> = {},
): ColumnMapping {
  const mapping: ColumnMapping = {
    date: null,
    category: null,
    product: null,
    units: null,
    sales: null,
    profit: null,
    status: null,
    payment: null,
    fulfillment: null,
    state: null,
  }

  const normHeaders = headers.map((h) => ({ raw: h, norm: normalizeHeader(h) }))

  // Field preference order for synonym resolution (most important first).
  const fieldOrder: (keyof Omit<ColumnMapping, never>)[] = [
    'sales',
    'date',
    'status',
    'category',
    'product',
    'units',
    'payment',
    'fulfillment',
    'state',
    'profit',
  ]

  for (const field of fieldOrder) {
    if (field in overrides && overrides[field] !== undefined) {
      const override = overrides[field]
      if (override === null) continue // user explicitly unmapped
      const match = normHeaders.find((h) => h.raw === override)
      if (match) {
        mapping[field] = match.raw
        continue
      }
    }
    // Synonym matching: prefer longest synonym (most specific) that matches some header.
    let best: { raw: string; len: number } | null = null
    for (const syn of HEADER_SYNONYMS[field]) {
      const nsyn = normalizeHeader(syn)
      for (const h of normHeaders) {
        if (h.norm === nsyn) {
          if (!best || nsyn.length > best.len) {
            best = { raw: h.raw, len: nsyn.length }
          }
        }
      }
    }
    if (best) mapping[field] = best.raw
  }

  // Unmapped headers: fall back to anything containing a key word.
  // Covers suffixed headers like 'Total_Sales_INR' or 'Profit_INR'.
  const fallbacks: Partial<Record<keyof Omit<ColumnMapping, never>, string[]>> = {
    date: ['date'],
    status: ['status'],
    category: ['category'],
    payment: ['pay'],
    fulfillment: ['fulfil', 'service'],
    state: ['state'],
    sales: ['sales', 'revenue', 'amount'],
    units: ['qty', 'quantity'],
    profit: ['profit'],
    product: ['product', 'item', 'sku'],
  }
  for (const [field, words] of Object.entries(fallbacks) as [
    keyof Omit<ColumnMapping, never>,
    string[],
  ][]) {
    if (mapping[field]) continue
    const h = normHeaders.find((h) => words.some((w) => h.norm.includes(w)))
    if (h) mapping[field] = h.raw
  }

  return mapping
}
