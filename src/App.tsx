import { useState, useMemo } from 'react'
import { Sidebar, FilterState } from './components/Sidebar'
import { Header } from './components/Header'
import { KpiRow } from './components/KpiRow'
import { SalesProfitTrendCard } from './components/SalesProfitTrendCard'
import { OrderStatusCard } from './components/OrderStatusCard'
import { CategorySalesCard } from './components/CategorySalesCard'
import { TopProductsCard } from './components/TopProductsCard'
import { PaymentMethodsCard } from './components/PaymentMethodsCard'
import { FulfillmentTypeCard } from './components/FulfillmentTypeCard'
import { KeyInsightsCard } from './components/KeyInsightsCard'
import { StateSalesCard } from './components/StateSalesCard'
import { StateProfitCard } from './components/StateProfitCard'
import { IndiaMapCard } from './components/IndiaMapCard'
import { TopCitiesCard } from './components/TopCitiesCard'
import { DetailedInsightsModal } from './components/DetailedInsightsModal'
import { DownloadReportModal } from './components/DownloadReportModal'
import { OtherViews } from './components/OtherViews'
import { INITIAL_DASHBOARD_DATA, DashboardDataset, ProductItem, StateData, CityData } from './data/dashboardData'

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('overview')
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [insightsModalOpen, setInsightsModalOpen] = useState<boolean>(false)
  const [downloadModalOpen, setDownloadModalOpen] = useState<boolean>(false)

  // Filters state
  const initialFilters: FilterState = {
    dateRange: 'all',
    state: 'all',
    city: 'all',
    category: 'all',
    product: 'all',
    orderStatus: 'all',
    paymentMethod: 'all',
    fulfillment: 'all',
    salesChannel: 'all',
  }

  const [filters, setFilters] = useState<FilterState>(initialFilters)

  const handleResetFilters = () => {
    setFilters(initialFilters)
    setSearchQuery('')
  }

  // Lists for dropdown options
  const categoryOptions = useMemo(
    () => INITIAL_DASHBOARD_DATA.categories.map((c) => c.name),
    []
  )
  const stateOptions = useMemo(
    () => INITIAL_DASHBOARD_DATA.allStates.map((s) => s.name),
    []
  )
  const cityOptions = useMemo(
    () => INITIAL_DASHBOARD_DATA.topCities.map((c) => c.city),
    []
  )
  const productOptions = useMemo(
    () => INITIAL_DASHBOARD_DATA.topProducts.map((p) => p.name),
    []
  )

  // Filtered & search-reactive dashboard dataset
  const currentDataset: DashboardDataset = useMemo(() => {
    let base = JSON.parse(JSON.stringify(INITIAL_DASHBOARD_DATA)) as DashboardDataset

    // Apply global search filter if present
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim()
      base.topProducts = base.topProducts.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.brand.toLowerCase().includes(q)
      )
      base.topCities = base.topCities.filter(
        (c) =>
          c.city.toLowerCase().includes(q) ||
          c.state.toLowerCase().includes(q)
      )
      base.topStatesSales = base.topStatesSales.filter((s) =>
        s.name.toLowerCase().includes(q)
      )
      base.topStatesProfit = base.topStatesProfit.filter((s) =>
        s.name.toLowerCase().includes(q)
      )
      base.keyInsights = base.keyInsights.filter(
        (i) =>
          i.text.toLowerCase().includes(q) ||
          i.category.toLowerCase().includes(q) ||
          i.detail.toLowerCase().includes(q)
      )
    }

    // Apply Category Filter
    if (filters.category !== 'all') {
      base.topProducts = base.topProducts.filter(
        (p) => p.category.toLowerCase() === filters.category.toLowerCase()
      )
    }

    // Apply Product Filter
    if (filters.product !== 'all') {
      base.topProducts = base.topProducts.filter(
        (p) => p.name.toLowerCase() === filters.product.toLowerCase()
      )
    }

    // Apply State Filter
    if (filters.state !== 'all') {
      base.topStatesSales = base.topStatesSales.filter(
        (s) => s.name.toLowerCase() === filters.state.toLowerCase()
      )
      base.topStatesProfit = base.topStatesProfit.filter(
        (s) => s.name.toLowerCase() === filters.state.toLowerCase()
      )
      base.topCities = base.topCities.filter(
        (c) => c.state.toLowerCase() === filters.state.toLowerCase()
      )
    }

    // Apply City Filter
    if (filters.city !== 'all') {
      base.topCities = base.topCities.filter(
        (c) => c.city.toLowerCase() === filters.city.toLowerCase()
      )
    }

    return base
  }, [filters, searchQuery])

  return (
    <div className="dashboard-layout">
      {/* Sidebar Navigation & Filters */}
      <Sidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        filters={filters}
        setFilters={setFilters}
        onResetFilters={handleResetFilters}
        categories={categoryOptions}
        states={stateOptions}
        cities={cityOptions}
        products={productOptions}
        onDownloadReport={() => setDownloadModalOpen(true)}
      />

      {/* Main Content Dashboard */}
      <main className="main-dashboard-content">
        {/* Top Header */}
        <Header
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          dateRangeLabel={
            filters.dateRange === 'q1'
              ? '01 Jan 2024 - 31 Mar 2024'
              : filters.dateRange === 'q2'
              ? '01 Apr 2024 - 30 Jun 2024'
              : filters.dateRange === 'q3'
              ? '01 Jul 2024 - 30 Sep 2024'
              : filters.dateRange === 'q4'
              ? '01 Oct 2024 - 31 Dec 2024'
              : filters.dateRange === 'last30'
              ? 'Last 30 Days'
              : '01 Jan 2024 - 31 Dec 2024'
          }
        />

        {activeTab === 'overview' ? (
          <>
            {/* Row 1: 8 KPI Metric Cards */}
            <KpiRow summary={currentDataset.summary} />

            {/* Row 2: 3 Analytics Cards */}
            <div className="dashboard-row-2">
              <SalesProfitTrendCard data={currentDataset.monthlyTrend} />
              <OrderStatusCard
                data={currentDataset.orderStatus}
                totalOrdersFormatted={currentDataset.summary.totalOrdersFormatted}
              />
              <CategorySalesCard
                categories={currentDataset.categories}
                onViewAll={() => setActiveTab('products')}
              />
            </div>

            {/* Row 3: 4 Detail Cards */}
            <div className="dashboard-row-3">
              <TopProductsCard
                products={currentDataset.topProducts}
                onSelectProduct={(p: ProductItem) => {
                  setFilters((prev) => ({ ...prev, product: p.name }))
                }}
              />
              <PaymentMethodsCard
                data={currentDataset.paymentMethods}
                totalOrdersFormatted={currentDataset.summary.totalOrdersFormatted}
              />
              <FulfillmentTypeCard
                data={currentDataset.fulfillmentTypes}
                totalOrdersFormatted={currentDataset.summary.totalOrdersFormatted}
              />
              <KeyInsightsCard
                insights={currentDataset.keyInsights}
                onOpenDetails={() => setInsightsModalOpen(true)}
              />
            </div>

            {/* Row 4: 4 Geographic & City Analysis Cards */}
            <div className="dashboard-row-4">
              <StateSalesCard
                states={currentDataset.topStatesSales}
                onSelectState={(s: StateData) => {
                  setFilters((prev) => ({ ...prev, state: s.name }))
                }}
              />
              <StateProfitCard
                states={currentDataset.topStatesProfit}
                onSelectState={(s: StateData) => {
                  setFilters((prev) => ({ ...prev, state: s.name }))
                }}
              />
              <IndiaMapCard
                states={currentDataset.allStates}
                onSelectState={(stateName: string) => {
                  setFilters((prev) => ({ ...prev, state: stateName }))
                }}
              />
              <TopCitiesCard
                cities={currentDataset.topCities}
                onSelectCity={(c: CityData) => {
                  setFilters((prev) => ({ ...prev, city: c.city }))
                }}
              />
            </div>
          </>
        ) : (
          <OtherViews
            viewId={activeTab}
            dataset={currentDataset}
            onBackToOverview={() => setActiveTab('overview')}
          />
        )}
      </main>

      {/* Detailed Insights Modal */}
      <DetailedInsightsModal
        isOpen={insightsModalOpen}
        onClose={() => setInsightsModalOpen(false)}
        insights={currentDataset.keyInsights}
      />

      {/* Download Report Modal */}
      <DownloadReportModal
        isOpen={downloadModalOpen}
        onClose={() => setDownloadModalOpen(false)}
        dataset={currentDataset}
      />
    </div>
  )
}
