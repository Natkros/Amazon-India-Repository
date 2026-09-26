import React, { useState } from 'react'
import type { StateData } from '../data/dashboardData'

interface StateSalesCardProps {
  states: StateData[]
  onSelectState?: (state: StateData) => void
}

export const StateSalesCard: React.FC<StateSalesCardProps> = ({
  states,
  onSelectState,
}) => {
  const [activeMetric, setActiveMetric] = useState<'Sales' | 'Orders' | 'Profit'>('Sales')

  const maxVal = 20000000 // 20M max scale

  return (
    <div className="dashboard-card state-sales-card">
      <div className="card-header">
        <div className="card-header-left">
          <h3 className="card-heading">Sales by State</h3>
          <span className="card-subheading">Top 10 States</span>
        </div>

        {/* Tab Switcher Pills */}
        <div className="metric-toggle-group">
          <button
            className={`metric-pill-btn ${activeMetric === 'Sales' ? 'active-orange' : ''}`}
            onClick={() => setActiveMetric('Sales')}
          >
            Sales
          </button>
          <button
            className={`metric-pill-btn ${activeMetric === 'Orders' ? 'active-orange' : ''}`}
            onClick={() => setActiveMetric('Orders')}
          >
            Orders
          </button>
          <button
            className={`metric-pill-btn ${activeMetric === 'Profit' ? 'active-orange' : ''}`}
            onClick={() => setActiveMetric('Profit')}
          >
            Profit
          </button>
        </div>
      </div>

      <div className="card-body state-bars-body">
        <div className="state-bars-list">
          {states.slice(0, 10).map((item) => {
            const rawVal =
              activeMetric === 'Sales'
                ? item.sales
                : activeMetric === 'Profit'
                ? item.profit
                : item.orders * 2500
            const barWidth = Math.min(100, Math.max(6, (rawVal / maxVal) * 100))

            const displayLabel =
              activeMetric === 'Sales'
                ? item.salesFormatted
                : activeMetric === 'Profit'
                ? item.profitFormatted
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
                      className="bar-fill-orange"
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
        <div className="state-x-axis">
          <span>₹ 0M</span>
          <span>5M</span>
          <span>10M</span>
          <span>15M</span>
          <span>20M</span>
        </div>
      </div>
    </div>
  )
}
