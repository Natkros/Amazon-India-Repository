import React from 'react'
import { Search, Calendar, ChevronDown } from 'lucide-react'

interface HeaderProps {
  searchQuery: string
  setSearchQuery: (query: string) => void
  dateRangeLabel: string
}

export const Header: React.FC<HeaderProps> = ({
  searchQuery,
  setSearchQuery,
  dateRangeLabel = '01 Jan 2024 - 31 Dec 2024',
}) => {
  return (
    <header className="dashboard-header">
      <div className="header-titles">
        <h1 className="main-title">
          <span className="brand-highlight">Amazon</span> India Sales Dashboard
        </h1>
        <p className="main-subtitle">
          From Orders to Opportunities — Insights for a Bigger Tomorrow
        </p>
      </div>

      <div className="header-controls">
        {/* Global Search Bar */}
        <div className="search-bar-wrap">
          <Search size={16} className="search-icon" />
          <input
            type="text"
            className="search-input"
            placeholder="Search for a product, category, or insight..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Date Selector Pill */}
        <div className="date-picker-pill">
          <Calendar size={15} className="calendar-icon" />
          <span className="date-text">{dateRangeLabel}</span>
          <ChevronDown size={14} className="date-chevron" />
        </div>
      </div>
    </header>
  )
}
