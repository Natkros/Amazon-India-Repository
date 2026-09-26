import type { Order, OrderStatus } from '../types'

export const ALL_STATUSES: OrderStatus[] = [
  'Delivered',
  'Shipped',
  'Pending',
  'Cancelled',
  'Returned',
  'Other',
]

export interface Metrics {
  totalSales: number
  totalProfit: number
  totalOrders: number
  totalUnits: number
  avgOrderValue: number
  profitMarginPct: number
  /** true when the dataset supplies a real profit column */
  hasRealProfit: boolean
  monthly: { month: string; label: string; sales: number; profit: number; orders: number }[]
  byCategory: { name: string; sales: number; profit: number; units: number; orders: number }[]
  topProducts: { name: string; sales: number }[]
  statusCounts: { status: OrderStatus; count: number; sales: number }[]
  returnRatePct: number
  cancellationRatePct: number
  returnsByCategory: {
    name: string
    returned: number
    cancelled: number
    total: number
    returnPct: number
  }[]
  byPayment: { name: string; sales: number; profit: number }[]
  byFulfillment: { name: string; sales: number; profit: number }[]
  byState: { name: string; sales: number; profit: number; orders: number }[]
}

/** Orders that actually generate revenue (excludes cancelled/returned). */
export function isRevenueOrder(o: Order): boolean {
  return o.status !== 'Cancelled' && o.status !== 'Returned'
}

export function computeMetrics(orders: Order[]): Metrics {
  const revenueOrders = orders.filter(isRevenueOrder)

  const totalSales = sum(revenueOrders.map((o) => o.sales))
  const totalProfit = sum(revenueOrders.map((o) => o.profit ?? 0))
  const hasProfit = revenueOrders.some((o) => o.profit !== null)

  const totalOrders = orders.length
  const totalUnits = sum(revenueOrders.map((o) => o.units))
  const avgOrderValue = revenueOrders.length > 0 ? totalSales / revenueOrders.length : 0
  const profitMarginPct = totalSales > 0 && hasProfit ? (totalProfit / totalSales) * 100 : 0

  return {
    totalSales,
    totalProfit,
    totalOrders,
    totalUnits,
    avgOrderValue,
    profitMarginPct,
    hasRealProfit: hasProfit,
    monthly: monthlyTrend(orders),
    byCategory: groupByField(orders, 'category'),
    topProducts: topBySales(revenueOrders, (o) => o.product, 10),
    statusCounts: statusBreakdown(orders),
    returnRatePct: rate(orders, 'Returned'),
    cancellationRatePct: rate(orders, 'Cancelled'),
    returnsByCategory: returnsByCategory(orders),
    byPayment: groupByLight(revenueOrders, (o) => o.payment),
    byFulfillment: groupByLight(revenueOrders, (o) => o.fulfillment),
    byState: groupByField(orders, 'state'),
  }
}

/* ---------- helpers (pure, testable) ---------- */

function sum(nums: number[]): number {
  let t = 0
  for (const n of nums) t += n
  return t
}

function monthlyTrend(orders: Order[]): Metrics['monthly'] {
  const map = new Map<string, { sales: number; profit: number; orders: number }>()
  for (const o of orders) {
    if (!o.date || !isRevenueOrder(o)) continue
    const month = o.date.slice(0, 7)
    const agg = map.get(month) ?? { sales: 0, profit: 0, orders: 0 }
    agg.sales += o.sales
    agg.profit += o.profit ?? 0
    agg.orders += 1
    map.set(month, agg)
  }
  return [...map.entries()]
    .sort((a, b) => a[0].localeCompare(b[0]))
    .map(([month, agg]) => ({
      month,
      label: monthLabel(month),
      sales: round(agg.sales),
      profit: round(agg.profit),
      orders: agg.orders,
    }))
}

function monthLabel(ym: string): string {
  const [, m] = ym.split('-').map(Number)
  const names = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  return `${names[(m ?? 1) - 1] ?? '?'} ${ym.slice(0, 4)}`
}

function groupByField(
  orders: Order[],
  field: 'category' | 'state',
): Metrics['byCategory'] {
  const map = new Map<string, { sales: number; profit: number; units: number; orders: number }>()
  for (const o of orders) {
    const key = o[field] || 'Unknown'
    const agg = map.get(key) ?? { sales: 0, profit: 0, units: 0, orders: 0 }
    agg.sales += o.sales
    agg.profit += o.profit ?? 0
    agg.units += o.units
    agg.orders += 1
    map.set(key, agg)
  }
  return [...map.entries()]
    .map(([name, agg]) => ({
      name,
      sales: round(agg.sales),
      profit: round(agg.profit),
      units: agg.units,
      orders: agg.orders,
    }))
    .sort((a, b) => b.sales - a.sales)
}

function groupByLight(
  orders: Order[],
  keyFn: (o: Order) => string,
): { name: string; sales: number; profit: number }[] {
  const map = new Map<string, { sales: number; profit: number }>()
  for (const o of orders) {
    const key = keyFn(o) || 'Unknown'
    const agg = map.get(key) ?? { sales: 0, profit: 0 }
    agg.sales += o.sales
    agg.profit += o.profit ?? 0
    map.set(key, agg)
  }
  return [...map.entries()]
    .map(([name, agg]) => ({ name, sales: round(agg.sales), profit: round(agg.profit) }))
    .sort((a, b) => b.sales - a.sales)
}

function topBySales(
  orders: Order[],
  keyFn: (o: Order) => string,
  n: number,
): { name: string; sales: number }[] {
  const map = new Map<string, number>()
  for (const o of orders) {
    const key = keyFn(o) || 'Unknown'
    map.set(key, (map.get(key) ?? 0) + o.sales)
  }
  return [...map.entries()]
    .map(([name, sales]) => ({ name, sales: round(sales) }))
    .sort((a, b) => b.sales - a.sales)
    .slice(0, n)
}

function statusBreakdown(orders: Order[]): Metrics['statusCounts'] {
  const map = new Map<OrderStatus, { count: number; sales: number }>()
  for (const s of ALL_STATUSES) map.set(s, { count: 0, sales: 0 })
  for (const o of orders) {
    const agg = map.get(o.status) ?? { count: 0, sales: 0 }
    agg.count += 1
    agg.sales += o.sales
    map.set(o.status, agg)
  }
  return ALL_STATUSES.map((status) => ({
    status,
    count: map.get(status)!.count,
    sales: round(map.get(status)!.sales),
  })).filter(
    (s) => s.count > 0 || ['Delivered', 'Shipped', 'Cancelled', 'Returned'].includes(s.status),
  )
}

function rate(orders: Order[], status: OrderStatus): number {
  if (orders.length === 0) return 0
  const n = orders.filter((o) => o.status === status).length
  return round((n / orders.length) * 100)
}

function returnsByCategory(orders: Order[]): Metrics['returnsByCategory'] {
  const map = new Map<string, { returned: number; cancelled: number; total: number }>()
  for (const o of orders) {
    const key = o.category || 'Unknown'
    const agg = map.get(key) ?? { returned: 0, cancelled: 0, total: 0 }
    if (o.status === 'Returned') agg.returned += 1
    if (o.status === 'Cancelled') agg.cancelled += 1
    agg.total += 1
    map.set(key, agg)
  }
  return [...map.entries()]
    .map(([name, agg]) => ({
      name,
      returned: agg.returned,
      cancelled: agg.cancelled,
      total: agg.total,
      returnPct: agg.total > 0 ? round((agg.returned / agg.total) * 100) : 0,
    }))
    .sort((a, b) => b.returned + b.cancelled - (a.returned + a.cancelled))
}

function round(n: number): number {
  return Math.round(n * 100) / 100
}
