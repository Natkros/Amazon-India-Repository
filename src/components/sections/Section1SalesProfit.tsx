import {
  Bar,
  BarChart,
  CartesianGrid,
  ComposedChart,
  Legend,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import type { Metrics } from '../../metrics/computeMetrics'
import { ChartCard, KpiCard } from '../ui'
import { CurrencyTooltip, currencyAxis, categoryAxis } from '../chartHelpers'
import { formatINR, formatNumber, formatPct } from '../../lib/format'

export function Section1SalesProfit({ m }: { m: Metrics }) {
  return (
    <>
      <div className="kpi-grid">
        <KpiCard label="Total Sales" value={formatINR(m.totalSales)} accent />
        <KpiCard label="Total Profit" value={formatINR(m.totalProfit)} sub={m.profitMarginPct > 0 ? `${formatPct(m.profitMarginPct)} margin` : undefined} accent />
        <KpiCard label="Total Orders" value={formatNumber(m.totalOrders)} />
        <KpiCard label="Units Sold" value={formatNumber(m.totalUnits)} />
        <KpiCard label="Avg Order Value" value={formatINR(m.avgOrderValue)} />
        <KpiCard label="Profit Margin" value={m.profitMarginPct > 0 ? formatPct(m.profitMarginPct) : '—'} />
      </div>

      <div className="charts-grid">
        <ChartCard title="Monthly Sales & Profit Trend" subtitle="Cancelled and returned orders excluded" wide>
          <ResponsiveContainer width="100%" height={300}>
            <ComposedChart data={m.monthly}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="label" {...categoryAxis} />
              <YAxis {...currencyAxis()} />
              <Tooltip content={<CurrencyTooltip />} />
              <Legend />
              <Bar dataKey="sales" name="Sales" fill="#232f3e" radius={[4, 4, 0, 0]} />
              <Line type="monotone" dataKey="profit" name="Profit" stroke="#ff9900" strokeWidth={2.5} dot={{ r: 3 }} />
            </ComposedChart>
</ResponsiveContainer>
        </ChartCard>

        <ChartCard title="Sales vs Profit by Month" subtitle="Side-by-side comparison">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={m.monthly}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="label" {...categoryAxis} />
              <YAxis {...currencyAxis()} />
              <Tooltip content={<CurrencyTooltip />} />
              <Legend />
              <Bar dataKey="sales" name="Sales" fill="#232f3e" radius={[4, 4, 0, 0]} />
              <Bar dataKey="profit" name="Profit" fill="#ff9900" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>
    </>
  )
}
