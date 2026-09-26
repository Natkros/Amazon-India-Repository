import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import type { Metrics } from '../../metrics/computeMetrics'
import { ChartCard } from '../ui'
import { CountTooltip, CurrencyTooltip, categoryAxis, countAxis, currencyAxis } from '../chartHelpers'

const NAVY = '#232f3e'
const ORANGE = '#ff9900'
const TEAL = '#146eb4'

export function Section4PaymentFulfillmentGeo({ m }: { m: Metrics }) {
  const topStates = m.byState.slice(0, 15)

  return (
    <div className="charts-grid">
      <ChartCard title="Sales by Payment Method">
        <ResponsiveContainer width="100%" height={260}>
          <BarChart data={m.byPayment} margin={{ left: 16 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="name" {...categoryAxis} />
            <YAxis {...currencyAxis()} />
            <Tooltip content={<CurrencyTooltip />} />
            <Bar dataKey="sales" name="Sales" fill={NAVY} radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </ChartCard>

      <ChartCard title="Profit by Payment Method">
        <ResponsiveContainer width="100%" height={260}>
          <BarChart data={m.byPayment} margin={{ left: 16 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="name" {...categoryAxis} />
            <YAxis {...currencyAxis()} />
            <Tooltip content={<CurrencyTooltip />} />
            <Bar dataKey="profit" name="Profit" fill={ORANGE} radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </ChartCard>

      <ChartCard title="Sales by Fulfillment Method">
        <ResponsiveContainer width="100%" height={260}>
          <BarChart data={m.byFulfillment} margin={{ left: 16 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="name" {...categoryAxis} />
            <YAxis {...currencyAxis()} />
            <Tooltip content={<CurrencyTooltip />} />
            <Bar dataKey="sales" name="Sales" fill={TEAL} radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </ChartCard>

      <ChartCard title="Profit by Fulfillment Method">
        <ResponsiveContainer width="100%" height={260}>
          <BarChart data={m.byFulfillment} margin={{ left: 16 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="name" {...categoryAxis} />
            <YAxis {...currencyAxis()} />
            <Tooltip content={<CurrencyTooltip />} />
            <Bar dataKey="profit" name="Profit" fill="#e47911" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </ChartCard>

      <ChartCard title="State-wise Sales" subtitle="Top 15 states" wide>
        <ResponsiveContainer width="100%" height={Math.max(300, topStates.length * 32)}>
          <BarChart data={topStates} layout="vertical" margin={{ left: 24 }}>
            <CartesianGrid strokeDasharray="3 3" horizontal={false} />
            <XAxis type="number" {...currencyAxis()} />
            <YAxis type="category" dataKey="name" width={140} {...countAxis} />
            <Tooltip content={<CurrencyTooltip />} />
            <Bar dataKey="sales" name="Sales" fill={NAVY} radius={[0, 4, 4, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </ChartCard>

      <ChartCard title="State-wise Profit" subtitle="Top 15 states" wide>
        <ResponsiveContainer width="100%" height={Math.max(300, topStates.length * 32)}>
          <BarChart data={topStates} layout="vertical" margin={{ left: 24 }}>
            <CartesianGrid strokeDasharray="3 3" horizontal={false} />
            <XAxis type="number" {...currencyAxis()} />
            <YAxis type="category" dataKey="name" width={140} {...countAxis} />
            <Tooltip content={<CurrencyTooltip />} />
            <Bar dataKey="profit" name="Profit" fill={ORANGE} radius={[0, 4, 4, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </ChartCard>

      <ChartCard title="State-wise Orders" subtitle="Top 15 states" wide>
        <ResponsiveContainer width="100%" height={Math.max(300, topStates.length * 32)}>
          <BarChart data={topStates} layout="vertical" margin={{ left: 24 }}>
            <CartesianGrid strokeDasharray="3 3" horizontal={false} />
            <XAxis type="number" {...countAxis} />
            <YAxis type="category" dataKey="name" width={140} {...countAxis} />
            <Tooltip content={<CountTooltip />} />
            <Bar dataKey="orders" name="Orders" fill="#5a6472" radius={[0, 4, 4, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </ChartCard>
    </div>
  )
}
