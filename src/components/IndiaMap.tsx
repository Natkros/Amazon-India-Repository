import React, { useState } from 'react'
import type { StateData } from '../data/dashboardData'

interface IndiaMapProps {
  states: StateData[]
  metric: 'sales' | 'profit' | 'orders'
  onSelectState?: (stateName: string) => void
}

// Optimized India State Path outlines for clean vector choropleth rendering
const STATE_PATHS: { id: string; name: string; d: string }[] = [
  {
    id: 'JK',
    name: 'Jammu and Kashmir',
    d: 'M 140 25 L 165 20 L 195 35 L 210 60 L 190 85 L 160 85 L 145 75 L 130 55 Z M 165 40 L 180 50 L 170 70 L 150 60 Z',
  },
  {
    id: 'HP',
    name: 'Himachal Pradesh',
    d: 'M 160 85 L 190 85 L 205 105 L 180 125 L 160 110 Z',
  },
  {
    id: 'PB',
    name: 'Punjab',
    d: 'M 130 95 L 160 95 L 160 125 L 140 135 L 125 115 Z',
  },
  {
    id: 'UT',
    name: 'Uttarakhand',
    d: 'M 180 105 L 215 115 L 210 145 L 180 135 Z',
  },
  {
    id: 'HR',
    name: 'Haryana',
    d: 'M 145 125 L 175 125 L 175 155 L 145 155 Z',
  },
  {
    id: 'DL',
    name: 'Delhi',
    d: 'M 168 138 L 178 138 L 178 148 L 168 148 Z',
  },
  {
    id: 'RJ',
    name: 'Rajasthan',
    d: 'M 95 130 L 145 130 L 155 175 L 135 220 L 90 205 L 75 160 Z',
  },
  {
    id: 'UP',
    name: 'Uttar Pradesh',
    d: 'M 175 130 L 250 140 L 270 180 L 225 210 L 175 190 L 165 155 Z',
  },
  {
    id: 'BR',
    name: 'Bihar',
    d: 'M 255 165 L 315 165 L 310 205 L 255 205 Z',
  },
  {
    id: 'SK',
    name: 'Sikkim',
    d: 'M 320 145 L 335 145 L 335 160 L 320 160 Z',
  },
  {
    id: 'WB',
    name: 'West Bengal',
    d: 'M 305 175 L 335 175 L 330 245 L 295 240 L 295 210 Z',
  },
  {
    id: 'AS',
    name: 'Assam',
    d: 'M 345 155 L 415 155 L 400 185 L 345 180 Z',
  },
  {
    id: 'AR',
    name: 'Arunachal Pradesh',
    d: 'M 370 120 L 435 130 L 425 155 L 370 145 Z',
  },
  {
    id: 'NE',
    name: 'Other North East',
    d: 'M 385 180 L 420 180 L 415 230 L 380 220 Z',
  },
  {
    id: 'JH',
    name: 'Jharkhand',
    d: 'M 260 205 L 305 205 L 295 245 L 250 240 Z',
  },
  {
    id: 'OR',
    name: 'Odisha',
    d: 'M 255 245 L 305 245 L 285 305 L 235 285 Z',
  },
  {
    id: 'CG',
    name: 'Chhattisgarh',
    d: 'M 220 225 L 255 225 L 245 305 L 210 290 Z',
  },
  {
    id: 'MP',
    name: 'Madhya Pradesh',
    d: 'M 140 200 L 230 200 L 240 250 L 155 260 L 130 230 Z',
  },
  {
    id: 'GJ',
    name: 'Gujarat',
    d: 'M 60 200 L 125 210 L 125 265 L 75 270 L 55 235 Z',
  },
  {
    id: 'MH',
    name: 'Maharashtra',
    d: 'M 115 265 L 215 255 L 210 330 L 130 335 L 105 295 Z',
  },
  {
    id: 'TG',
    name: 'Telangana',
    d: 'M 175 305 L 225 305 L 215 365 L 165 350 Z',
  },
  {
    id: 'AP',
    name: 'Andhra Pradesh',
    d: 'M 205 320 L 265 300 L 230 410 L 185 390 L 195 345 Z',
  },
  {
    id: 'KA',
    name: 'Karnataka',
    d: 'M 130 335 L 180 340 L 175 425 L 125 410 L 120 365 Z',
  },
  {
    id: 'GA',
    name: 'Goa',
    d: 'M 120 375 L 130 375 L 130 390 L 120 390 Z',
  },
  {
    id: 'KL',
    name: 'Kerala',
    d: 'M 135 415 L 165 415 L 155 480 L 130 460 Z',
  },
  {
    id: 'TN',
    name: 'Tamil Nadu',
    d: 'M 160 405 L 205 405 L 185 490 L 145 485 Z',
  },
]

export const IndiaMap: React.FC<IndiaMapProps> = ({ states, metric, onSelectState }) => {
  const [hoveredState, setHoveredState] = useState<{
    name: string
    sales: string
    profit: string
    orders: string
    x: number
    y: number
  } | null>(null)

  // Map state name to its data
  const stateDataMap = new Map<string, StateData>()
  states.forEach((s) => {
    stateDataMap.set(s.name.toLowerCase(), s)
  })

  // Color interpolation based on sales / profit value
  const getColor = (stateName: string) => {
    const data = stateDataMap.get(stateName.toLowerCase())
    if (!data) return '#fed7aa' // fallback light peach

    const val = metric === 'profit' ? data.profit : metric === 'orders' ? data.orders : data.sales

    // Dynamic color gradient from pale peach/orange to rich dark amber-orange
    if (metric === 'profit') {
      if (val >= 2500000) return '#059669' // dark emerald
      if (val >= 1800000) return '#10b981'
      if (val >= 1200000) return '#34d399'
      if (val >= 700000) return '#6ee7b7'
      return '#a7f3d0'
    } else {
      if (val >= 16000000) return '#ea580c' // deep orange (Maharashtra)
      if (val >= 12000000) return '#f97316' // bright orange (UP, Karnataka)
      if (val >= 9000000) return '#fb923c' // Tamil Nadu, Delhi
      if (val >= 6000000) return '#fdba74' // WB, Gujarat, Rajasthan, TG
      if (val >= 3000000) return '#fed7aa' // MP, Kerala, AP, Punjab
      return '#ffedd5' // North East, etc.
    }
  }

  const handleMouseEnter = (e: React.MouseEvent<SVGPathElement>, stateName: string) => {
    const data = stateDataMap.get(stateName.toLowerCase())
    const rect = e.currentTarget.getBoundingClientRect()
    setHoveredState({
      name: stateName,
      sales: data?.salesFormatted ?? '₹ 1.2M',
      profit: data?.profitFormatted ?? '₹ 0.15M',
      orders: data?.ordersFormatted ?? '650',
      x: rect.left + rect.width / 2,
      y: rect.top,
    })
  }

  const handleMouseLeave = () => {
    setHoveredState(null)
  }

  return (
    <div className="india-map-container" style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '100%', minHeight: '260px' }}>
      <svg
        viewBox="30 10 420 490"
        style={{
          width: '76%',
          height: '100%',
          maxHeight: '270px',
          filter: 'drop-shadow(0px 8px 16px rgba(0, 0, 0, 0.4))',
        }}
      >
        <g className="india-map-states">
          {STATE_PATHS.map((state) => {
            const fill = getColor(state.name)
            return (
              <path
                key={state.id}
                d={state.d}
                fill={fill}
                stroke="#1e293b"
                strokeWidth="1.2"
                strokeLinejoin="round"
                strokeLinecap="round"
                style={{
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  opacity: 0.92,
                }}
                className="state-shape"
                onMouseEnter={(e) => handleMouseEnter(e, state.name)}
                onMouseLeave={handleMouseLeave}
                onClick={() => onSelectState?.(state.name)}
              />
            )
          })}
        </g>
      </svg>

      {/* Vertical Map Legend */}
      <div className="map-legend-vertical" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '180px', justifyContent: 'space-between', paddingRight: '12px' }}>
        <span style={{ fontSize: '11px', color: '#94a3b8', fontWeight: 600, textAlign: 'center' }}>
          Sales (₹)
        </span>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', height: '130px' }}>
          <div
            style={{
              width: '10px',
              height: '100%',
              borderRadius: '5px',
              background: metric === 'profit'
                ? 'linear-gradient(to bottom, #059669, #10b981, #34d399, #6ee7b7, #a7f3d0)'
                : 'linear-gradient(to bottom, #ea580c, #f97316, #fb923c, #fdba74, #fed7aa, #ffedd5)',
              boxShadow: '0 0 8px rgba(249, 115, 22, 0.3)',
            }}
          />
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', fontSize: '10px', color: '#cbd5e1', fontWeight: 500 }}>
            <span>▲ ₹ 20M</span>
            <span>▼ ₹ 1M</span>
          </div>
        </div>
      </div>

      {/* Floating State Tooltip */}
      {hoveredState && (
        <div
          className="map-tooltip"
          style={{
            position: 'fixed',
            top: hoveredState.y - 70,
            left: hoveredState.x - 60,
            pointerEvents: 'none',
            zIndex: 9999,
            background: 'rgba(15, 23, 42, 0.95)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(249, 115, 22, 0.4)',
            borderRadius: '8px',
            padding: '8px 12px',
            boxShadow: '0 10px 25px rgba(0, 0, 0, 0.6)',
            color: '#fff',
            fontSize: '11px',
            minWidth: '130px',
          }}
        >
          <div style={{ fontWeight: 700, color: '#f97316', fontSize: '12px', marginBottom: '4px' }}>
            {hoveredState.name}
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', color: '#cbd5e1' }}>
            <span>Sales:</span>
            <strong style={{ color: '#fff' }}>{hoveredState.sales}</strong>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', color: '#cbd5e1' }}>
            <span>Profit:</span>
            <strong style={{ color: '#10b981' }}>{hoveredState.profit}</strong>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', color: '#cbd5e1' }}>
            <span>Orders:</span>
            <strong style={{ color: '#60a5fa' }}>{hoveredState.orders}</strong>
          </div>
        </div>
      )}
    </div>
  )
}
