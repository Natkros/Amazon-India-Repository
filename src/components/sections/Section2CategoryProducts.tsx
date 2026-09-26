import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import type { Metrics } from '../../metrics/computeMetrics'
import { ChartCard } from '../ui'
import { CountTooltip, CurrencyTooltip, countAxis, currencyAxis } from '../chartHelpers'
import { formatNumber } from '../../lib/format'

const ORANGE = '#ff9900'
const NAVY = '#232f3e'

export function Section2CategoryProducts({ m }: { m: Metrics }) {
  return (
    <div className="charts-grid">
      <ChartCard title="Category-wise Sales" subtitle="All orders including cancelled/returned" wide>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={m.byCategory} layout="vertical" margin={{ left: 24 }}>
            <CartesianGrid strokeDasharray="3 3" horizontal={false} />
            <XAxis type="number" {...currencyAxis()} />
            <YAxis type="category" dataKey="name" width={120} {...countAxis} />
            <Tooltip content={<CurrencyTooltip />} />
            <Bar dataKey="sales" name="Sales" fill={NAVY} radius={[0, 4, 4, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </ChartCard>

      <ChartCard
        title="Category-wise Profit"
        subtitle={m.hasRealProfit ? 'Actual profit from dataset' : 'Estimated (dataset has no profit column)'}
        wide
      >
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={m.byCategory} layout="vertical" margin={{ left: 24 }}>
            <CartesianGrid strokeDasharray="3 3" horizontal={false} />
            <XAxis type="number" {...currencyAxis()} />
            <YAxis type="category" dataKey="name" width={120} {...countAxis} />
            <Tooltip content={<CurrencyTooltip />} />
            <Bar dataKey="profit" name="Profit" fill={ORANGE} radius={[0, 4, 4, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </ChartCard>

      <ChartCard title="Category-wise Units Sold" wide>
        <ResponsiveContainer width="100%" height={280}>
          <BarChart data={m.byCategory} layout="vertical" margin={{ left: 24 }}>
            <CartesianGrid strokeDasharray="3 3" horizontal={false} />
            <XAxis type="number" tickFormatter={(v) => formatNumber(v)} {...countAxis} />
            <YAxis type="category" dataKey="name" width={120} {...countAxis} />
            <Tooltip content={<CountTooltip />} />
            <Bar dataKey="units" name="Units" fill="#37475a" radius={[0, 4, 4, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </ChartCard>

      <ChartCard title="Top 10 Products by Sales" wide>
        <ResponsiveContainer width="100%" height={380}>
          <BarChart data={m.topProducts} layout="vertical" margin={{ left: 24 }}>
            <CartesianGrid strokeDasharray="3 3" horizontal={false} />
            <XAxis type="number" {...currencyAxis()} />
            <YAxis type="category" dataKey="name" width={180} {...countAxis} />
            <Tooltip content={<CurrencyTooltip />} />
            <Bar dataKey="sales" name="Sales" radius={[0, 4, 4, 0]}>
              {m.topProducts.map((_, i) => (
                <Cell key={i} fill={i === 0 ? ORANGE : NAVY} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </ChartCard>
    </div>
  )
}
