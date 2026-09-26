import { useRef } from 'react'
import type { Filters } from '../hooks/useFilters'

export function FiltersBar({
  filters,
  setFilters,
  categories,
  states,
  dateRange,
  onUpload,
}: {
  filters: Filters
  setFilters: (f: Filters) => void
  categories: string[]
  states: string[]
  dateRange: { min: string; max: string }
  onUpload: (file: File) => void
}) {
  const fileRef = useRef<HTMLInputElement>(null)
  const set = (patch: Partial<Filters>) => setFilters({ ...filters, ...patch })
  const isFiltered =
    filters.category !== 'All' || filters.state !== 'All' || filters.dateFrom !== '' || filters.dateTo !== ''

  return (
    <div className="filters-bar">
      <label>
        From
        <input
          type="date"
          value={filters.dateFrom}
          min={dateRange.min || undefined}
          max={filters.dateTo || dateRange.max || undefined}
          onChange={(e) => set({ dateFrom: e.target.value })}
        />
      </label>
      <label>
        To
        <input
          type="date"
          value={filters.dateTo}
          min={filters.dateFrom || dateRange.min || undefined}
          max={dateRange.max || undefined}
          onChange={(e) => set({ dateTo: e.target.value })}
        />
      </label>
      <label>
        Category
        <select value={filters.category} onChange={(e) => set({ category: e.target.value })}>
          <option value="All">All categories</option>
          {categories.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </label>
      <label>
        State
        <select value={filters.state} onChange={(e) => set({ state: e.target.value })}>
          <option value="All">All states</option>
          {states.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </label>
      {isFiltered && (
        <button
          className="btn-secondary"
          onClick={() =>
            setFilters({ dateFrom: '', dateTo: '', category: 'All', state: 'All' })
          }
        >
          Clear filters
        </button>
      )}
      <button className="btn-upload" onClick={() => fileRef.current?.click()}>
        ⬆ Load different data file
      </button>
      <input
        ref={fileRef}
        type="file"
        accept=".csv,.xlsx,.xls,.json"
        style={{ display: 'none' }}
        onChange={(e) => {
          const f = e.target.files?.[0]
          if (f) onUpload(f)
          e.target.value = ''
        }}
      />
    </div>
  )
}
