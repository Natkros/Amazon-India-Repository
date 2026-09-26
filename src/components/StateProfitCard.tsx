import React, { useState } from 'react'
import type { StateData } from '../data/dashboardData'

interface StateProfitCardProps {
  states: StateData[]
  onSelectState?: (state: StateData) => void
}

export const StateProfitCard: React.FC<StateProfitCardProps> = ({
  states,
  onSelectState,
}) => {
  const [activeMetric, setActiveMetric] = useState<'Profit' | 'Sales' | 'Orders'>('Profit')

  const maxVal = 3000000 // 3M max scale for Profit

  return (
    <div className="dashboard-card state-profit-card">
      <div className="card-header">
        <div className="card-header-left">
          <h3 className="card-heading">Profit by State</h3>
          <span className="card-subheading">Top 10 States</span>
        </div>

        {/* Tab Switcher Pills */}
        <div className="metric-toggle-group">
          <button
            className={`metric-pill-btn ${activeMetric === 'Profit' ? 'active-emerald' : ''}`}
            onClick={() => setActiveMetric('Profit')}
          >
            Profit
          </button>
          <button
            className={`metric-pill-btn ${activeMetric === 'Sales' ? 'active-emerald' : ''}`}
            onClick={() => setActiveMetric('Sales')}
          >
            Sales
          </button>
          <button
            className={`metric-pill-btn ${activeMetric === 'Orders' ? 'active-emerald' : ''}`}
            onClick={() => setActiveMetric('Orders')}
          >
            Orders
          </button>
        </div>
      </div>

      <div className="card-body state-bars-body">
        <div className="state-bars-list">
          {states.slice(0, 10).map((item) => {
            const rawVal =
              activeMetric === 'Profit'
                ? item.profit
                : activeMetric === 'Sales'
                ? item.sales / 6.5
                : (item.orders / 3) * 1000

            const barWidth = Math.min(100, Math.max(6, (rawVal / maxVal) * 100))

            const displayLabel =
              activeMetric === 'Profit'
                ? item.profitFormatted
                : activeMetric === 'Sales'
                ? item.salesFormatted
                : item.ordersFormatted

            return (
              <div
                key={item.id}
                className="state-bar-row"
                onClick={() => onSelectState?.(item)}
              >
                <span className="state-name-label" title={item.name}>
                  {item.name}
                </span>

                <div className="state-bar-track-wrap">
                  <div className="bar-track">
                    <div
                      className="bar-fill-emerald"
                      style={{ width: `${barWidth}%` }}
                    />
                  </div>
                  <span className="bar-end-value">{displayLabel}</span>
                </div>
              </div>
            )
          })}
        </div>

        {/* X-Axis Scale */}
        <div className="state-x-axis profit-scale">
          <span>₹ 0M</span>
          <span>1M</span>
          <span>2M</span>
          <span>3M</span>
        </div>
      </div>
    </div>
  )
}
