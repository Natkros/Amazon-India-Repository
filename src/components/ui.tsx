import type { ReactNode } from 'react'

export function SectionCard({
  number,
  title,
  question,
  children,
}: {
  number: number
  title: string
  question: string
  children: ReactNode
}) {
  return (
    <section className="section-card">
      <header className="section-header">
        <div className="section-heading">
          <span className="section-number">{number}</span>
          <div>
            <h2>{title}</h2>
            <p className="section-question">{question}</p>
          </div>
        </div>
      </header>
      <div className="section-body">{children}</div>
    </section>
  )
}

export function ChartCard({
  title,
  subtitle,
  children,
  wide,
}: {
  title: string
  subtitle?: string
  children: ReactNode
  wide?: boolean
}) {
  return (
    <div className={`chart-card${wide ? ' wide' : ''}`}>
      <h3>{title}</h3>
      {subtitle && <p className="chart-subtitle">{subtitle}</p>}
      <div className="chart-body">{children}</div>
    </div>
  )
}

export function KpiCard({
  label,
  value,
  sub,
  accent,
}: {
  label: string
  value: string
  sub?: string
  accent?: boolean
}) {
  return (
    <div className={`kpi-card${accent ? ' accent' : ''}`}>
      <span className="kpi-label">{label}</span>
      <span className="kpi-value">{value}</span>
      {sub && <span className="kpi-sub">{sub}</span>}
    </div>
  )
}

export function Insight({ children }: { children: ReactNode }) {
  return <p className="insight">💡 {children}</p>
}
