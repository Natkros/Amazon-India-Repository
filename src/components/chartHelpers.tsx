import { formatINR, formatINRCompact, formatNumber, formatPct } from '../lib/format'

const AXIS_STYLE = { fontSize: 12, fill: '#5a6472' }

export function CurrencyTooltip({ active, payload, label }: any) {
  if (!active || !payload || payload.length === 0) return null
  return (
    <div className="tooltip">
      <div className="tooltip-label">{label}</div>
      {payload.map((p: any, i: number) => (
        <div key={i} className="tooltip-row">
          <span className="dot" style={{ background: p.color || p.fill }} />
          <span>{p.name}:</span>
          <strong>{formatINR(Number(p.value))}</strong>
        </div>
      ))}
    </div>
  )
}

export function CountTooltip({ active, payload, label }: any) {
  if (!active || !payload || payload.length === 0) return null
  return (
    <div className="tooltip">
      <div className="tooltip-label">{label}</div>
      {payload.map((p: any, i: number) => (
        <div key={i} className="tooltip-row">
          <span className="dot" style={{ background: p.color || p.fill }} />
          <span>{p.name}:</span>
          <strong>{formatNumber(Number(p.value))}</strong>
        </div>
      ))}
    </div>
  )
}

export const currencyAxis = (formatter: (n: number) => string = formatINRCompact) => ({
  tickFormatter: formatter,
  tick: AXIS_STYLE,
})

export const countAxis = {
  tick: AXIS_STYLE,
}

export const categoryAxis = {
  tick: AXIS_STYLE,
}

export { formatINR, formatINRCompact, formatNumber, formatPct }
