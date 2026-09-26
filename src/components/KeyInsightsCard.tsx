import React from 'react'
import {
  TrendingUp,
  ShoppingBag,
  XCircle,
  Smartphone,
  MapPin,
  ArrowRight,
  Lightbulb,
} from 'lucide-react'
import type { KeyInsight } from '../data/dashboardData'

interface KeyInsightsCardProps {
  insights: KeyInsight[]
  onOpenDetails: () => void
}

export const KeyInsightsCard: React.FC<KeyInsightsCardProps> = ({
  insights,
  onOpenDetails,
}) => {
  const getIcon = (type: KeyInsight['icon']) => {
    switch (type) {
      case 'trending-up':
        return <TrendingUp size={15} color="#10b981" />
      case 'shopping-bag':
        return <ShoppingBag size={15} color="#f97316" />
      case 'x-circle':
        return <XCircle size={15} color="#ef4444" />
      case 'smartphone':
        return <Smartphone size={15} color="#38bdf8" />
      case 'map-pin':
        return <MapPin size={15} color="#f59e0b" />
      default:
        return <Lightbulb size={15} color="#f97316" />
    }
  }

  const getBadgeStyle = (badgeColor: KeyInsight['badgeColor']) => {
    switch (badgeColor) {
      case 'green':
        return { backgroundColor: 'rgba(16, 185, 129, 0.15)', borderColor: 'rgba(16, 185, 129, 0.3)' }
      case 'orange':
        return { backgroundColor: 'rgba(249, 115, 22, 0.15)', borderColor: 'rgba(249, 115, 22, 0.3)' }
      case 'red':
        return { backgroundColor: 'rgba(239, 68, 68, 0.15)', borderColor: 'rgba(239, 68, 68, 0.3)' }
      case 'blue':
        return { backgroundColor: 'rgba(56, 189, 248, 0.15)', borderColor: 'rgba(56, 189, 248, 0.3)' }
      case 'amber':
        return { backgroundColor: 'rgba(245, 158, 11, 0.15)', borderColor: 'rgba(245, 158, 11, 0.3)' }
    }
  }

  return (
    <div className="dashboard-card key-insights-card">
      <div className="card-header">
        <div className="card-title-with-icon">
          <span className="insights-lightbulb-emoji">💡</span>
          <h3 className="card-heading">Key Insights</h3>
        </div>
      </div>

      <div className="card-body insights-list-wrap">
        <div className="insights-items-list">
          {insights.map((item) => (
            <div key={item.id} className="insight-card-item">
              <div className="insight-icon-badge" style={getBadgeStyle(item.badgeColor)}>
                {getIcon(item.icon)}
              </div>
              <p className="insight-text-content">{item.text}</p>
            </div>
          ))}
        </div>

        {/* View Detailed Insights Link */}
        <button className="view-detailed-insights-btn" onClick={onOpenDetails}>
          <span>View Detailed Insights</span>
          <ArrowRight size={13} />
        </button>
      </div>
    </div>
  )
}
