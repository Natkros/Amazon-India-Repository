import React from 'react'
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from 'recharts'
import type { PaymentData } from '../data/dashboardData'

interface PaymentMethodsCardProps {
  data: PaymentData[]
  totalOrdersFormatted: string
}

export const PaymentMethodsCard: React.FC<PaymentMethodsCardProps> = ({
  data,
  totalOrdersFormatted,
}) => {
  return (
    <div className="dashboard-card payment-methods-card">
      <div className="card-header">
        <h3 className="card-heading">Payment Methods</h3>
      </div>

      <div className="card-body donut-chart-flex">
        {/* Donut Chart with Center Text */}
        <div className="donut-chart-wrapper" style={{ position: 'relative', width: '150px', height: '160px' }}>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                dataKey="percentage"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius={44}
                outerRadius={66}
                paddingAngle={2}
                stroke="none"
              >
                {data.map((entry, index) => (
                  <Cell key={`pay-cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                formatter={(value: any, name: any) => [`${value}%`, name]}
                contentStyle={{
                  background: '#0f172a',
                  border: '1px solid rgba(255,255,255,0.15)',
                  borderRadius: '8px',
                  color: '#fff',
                  fontSize: '12px',
                }}
              />
            </PieChart>
          </ResponsiveContainer>

          {/* Center Text inside Donut */}
          <div className="donut-center-overlay">
            <span className="donut-center-value">{totalOrdersFormatted}</span>
            <span className="donut-center-label">Orders</span>
          </div>
        </div>

        {/* Legend List with percentage */}
        <div className="donut-legend-list payment-legend">
          {data.map((item) => (
            <div key={item.name} className="legend-row-item">
              <div className="legend-left">
                <span
                  className="status-dot"
                  style={{ backgroundColor: item.color }}
                ></span>
                <span className="status-name">{item.name}</span>
              </div>
              <span className="status-pct">{item.percentage}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
