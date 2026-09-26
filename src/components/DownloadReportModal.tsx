import React, { useState } from 'react'
import { X, Download, FileSpreadsheet, FileText, CheckCircle2 } from 'lucide-react'
import type { DashboardDataset } from '../data/dashboardData'

interface DownloadReportModalProps {
  isOpen: boolean
  onClose: () => void
  dataset: DashboardDataset
}

export const DownloadReportModal: React.FC<DownloadReportModalProps> = ({
  isOpen,
  onClose,
  dataset,
}) => {
  const [format, setFormat] = useState<'csv' | 'xlsx' | 'json' | 'pdf'>('csv')
  const [downloading, setDownloading] = useState(false)
  const [downloadSuccess, setDownloadSuccess] = useState(false)

  if (!isOpen) return null

  const handleDownload = () => {
    setDownloading(true)
    setTimeout(() => {
      // Generate downloadable file
      let content = ''
      let mimeType = 'text/csv'
      let fileName = `amazon_india_sales_report_2024.${format}`

      if (format === 'json') {
        content = JSON.stringify(dataset, null, 2)
        mimeType = 'application/json'
      } else {
        // CSV format
        const rows = [
          ['Metric', 'Value'],
          ['Total Sales', dataset.summary.totalSalesFormatted],
          ['Total Profit', dataset.summary.totalProfitFormatted],
          ['Total Orders', dataset.summary.totalOrdersFormatted],
          ['Units Sold', dataset.summary.unitsSoldFormatted],
          ['Avg Order Value', dataset.summary.avgOrderValueFormatted],
          ['Profit Margin', dataset.summary.profitMarginFormatted],
          ['Cancelled Orders', dataset.summary.cancelledOrdersFormatted],
          ['Delivered Orders', dataset.summary.deliveredOrdersFormatted],
          [],
          ['Top Products', 'Sales (₹)', 'Units Sold'],
          ...dataset.topProducts.map((p) => [p.name, p.salesFormatted, p.unitsFormatted]),
          [],
          ['Top States', 'Sales (₹)', 'Profit (₹)', 'Orders'],
          ...dataset.topStatesSales.map((s) => [s.name, s.salesFormatted, s.profitFormatted, s.ordersFormatted]),
          [],
          ['Top Cities', 'Orders', 'Sales (₹)', 'Profit (₹)'],
          ...dataset.topCities.map((c) => [c.city, c.ordersFormatted, c.salesFormatted, c.profitFormatted]),
        ]
        content = rows.map((r) => r.map((c) => `"${c ?? ''}"`).join(',')).join('\n')
      }

      const blob = new Blob([content], { type: mimeType })
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = fileName
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      URL.revokeObjectURL(url)

      setDownloading(false)
      setDownloadSuccess(true)
      setTimeout(() => {
        setDownloadSuccess(false)
        onClose()
      }, 1400)
    }, 600)
  }

  return (
    <div className="modal-backdrop-overlay" onClick={onClose}>
      <div className="modal-glass-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-title-wrap">
            <div className="modal-icon-badge">
              <Download size={18} color="#f97316" />
            </div>
            <div>
              <h2 className="modal-heading">Download Sales Intelligence Report</h2>
              <p className="modal-sub">Export aggregated dashboard metrics and granular records</p>
            </div>
          </div>
          <button className="modal-close-btn" onClick={onClose}>
            <X size={18} />
          </button>
        </div>

        <div className="modal-body-scroll">
          <div className="format-options-grid">
            <div
              className={`format-card-option ${format === 'csv' ? 'selected' : ''}`}
              onClick={() => setFormat('csv')}
            >
              <FileSpreadsheet size={24} color="#10b981" />
              <div className="format-details">
                <span className="format-title">CSV (Spreadsheet)</span>
                <span className="format-desc">Standard CSV for Excel and Google Sheets</span>
              </div>
            </div>

            <div
              className={`format-card-option ${format === 'xlsx' ? 'selected' : ''}`}
              onClick={() => setFormat('xlsx')}
            >
              <FileSpreadsheet size={24} color="#f59e0b" />
              <div className="format-details">
                <span className="format-title">Microsoft Excel (.xlsx)</span>
                <span className="format-desc">Formatted tables with formulas and charts</span>
              </div>
            </div>

            <div
              className={`format-card-option ${format === 'json' ? 'selected' : ''}`}
              onClick={() => setFormat('json')}
            >
              <FileText size={24} color="#38bdf8" />
              <div className="format-details">
                <span className="format-title">JSON Data Object</span>
                <span className="format-desc">Full hierarchical dashboard schema</span>
              </div>
            </div>

            <div
              className={`format-card-option ${format === 'pdf' ? 'selected' : ''}`}
              onClick={() => setFormat('pdf')}
            >
              <FileText size={24} color="#ef4444" />
              <div className="format-details">
                <span className="format-title">Executive PDF Brief</span>
                <span className="format-desc">High-resolution printable layout</span>
              </div>
            </div>
          </div>

          <div className="download-summary-preview">
            <span className="preview-label">Includes:</span>
            <div className="preview-tags">
              <span>8 KPI Summary Metrics</span>
              <span>12-Month Sales & Profit Trend</span>
              <span>Category & Product Breakdown</span>
              <span>State & City Geographies</span>
              <span>Payment & Fulfillment Splits</span>
            </div>
          </div>
        </div>

        <div className="modal-footer">
          <button className="btn-secondary-dark" onClick={onClose}>
            Cancel
          </button>
          <button
            className="btn-primary-orange"
            onClick={handleDownload}
            disabled={downloading}
          >
            {downloadSuccess ? (
              <>
                <CheckCircle2 size={16} />
                <span>Downloaded Successfully!</span>
              </>
            ) : downloading ? (
              <span>Preparing Export...</span>
            ) : (
              <>
                <Download size={16} />
                <span>Download Report</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  )
}
