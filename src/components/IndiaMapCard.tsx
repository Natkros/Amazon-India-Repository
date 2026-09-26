import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { IndiaMap } from './IndiaMap'
import type { StateData } from '../data/dashboardData'

interface IndiaMapCardProps {
  states: StateData[]
  onSelectState?: (stateName: string) => void
}

export const IndiaMapCard: React.FC<IndiaMapCardProps> = ({
  states,
  onSelectState,
}) => {
  const [metric, setMetric] = useState<'sales' | 'profit' | 'orders'>('sales')

  return (
    <div className="dashboard-card india-map-card">
      <div className="card-header">
        <h3 className="card-heading">Sales by State (Map)</h3>

        <div className="timeframe-select-pill">
          <select
            value={metric}
            onChange={(e) => setMetric(e.target.value as any)}
            className="timeframe-dropdown"
          >
            <option value="sales">Sales</option>
            <option value="profit">Profit</option>
            <option value="orders">Orders</option>
          </select>
          <ChevronDown size={12} className="dropdown-arrow" />
        </div>
      </div>

      <div className="card-body map-card-body" style={{ padding: '8px 12px 12px' }}>
        <IndiaMap states={states} metric={metric} onSelectState={onSelectState} />
      </div>
    </div>
  )
}
