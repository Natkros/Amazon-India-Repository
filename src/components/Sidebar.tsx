import React from 'react'
import {
  LayoutDashboard,
  Package,
  Users,
  Receipt,
  CreditCard,
  Truck,
  MapPin,
  Sparkles,
  Download,
  Filter,
  RotateCcw,
  ChevronDown,
} from 'lucide-react'

export interface FilterState {
  dateRange: string
  state: string
  city: string
  category: string
  product: string
  orderStatus: string
  paymentMethod: string
  fulfillment: string
  salesChannel: string
}

interface SidebarProps {
  activeTab: string
  setActiveTab: (tab: string) => void
  filters: FilterState
  setFilters: React.Dispatch<React.SetStateAction<FilterState>>
  onResetFilters: () => void
  categories: string[]
  states: string[]
  cities: string[]
  products: string[]
  onDownloadReport: () => void
}

export const Sidebar: React.FC<SidebarProps> = ({
  activeTab,
  setActiveTab,
  filters,
  setFilters,
  onResetFilters,
  categories,
  states,
  cities,
  products,
  onDownloadReport,
}) => {
  const navItems = [
    { id: 'overview', label: 'Overview', icon: LayoutDashboard },
    { id: 'products', label: 'Products', icon: Package },
    { id: 'customers', label: 'Customers', icon: Users },
    { id: 'orders', label: 'Orders', icon: Receipt },
    { id: 'payments', label: 'Payments', icon: CreditCard },
    { id: 'fulfillment', label: 'Fulfillment', icon: Truck },
    { id: 'geo', label: 'Geographic Analysis', icon: MapPin },
    { id: 'insights', label: 'Insights', icon: Sparkles },
    { id: 'download', label: 'Download Report', icon: Download },
  ]

  const handleChange = (key: keyof FilterState, val: string) => {
    setFilters((prev) => ({ ...prev, [key]: val }))
  }

  return (
    <aside className="sidebar-container">
      {/* Brand Header */}
      <div className="sidebar-brand">
        <div className="amazon-logo-wrap">
          <div className="amazon-logo-text">
            <span>amazon</span>
            <span className="in-domain">.in</span>
          </div>
          {/* Amazon smile curve */}
          <svg className="amazon-smile-curve" viewBox="0 0 100 25" fill="none">
            <path
              d="M 10 8 Q 50 28 90 6"
              stroke="#ff9900"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <polygon points="85,3 93,6 88,12" fill="#ff9900" />
          </svg>
        </div>
        <p className="brand-tagline">India's Most Trusted Online Store</p>
      </div>

      {/* Navigation Menu */}
      <nav className="sidebar-nav">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = activeTab === item.id
          return (
            <button
              key={item.id}
              className={`nav-item ${isActive ? 'active' : ''}`}
              onClick={() => {
                if (item.id === 'download') {
                  onDownloadReport()
                } else {
                  setActiveTab(item.id)
                }
              }}
            >
              <Icon size={18} className="nav-icon" />
              <span>{item.label}</span>
            </button>
          )
        })}
      </nav>

      {/* Filters Section */}
      <div className="sidebar-filters-section">
        <div className="filters-header">
          <div className="filters-title">
            <Filter size={15} />
            <span>Filters</span>
          </div>
          <button className="reset-btn" onClick={onResetFilters} title="Reset all filters">
            <RotateCcw size={12} style={{ display: 'inline', marginRight: '3px' }} />
            Reset All
          </button>
        </div>

        <div className="filters-list">
          {/* Date Range */}
          <div className="filter-group">
            <label>Date Range</label>
            <div className="select-wrapper">
              <select
                value={filters.dateRange}
                onChange={(e) => handleChange('dateRange', e.target.value)}
              >
                <option value="all">01 Jan 2024 - 31 Dec 2024</option>
                <option value="q1">Q1 2024 (Jan - Mar)</option>
                <option value="q2">Q2 2024 (Apr - Jun)</option>
                <option value="q3">Q3 2024 (Jul - Sep)</option>
                <option value="q4">Q4 2024 (Oct - Dec)</option>
                <option value="last30">Last 30 Days</option>
              </select>
              <ChevronDown size={14} className="chevron" />
            </div>
          </div>

          {/* State */}
          <div className="filter-group">
            <label>State</label>
            <div className="select-wrapper">
              <select
                value={filters.state}
                onChange={(e) => handleChange('state', e.target.value)}
              >
                <option value="all">All</option>
                {states.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
              <ChevronDown size={14} className="chevron" />
            </div>
          </div>

          {/* City */}
          <div className="filter-group">
            <label>City</label>
            <div className="select-wrapper">
              <select
                value={filters.city}
                onChange={(e) => handleChange('city', e.target.value)}
              >
                <option value="all">All</option>
                {cities.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
              <ChevronDown size={14} className="chevron" />
            </div>
          </div>

          {/* Category */}
          <div className="filter-group">
            <label>Category</label>
            <div className="select-wrapper">
              <select
                value={filters.category}
                onChange={(e) => handleChange('category', e.target.value)}
              >
                <option value="all">All</option>
                {categories.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
              <ChevronDown size={14} className="chevron" />
            </div>
          </div>

          {/* Product */}
          <div className="filter-group">
            <label>Product</label>
            <div className="select-wrapper">
              <select
                value={filters.product}
                onChange={(e) => handleChange('product', e.target.value)}
              >
                <option value="all">All</option>
                {products.map((p) => (
                  <option key={p} value={p}>
                    {p}
                  </option>
                ))}
              </select>
              <ChevronDown size={14} className="chevron" />
            </div>
          </div>

          {/* Order Status */}
          <div className="filter-group">
            <label>Order Status</label>
            <div className="select-wrapper">
              <select
                value={filters.orderStatus}
                onChange={(e) => handleChange('orderStatus', e.target.value)}
              >
                <option value="all">All</option>
                <option value="Delivered">Delivered</option>
                <option value="Cancelled">Cancelled</option>
                <option value="Returned">Returned</option>
                <option value="Pending">Pending</option>
              </select>
              <ChevronDown size={14} className="chevron" />
            </div>
          </div>

          {/* Payment Method */}
          <div className="filter-group">
            <label>Payment Method</label>
            <div className="select-wrapper">
              <select
                value={filters.paymentMethod}
                onChange={(e) => handleChange('paymentMethod', e.target.value)}
              >
                <option value="all">All</option>
                <option value="UPI">UPI</option>
                <option value="COD">COD</option>
                <option value="Credit Card">Credit Card</option>
                <option value="Debit Card">Debit Card</option>
                <option value="Net Banking">Net Banking</option>
                <option value="Others">Others</option>
              </select>
              <ChevronDown size={14} className="chevron" />
            </div>
          </div>

          {/* Fulfillment */}
          <div className="filter-group">
            <label>Fulfillment</label>
            <div className="select-wrapper">
              <select
                value={filters.fulfillment}
                onChange={(e) => handleChange('fulfillment', e.target.value)}
              >
                <option value="all">All</option>
                <option value="FBA">Fulfilled by Amazon (FBA)</option>
                <option value="Seller">Fulfilled by Seller</option>
              </select>
              <ChevronDown size={14} className="chevron" />
            </div>
          </div>

          {/* Sales Channel */}
          <div className="filter-group">
            <label>Sales Channel</label>
            <div className="select-wrapper">
              <select
                value={filters.salesChannel}
                onChange={(e) => handleChange('salesChannel', e.target.value)}
              >
                <option value="all">All</option>
                <option value="Amazon.in">Amazon.in Consumer App</option>
                <option value="Amazon Business">Amazon Business B2B</option>
                <option value="Prime Now">Amazon Prime Now</option>
              </select>
              <ChevronDown size={14} className="chevron" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Promo Card */}
      <div className="sidebar-promo-card">
        <div className="promo-content">
          <Truck size={20} className="promo-icon" />
          <div className="promo-text">
            <span className="promo-title">Delivering</span>
            <span className="promo-sub">Smiles Across India</span>
          </div>
        </div>
        {/* Realistic Amazon cardboard box icon */}
        <div className="amazon-box-illustration">
          <div className="cardboard-box">
            <div className="box-top"></div>
            <div className="box-front">
              <span className="box-tape"></span>
              <span className="box-smile"></span>
            </div>
          </div>
        </div>
      </div>
    </aside>
  )
}
