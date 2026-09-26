import React from 'react'
import {
  IndianRupee,
  BarChart2,
  ShoppingCart,
  Package,
  Tag,
  Percent,
  XCircle,
  Truck,
} from 'lucide-react'
import type { DashboardDataset } from '../data/dashboardData'

interface KpiRowProps {
  summary: DashboardDataset['summary']
}

export const KpiRow: React.FC<KpiRowProps> = ({ summary }) => {
  const kpiList = [
    {
      id: 'sales',
      title: 'Total Sales',
      value: summary.totalSalesFormatted,
      change: `▲ ${summary.salesGrowth}%`,
      sub: 'vs. previous period',
      trend: 'up',
      icon: IndianRupee,
      iconBg: '#059669',
      strokeColor: '#10b981',
      sparkline: 'M0,18 Q15,8 30,14 T60,6 T90,12 T120,4',
    },
    {
      id: 'profit',
      title: 'Total Profit',
      value: summary.totalProfitFormatted,
      change: `▲ ${summary.profitGrowth}%`,
      sub: 'vs. previous period',
      trend: 'up',
      icon: BarChart2,
      iconBg: '#7c3aed',
      strokeColor: '#a855f7',
      sparkline: 'M0,16 Q20,18 40,8 T80,10 T100,5 T120,2',
    },
    {
      id: 'orders',
      title: 'Total Orders',
      value: summary.totalOrdersFormatted,
      change: `▲ ${summary.ordersGrowth}%`,
      sub: 'vs. previous period',
      trend: 'up',
      icon: ShoppingCart,
      iconBg: '#2563eb',
      strokeColor: '#3b82f6',
      sparkline: 'M0,15 Q25,5 50,12 T90,8 T120,3',
    },
    {
      id: 'units',
      title: 'Units Sold',
      value: summary.unitsSoldFormatted,
      change: `▲ ${summary.unitsGrowth}%`,
      sub: 'vs. previous period',
      trend: 'up',
      icon: Package,
      iconBg: '#d97706',
      strokeColor: '#f59e0b',
      sparkline: 'M0,14 Q20,16 45,6 T85,10 T120,4',
    },
    {
      id: 'aov',
      title: 'Avg. Order Value',
      value: summary.avgOrderValueFormatted,
      change: `▲ ${summary.aovGrowth}%`,
      sub: 'vs. previous period',
      trend: 'up',
      icon: Tag,
      iconBg: '#dc2626',
      strokeColor: '#ef4444',
      sparkline: 'M0,16 Q20,8 40,14 T70,9 T100,12 T120,5',
    },
    {
      id: 'margin',
      title: 'Profit Margin',
      value: summary.profitMarginFormatted,
      change: `▲ ${summary.marginGrowth}%`,
      sub: 'vs. previous period',
      trend: 'up',
      icon: Percent,
      iconBg: '#0d9488',
      strokeColor: '#14b8a6',
      sparkline: 'M0,17 Q30,6 60,11 T90,7 T120,2',
    },
    {
      id: 'cancelled',
      title: 'Cancelled Orders',
      value: summary.cancelledOrdersFormatted,
      change: `▼ ${summary.cancellationRate}%`,
      sub: 'of total orders',
      trend: 'down-bad',
      icon: XCircle,
      iconBg: '#b91c1c',
      strokeColor: '#ef4444',
      sparkline: 'M0,6 Q30,12 60,10 T90,16 T120,18',
    },
    {
      id: 'delivered',
      title: 'Delivered Orders',
      value: summary.deliveredOrdersFormatted,
      change: `● ${summary.deliveryRate}%`,
      sub: 'of total orders',
      trend: 'info',
      icon: Truck,
      iconBg: '#1d4ed8',
      strokeColor: '#38bdf8',
      sparkline: 'M0,15 Q30,5 60,10 T90,4 T120,2',
    },
  ]

  return (
    <div className="kpi-grid-container">
      {kpiList.map((card) => {
        const Icon = card.icon
        return (
          <div key={card.id} className="kpi-metric-card">
            <div className="kpi-top-row">
              <div className="kpi-icon-badge" style={{ backgroundColor: card.iconBg }}>
                <Icon size={16} color="#ffffff" />
              </div>
              <span className="kpi-card-title">{card.title}</span>
            </div>

            <div className="kpi-value-row">
              <span className="kpi-main-number">{card.value}</span>
            </div>

            <div className="kpi-bottom-row">
              <div
                className={`kpi-trend-badge ${
                  card.trend === 'up'
                    ? 'trend-up'
                    : card.trend === 'down-bad'
                    ? 'trend-down'
                    : 'trend-info'
                }`}
              >
                <span>{card.change}</span>
                <span className="trend-subtext">{card.sub}</span>
              </div>
            </div>

            {/* Glowing sparkline wave */}
            <div className="kpi-sparkline-wrap">
              <svg viewBox="0 0 120 22" className="sparkline-svg" preserveAspectRatio="none">
                <path
                  d={card.sparkline}
                  fill="none"
                  stroke={card.strokeColor}
                  strokeWidth="2.2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
        )
      })}
    </div>
  )
}
