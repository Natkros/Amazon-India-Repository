/** Indian-style formatting: ₹ with lakh/crore grouping, e.g. ₹12,34,567 or ₹12.4L */
export function formatINR(n: number): string {
  const rounded = Math.round(n)
  const neg = rounded < 0
  const abs = Math.abs(rounded)
  const s = abs.toString()
  let grouped: string
  if (s.length > 3) {
    const last3 = s.slice(-3)
    let rest = s.slice(0, -3)
    // Indian grouping: 12,34,567
    const parts: string[] = []
    while (rest.length > 2) {
      parts.unshift(rest.slice(-2))
      rest = rest.slice(0, -2)
    }
    if (rest) parts.unshift(rest)
    grouped = `${parts.join(',')},${last3}`
  } else {
    grouped = s
  }
  return `${neg ? '-' : ''}₹${grouped}`
}

/** Compact Indian style for chart axes: ₹1.2L, ₹3.4Cr */
export function formatINRCompact(n: number): string {
  const neg = n < 0
  const abs = Math.abs(n)
  let out: string
  if (abs >= 1e7) out = `${trim(abs / 1e7)}Cr`
  else if (abs >= 1e5) out = `${trim(abs / 1e5)}L`
  else if (abs >= 1e3) out = `${trim(abs / 1e3)}K`
  else out = `${Math.round(abs)}`
  return `${neg ? '-' : ''}₹${out}`
}

function trim(n: number): string {
  return n >= 100 ? Math.round(n).toString() : n.toFixed(1).replace(/\.0$/, '')
}

export function formatNumber(n: number): string {
  return new Intl.NumberFormat('en-IN').format(Math.round(n))
}

export function formatPct(n: number): string {
  return `${n.toFixed(1)}%`
}
