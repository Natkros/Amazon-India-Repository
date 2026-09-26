// Normalized order row used across the dashboard.
export interface Order {
  /** ISO date 'YYYY-MM-DD' (null when missing/unparseable) */
  date: string | null
  category: string
  product: string
  /** Number of units in this order row (0 when missing) */
  units: number
  /** Order value in ₹ (0 when missing) */
  sales: number
  /** Profit in ₹ (null = unknown → excluded from profit metrics) */
  profit: number | null
  /** Normalized status: Delivered | Shipped | Pending | Cancelled | Returned | Other */
  status: OrderStatus
  /** Raw status text as found in the dataset */
  statusRaw: string
  /** Normalized payment method, 'Unknown' when missing */
  payment: string
  /** Normalized fulfillment method, 'Unknown' when missing */
  fulfillment: string
  /** State name, 'Unknown' when missing */
  state: string
}

export type OrderStatus =
  | 'Delivered'
  | 'Shipped'
  | 'Pending'
  | 'Cancelled'
  | 'Returned'
  | 'Other'

export interface DataQualityReport {
  totalRows: number
  usedRows: number
  skippedRows: number
  missingDates: number
  missingSales: number
  unknownProfit: number
  unknownStatus: number
  columnMapping: ColumnMapping
  warnings: string[]
}

export interface ColumnMapping {
  date: string | null
  category: string | null
  product: string | null
  units: string | null
  sales: string | null
  profit: string | null
  status: string | null
  payment: string | null
  fulfillment: string | null
  state: string | null
}

export interface Dataset {
  orders: Order[]
  report: DataQualityReport
  fileName: string
}
