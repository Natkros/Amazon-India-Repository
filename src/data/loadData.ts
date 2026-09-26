import Papa from 'papaparse'
import * as XLSX from 'xlsx'
import type { Dataset } from '../types'
import { transformRows } from './transform'
import { mapColumns } from './columnMap'

export type RawRows = Record<string, unknown>[]

/** Read a File (browser upload) or fetch a path relative to public/. */
export async function loadDataset(source: File | string): Promise<Dataset> {
  let rows: RawRows
  let fileName: string

  if (typeof source === 'string') {
    const res = await fetch(source)
    if (!res.ok) throw new Error(`Could not load ${source} (HTTP ${res.status})`)
    // Guard against dev-server SPA fallback: a missing data file can come back
    // as HTTP 200 with index.html — reject anything that isn't the expected type.
    const contentType = res.headers.get('content-type') ?? ''
    if (contentType.includes('text/html')) {
      throw new Error(`No dataset found at ${source}`)
    }
    fileName = source.split('/').pop() ?? source
    const buf = await res.arrayBuffer()
    const name = fileName.toLowerCase()
    if (name.endsWith('.xlsx') || name.endsWith('.xls')) {
      rows = parseExcelBuffer(buf)
    } else {
      rows = parseText(new TextDecoder().decode(buf), fileName)
    }
  } else {
    fileName = source.name
    const buf = await source.arrayBuffer()
    const name = fileName.toLowerCase()
    if (name.endsWith('.xlsx') || name.endsWith('.xls')) {
      rows = parseExcelBuffer(buf)
    } else {
      const text = new TextDecoder().decode(buf)
      rows = parseText(text, fileName)
    }
  }

  if (rows.length === 0) throw new Error('The file contains no data rows.')

  const headers = Object.keys(rows[0])
  const mapping = mapColumns(headers)
  const { orders, report } = transformRows(rows, mapping)
  return { orders, report, fileName }
}

function parseText(text: string, fileName: string): RawRows {
  if (fileName.toLowerCase().endsWith('.json')) {
    const data = JSON.parse(text)
    if (!Array.isArray(data)) throw new Error('JSON must be an array of row objects.')
    return data as RawRows
  }
  const result = Papa.parse<Record<string, unknown>>(text, {
    header: true,
    skipEmptyLines: 'greedy',
    dynamicTyping: false,
  })
  if (result.errors.length > 0 && result.data.length === 0) {
    throw new Error(`CSV parse failed: ${result.errors[0].message}`)
  }
  return result.data
}

function parseExcelBuffer(buf: ArrayBuffer): RawRows {
  const wb = XLSX.read(buf, { type: 'array' })
  const sheetName = wb.SheetNames[0]
  const sheet = wb.Sheets[sheetName]
  const rows = XLSX.utils.sheet_to_json<Record<string, unknown>>(sheet, { defval: null })
  return rows
}
