import React from 'react'
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Cell,
  CartesianGrid,
  LabelList,
} from 'recharts'
import type { CategoryData } from '../data/dashboardData'

interface CategorySalesCardProps {
  categories: CategoryData[]
  onViewAll?: () => void
}

export const CategorySalesCard: React.FC<CategorySalesCardProps> = ({
  categories,
  onViewAll,
}) => {
  // Custom label renderer on top of each bar
  const renderCustomBarLabel = (props: any) => {
    const { x, y, width, value } = props
    if (!value) return null
    return (
      <text
        x={x + width / 2}
        y={y - 6}
        fill="#cbd5e1"
        textAnchor="middle"
        fontSize={10.5}
        fontWeight={600}
      >
        ₹ {value}M
      </text>
    )
  }

  return (
    <div className="dashboard-card category-sales-card">
      <div className="card-header">
        <h3 className="card-heading">Sales by Category</h3>
        {onViewAll && (
          <button className="card-action-link" onClick={onViewAll}>
            View All
          </button>
        )}
      </div>

      <div className="card-body" style={{ height: '220px', width: '100%' }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={categories}
            margin={{ top: 20, right: 10, left: -15, bottom: 0 }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="rgba(255, 255, 255, 0.07)"
            />
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              interval={0}
              tick={{ fill: '#94a3b8', fontSize: 10 }}
              tickFormatter={(val) => {
                if (val === 'Beauty & Personal Care') return 'Beauty & Personal Care'
                if (val === 'Home & Kitchen') return 'Home & Kitchen'
                return val
              }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#94a3b8', fontSize: 11 }}
              tickFormatter={(val) => `₹ ${val}M`}
              domain={[0, 20]}
              ticks={[0, 5, 10, 15, 20]}
            />
            <Tooltip
              formatter={(val: any) => [`₹ ${val}M`, 'Sales']}
              contentStyle={{
                background: '#0f172a',
                border: '1px solid rgba(255,255,255,0.15)',
                borderRadius: '8px',
                color: '#fff',
                fontSize: '12px',
              }}
            />
            <Bar dataKey="sales" radius={[4, 4, 0, 0]} barSize={26}>
              <LabelList dataKey="sales" content={renderCustomBarLabel} />
              {categories.map((entry, index) => (
                <Cell key={`cat-cell-${index}`} fill={entry.color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
