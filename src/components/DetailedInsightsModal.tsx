import React from 'react'
import { X, Sparkles, Zap, ArrowUpRight } from 'lucide-react'
import type { KeyInsight } from '../data/dashboardData'

interface DetailedInsightsModalProps {
  isOpen: boolean
  onClose: () => void
  insights: KeyInsight[]
}

export const DetailedInsightsModal: React.FC<DetailedInsightsModalProps> = ({
  isOpen,
  onClose,
  insights,
}) => {
  if (!isOpen) return null

  return (
    <div className="modal-backdrop-overlay" onClick={onClose}>
      <div className="modal-glass-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-title-wrap">
            <div className="modal-icon-badge">
              <Sparkles size={18} color="#f97316" />
            </div>
            <div>
              <h2 className="modal-heading">Amazon India Executive Intelligence & Insights</h2>
              <p className="modal-sub">Deep dive into sales velocity, margin optimization, and logistics bottlenecks</p>
            </div>
          </div>
          <button className="modal-close-btn" onClick={onClose}>
            <X size={18} />
          </button>
        </div>

        <div className="modal-body-scroll">
          <div className="insights-grid-2col">
            {insights.map((item) => (
              <div key={item.id} className="insight-deep-card">
                <div className="deep-card-top">
                  <span className="insight-category-tag">{item.category}</span>
                  <span className="insight-status-badge">Actionable</span>
                </div>
                <h4 className="insight-headline">{item.text}</h4>
                <p className="insight-detailed-desc">{item.detail}</p>
                <div className="insight-recommendation">
                  <Zap size={14} color="#f59e0b" />
                  <span>
                    <strong>Strategic action:</strong> Allocate additional Prime delivery slots and targeted seller ad credits to capitalize on this trend.
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="ai-summary-box">
            <div className="ai-badge">
              <Sparkles size={14} />
              <span>AI Revenue Engine Recommendation</span>
            </div>
            <p className="ai-text">
              By expanding FBA fulfillment coverage in Tier-2 cities in Maharashtra, Uttar Pradesh, and Karnataka by <strong>14%</strong>, projected Q1 revenue can surge by an additional <strong>₹ 2.4 Cr</strong> with a 1.8% boost to net operating margin.
            </p>
          </div>
        </div>

        <div className="modal-footer">
          <button className="btn-secondary-dark" onClick={onClose}>
            Close
          </button>
          <button className="btn-primary-orange" onClick={onClose}>
            Export Executive PDF
            <ArrowUpRight size={14} style={{ marginLeft: '4px' }} />
          </button>
        </div>
      </div>
    </div>
  )
}
