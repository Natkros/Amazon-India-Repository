import { useMemo, useState } from 'react'
import type { Order } from '../types'

export interface Filters {
  dateFrom: string
  dateTo: string
  category: string
  state: string
}

export const EMPTY_FILTERS: Filters = {
  dateFrom: '',
  dateTo: '',
  category: 'All',
  state: 'All',
}

export function applyFilters(orders: Order[], f: Filters): Order[] {
  return orders.filter((o) => {
    if (f.category !== 'All' && o.category !== f.category) return false
    if (f.state !== 'All' && o.state !== f.state) return false
    if (f.dateFrom && o.date && o.date < f.dateFrom) return false
    if (f.dateTo && o.date && o.date > f.dateTo) return false
    return true
  })
}

export function useFilters(orders: Order[]) {
  const [filters, setFilters] = useState<Filters>(EMPTY_FILTERS)

  const categories = useMemo(
    () => [...new Set(orders.map((o) => o.category).filter((c) => c && c !== 'Unknown'))].sort(),
    [orders],
  )
  const states = useMemo(
    () => [...new Set(orders.map((o) => o.state).filter((s) => s && s !== 'Unknown'))].sort(),
    [orders],
  )
  const dateRange = useMemo(() => {
    const dates = orders.map((o) => o.date).filter((d): d is string => d !== null).sort()
    return { min: dates[0] ?? '', max: dates[dates.length - 1] ?? '' }
  }, [orders])

  const filtered = useMemo(() => applyFilters(orders, filters), [orders, filters])

  return { filters, setFilters, categories, states, dateRange, filtered }
}
