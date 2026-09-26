import React, { useState } from 'react'
import {
  ResponsiveContainer,
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from 'recharts'
import { ChevronDown } from 'lucide-react'
import type { MonthlyTrend } from '../data/dashboardData'

interface SalesProfitTrendCardProps {
  data: MonthlyTrend[]
}

export const SalesProfitTrendCard: React.FC<SalesProfitTrendCardProps> = ({ data }) => {
  const [timeframe, setTimeframe] = useState<'Monthly' | 'Quarterly' | 'Weekly'>('Monthly')

  // Custom Dark Tooltip
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="chart-custom-tooltip">
          <p className="tooltip-title">{label}</p>
          <div className="tooltip-item" style={{ color: '#f97316' }}>
            <span>Sales:</span>
            <strong>₹ {payload[0]?.value}M</strong>
          </div>
          <div className="tooltip-item" style={{ color: '#ffffff' }}>
            <span>Profit:</span>
            <strong>₹ {payload[1]?.value}M</strong>
          </div>
        </div>
      )
    }
    return null
  }

  return (
    <div className="dashboard-card sales-profit-trend-card">
      <div className="card-header">
        <div className="card-title-group">
          <h3 className="card-heading">Sales & Profit Trend</h3>
        </div>

        <div className="card-header-actions">
          <div className="chart-legend-inline">
            <div className="legend-indicator">
              <span className="legend-box" style={{ background: '#f97316' }}></span>
              <span>Sales</span>
            </div>
            <div className="legend-indicator">
              <span className="legend-dot" style={{ background: '#ffffff' }}></span>
              <span>Profit</span>
            </div>
          </div>

          <div className="timeframe-select-pill">
            <select
              value={timeframe}
              onChange={(e) => setTimeframe(e.target.value as any)}
              className="timeframe-dropdown"
            >
              <option value="Monthly">Monthly</option>
              <option value="Quarterly">Quarterly</option>
              <option value="Weekly">Weekly</option>
            </select>
            <ChevronDown size={12} className="dropdown-arrow" />
          </div>
        </div>
      </div>

      <div className="card-body chart-body-wrap" style={{ height: '220px', width: '100%' }}>
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart
            data={data}
            margin={{ top: 15, right: 10, left: -15, bottom: 0 }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="rgba(255, 255, 255, 0.07)"
            />
            <XAxis
              dataKey="monthShort"
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#94a3b8', fontSize: 11 }}
            />
            {/* Left Y Axis for Sales (₹ 0M - ₹ 12M) */}
            <YAxis
              yAxisId="left"
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#94a3b8', fontSize: 11 }}
              tickFormatter={(val) => `₹ ${val}M`}
              domain={[0, 12]}
              ticks={[0, 2, 4, 6, 8, 10]}
            />
            {/* Right Y Axis for Profit (₹ 0 - ₹ 2.0M) */}
            <YAxis
              yAxisId="right"
              orientation="right"
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#94a3b8', fontSize: 11 }}
              tickFormatter={(val) => `₹ ${val}M`}
              domain={[0, 2.2]}
              ticks={[0, 0.5, 1.0, 1.5, 2.0]}
            />
            <Tooltip content={<CustomTooltip />} />
            {/* Orange Bars for Sales */}
            <Bar
              yAxisId="left"
              dataKey="sales"
              name="Sales"
              fill="#f97316"
              radius={[4, 4, 0, 0]}
              barSize={18}
            />
            {/* Glowing White Line for Profit */}
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="profit"
              name="Profit"
              stroke="#ffffff"
              strokeWidth={2.5}
              dot={{ r: 3.5, fill: '#ffffff', stroke: '#0f172a', strokeWidth: 1.5 }}
              activeDot={{ r: 6, fill: '#ffffff', stroke: '#f97316', strokeWidth: 2 }}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
