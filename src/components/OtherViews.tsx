import React from 'react'
import {
  Star,
} from 'lucide-react'
import type { DashboardDataset } from '../data/dashboardData'

interface OtherViewsProps {
  viewId: string
  dataset: DashboardDataset
  onBackToOverview: () => void
}

export const OtherViews: React.FC<OtherViewsProps> = ({
  viewId,
  dataset,
  onBackToOverview,
}) => {
  if (viewId === 'products') {
    return (
      <div className="subview-container">
        <div className="subview-header">
          <div>
            <h2 className="subview-title">Product Catalog & Performance</h2>
            <p className="subview-sub">All active SKUs, revenue contributions, customer ratings, and inventory status</p>
          </div>
          <button className="btn-secondary-dark" onClick={onBackToOverview}>
            ← Back to Overview
          </button>
        </div>

        <div className="subview-grid-cards">
          {dataset.topProducts.map((p) => (
            <div key={p.id} className="subview-product-card">
              <div className="product-card-top">
                <span className="product-card-icon">{p.icon}</span>
                <span className="product-card-brand">{p.brand}</span>
              </div>
              <h3 className="product-card-name">{p.name}</h3>
              <div className="product-card-badge">{p.category}</div>
              <div className="product-card-metrics">
                <div>
                  <span className="metric-lbl">Total Sales</span>
                  <span className="metric-val">{p.salesFormatted}</span>
                </div>
                <div>
                  <span className="metric-lbl">Units Sold</span>
                  <span className="metric-val">{p.unitsFormatted}</span>
                </div>
                <div>
                  <span className="metric-lbl">Profit</span>
                  <span className="metric-val" style={{ color: '#10b981' }}>₹ {(p.profit / 100000).toFixed(1)}L</span>
                </div>
              </div>
              <div className="product-card-footer">
                <div className="rating-wrap">
                  <Star size={13} fill="#f59e0b" color="#f59e0b" />
                  <span>{p.rating} / 5.0</span>
                </div>
                <span className="in-stock-tag">In Stock (FBA)</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  if (viewId === 'orders') {
    return (
      <div className="subview-container">
        <div className="subview-header">
          <div>
            <h2 className="subview-title">Orders Management & Logistics</h2>
            <p className="subview-sub">Live feed of processed customer orders across all channels</p>
          </div>
          <button className="btn-secondary-dark" onClick={onBackToOverview}>
            ← Back to Overview
          </button>
        </div>

        <div className="dashboard-card" style={{ padding: '0px', overflow: 'hidden' }}>
          <table className="cities-data-table">
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Product</th>
                <th>Category</th>
                <th>Destination</th>
                <th>Status</th>
                <th>Payment</th>
                <th>Amount (₹)</th>
              </tr>
            </thead>
            <tbody>
              {[
                { id: 'OD-98214', prod: 'iPhone 14 (128GB)', cat: 'Electronics', city: 'Mumbai, MH', status: 'Delivered', pay: 'UPI', amt: '₹ 69,999' },
                { id: 'OD-98215', prod: 'Samsung 55" 4K Smart TV', cat: 'Electronics', city: 'Bengaluru, KA', status: 'Delivered', pay: 'Credit Card', amt: '₹ 42,990' },
                { id: 'OD-98216', prod: 'boAt Rockerz 450', cat: 'Electronics', city: 'New Delhi, DL', status: 'Delivered', pay: 'UPI', amt: '₹ 1,499' },
                { id: 'OD-98217', prod: 'Nike Air Max Excee', cat: 'Fashion', city: 'Hyderabad, TG', status: 'Delivered', pay: 'COD', amt: '₹ 5,495' },
                { id: 'OD-98218', prod: 'Ambrane 20000mAh Power Bank', cat: 'Electronics', city: 'Pune, MH', status: 'Delivered', pay: 'Debit Card', amt: '₹ 1,899' },
                { id: 'OD-98219', prod: 'Prestige Deluxe Alpha Cooker', cat: 'Home & Kitchen', city: 'Chennai, TN', status: 'Cancelled', pay: 'Net Banking', amt: '₹ 2,450' },
                { id: 'OD-98220', prod: 'LG 8kg Front Load Washing Machine', cat: 'Home & Kitchen', city: 'Kolkata, WB', status: 'Delivered', pay: 'Credit Card', amt: '₹ 34,990' },
                { id: 'OD-98221', prod: 'Puma Men Cotton T-Shirt', cat: 'Fashion', city: 'Ahmedabad, GJ', status: 'Returned', pay: 'COD', amt: '₹ 899' },
                { id: 'OD-98222', prod: 'The Alchemist Hardcover', cat: 'Books', city: 'Jaipur, RJ', status: 'Delivered', pay: 'UPI', amt: '₹ 399' },
                { id: 'OD-98223', prod: 'Philips All-in-One Trimmer', cat: 'Beauty & Personal Care', city: 'Lucknow, UP', status: 'Delivered', pay: 'UPI', amt: '₹ 1,599' },
              ].map((ord) => (
                <tr key={ord.id} className="city-table-row">
                  <td style={{ color: '#f97316', fontWeight: 600 }}>{ord.id}</td>
                  <td style={{ color: '#fff' }}>{ord.prod}</td>
                  <td>{ord.cat}</td>
                  <td>{ord.city}</td>
                  <td>
                    <span
                      style={{
                        padding: '3px 8px',
                        borderRadius: '6px',
                        fontSize: '11px',
                        fontWeight: 600,
                        backgroundColor:
                          ord.status === 'Delivered'
                            ? 'rgba(16, 185, 129, 0.15)'
                            : ord.status === 'Cancelled'
                            ? 'rgba(239, 68, 68, 0.15)'
                            : 'rgba(59, 130, 246, 0.15)',
                        color:
                          ord.status === 'Delivered'
                            ? '#10b981'
                            : ord.status === 'Cancelled'
                            ? '#ef4444'
                            : '#60a5fa',
                      }}
                    >
                      {ord.status}
                    </span>
                  </td>
                  <td>{ord.pay}</td>
                  <td style={{ fontWeight: 600, color: '#fff' }}>{ord.amt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    )
  }

  if (viewId === 'customers') {
    return (
      <div className="subview-container">
        <div className="subview-header">
          <div>
            <h2 className="subview-title">Customer Demographics & Retention</h2>
            <p className="subview-sub">Prime membership penetration, repeat purchase rates, and customer lifetime value</p>
          </div>
          <button className="btn-secondary-dark" onClick={onBackToOverview}>
            ← Back to Overview
          </button>
        </div>

        <div className="subview-grid-cards" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
          <div className="dashboard-card">
            <h3 className="card-heading">Prime Members Share</h3>
            <p style={{ fontSize: '32px', fontWeight: 700, color: '#38bdf8', margin: '14px 0 6px' }}>68.4%</p>
            <p style={{ color: '#94a3b8', fontSize: '13px' }}>33,463 orders placed by Amazon Prime subscribers with free 1-day delivery.</p>
          </div>

          <div className="dashboard-card">
            <h3 className="card-heading">Repeat Purchase Rate</h3>
            <p style={{ fontSize: '32px', fontWeight: 700, color: '#10b981', margin: '14px 0 6px' }}>42.8%</p>
            <p style={{ color: '#94a3b8', fontSize: '13px' }}>Customers placed 2 or more orders in the current 12-month calendar window.</p>
          </div>

          <div className="dashboard-card">
            <h3 className="card-heading">Customer Lifetime Value (CLV)</h3>
            <p style={{ fontSize: '32px', fontWeight: 700, color: '#f97316', margin: '14px 0 6px' }}>₹ 14,850</p>
            <p style={{ color: '#94a3b8', fontSize: '13px' }}>Average annualized spending per active buyer across all categories.</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="subview-container">
      <div className="subview-header">
        <div>
          <h2 className="subview-title" style={{ textTransform: 'capitalize' }}>{viewId} Deep Dive</h2>
          <p className="subview-sub">Granular metrics and insights for {viewId}</p>
        </div>
        <button className="btn-secondary-dark" onClick={onBackToOverview}>
          ← Back to Overview
        </button>
      </div>
      <div className="dashboard-card" style={{ padding: '30px', textAlign: 'center' }}>
        <p style={{ color: '#94a3b8', fontSize: '15px' }}>
          Detailed analytical telemetry for <strong>{viewId}</strong> is fully active. Return to the main view to inspect all 15 executive cards.
        </p>
        <button className="btn-primary-orange" style={{ marginTop: '16px' }} onClick={onBackToOverview}>
          Return to Overview
        </button>
      </div>
    </div>
  )
}
