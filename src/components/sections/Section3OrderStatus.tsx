import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts'
import type { Metrics } from '../../metrics/computeMetrics'
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from 'recharts'
import { ChartCard, KpiCard } from '../ui'
import { CountTooltip, CurrencyTooltip, countAxis, currencyAxis, categoryAxis } from '../chartHelpers'
import { formatINR, formatNumber, formatPct } from '../../lib/format'

const STATUS_COLORS: Record<string, string> = {
  Delivered: '#2e7d32',
  Shipped: '#232f3e',
  Pending: '#f0ad4e',
  Cancelled: '#c0392b',
  Returned: '#e67e22',
  Other: '#8d99ae',
}

export function Section3OrderStatus({ m }: { m: Metrics }) {
  const statusData = m.statusCounts.map((s) => ({ ...s, name: s.status }))
  const lostSales =
    (m.statusCounts.find((s) => s.status === 'Cancelled')?.sales ?? 0) +
    (m.statusCounts.find((s) => s.status === 'Returned')?.sales ?? 0)

  return (
    <>
      <div className="kpi-grid">
        <KpiCard label="Delivered Orders" value={formatNumber(countOf(m, 'Delivered'))} accent />
        <KpiCard label="Shipped Orders" value={formatNumber(countOf(m, 'Shipped'))} />
        <KpiCard label="Cancelled Orders" value={formatNumber(countOf(m, 'Cancelled'))} />
        <KpiCard label="Returned Orders" value={formatNumber(countOf(m, 'Returned'))} />
        <KpiCard label="Cancellation Rate" value={formatPct(m.cancellationRatePct)} />
        <KpiCard label="Return Rate" value={formatPct(m.returnRatePct)} />
      </div>

      <div className="charts-grid">
        <ChartCard title="Order Status Breakdown" subtitle="Share of total orders">
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie data={statusData} dataKey="count" nameKey="name" innerRadius={70} outerRadius={110} paddingAngle={2}>
                {statusData.map((s) => (
                  <Cell key={s.status} fill={STATUS_COLORS[s.status] ?? '#8d99ae'} />
                ))}
              </Pie>
              <Tooltip content={<CountTooltip />} />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard
          title="Revenue at Risk"
          subtitle={`Sales value of cancelled + returned orders: ${formatINR(lostSales)}`}
        >
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={statusData} margin={{ left: 16 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="name" {...categoryAxis} />
              <YAxis {...currencyAxis()} />
              <Tooltip content={<CurrencyTooltip />} />
              <Bar dataKey="sales" name="Sales value" radius={[4, 4, 0, 0]}>
                {statusData.map((s) => (
                  <Cell key={s.status} fill={STATUS_COLORS[s.status] ?? '#8d99ae'} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title="Category-wise Returns & Cancellations" subtitle="Order counts by category" wide>
          <ResponsiveContainer width="100%" height={Math.max(280, m.returnsByCategory.length * 44)}>
            <BarChart data={m.returnsByCategory} layout="vertical" margin={{ left: 24 }}>
              <CartesianGrid strokeDasharray="3 3" horizontal={false} />
              <XAxis type="number" {...countAxis} />
              <YAxis type="category" dataKey="name" width={140} {...countAxis} />
              <Tooltip content={<CountTooltip />} />
              <Legend />
              <Bar dataKey="returned" name="Returned" stackId="a" fill="#e67e22" radius={[0, 0, 0, 0]} />
              <Bar dataKey="cancelled" name="Cancelled" stackId="a" fill="#c0392b" radius={[0, 4, 4, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>
    </>
  )
}

function countOf(m: Metrics, status: string): number {
  return m.statusCounts.find((s) => s.status === status)?.count ?? 0
}
