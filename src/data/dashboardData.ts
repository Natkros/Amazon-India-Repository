export interface ProductItem {
  id: string
  name: string
  category: string
  sales: number // in Rupees
  salesFormatted: string
  units: number
  unitsFormatted: string
  profit: number
  icon: string
  brand: string
  rating: number
}

export interface StateData {
  id: string
  name: string
  sales: number // in Rupees
  salesFormatted: string
  profit: number // in Rupees
  profitFormatted: string
  orders: number
  ordersFormatted: string
  color: string
}

export interface CityData {
  rank: number
  city: string
  state: string
  orders: number
  ordersFormatted: string
  sales: number
  salesFormatted: string
  profit: number
  profitFormatted: string
}

export interface MonthlyTrend {
  month: string
  monthShort: string
  sales: number // in Millions
  profit: number // in Millions
  orders: number
  salesRaw: number
  profitRaw: number
}

export interface CategoryData {
  name: string
  sales: number // in Millions
  salesFormatted: string
  color: string
  percentage: number
}

export interface PaymentData {
  name: string
  percentage: number
  orders: number
  color: string
}

export interface FulfillmentData {
  name: string
  shortName: string
  percentage: number
  orders: number
  color: string
}

export interface OrderStatusData {
  status: string
  percentage: number
  count: number
  color: string
}

export interface KeyInsight {
  id: string
  icon: 'trending-up' | 'shopping-bag' | 'x-circle' | 'smartphone' | 'map-pin'
  badgeColor: 'green' | 'orange' | 'red' | 'blue' | 'amber'
  text: string
  category: string
  detail: string
}

export interface DashboardDataset {
  summary: {
    totalSales: number
    totalSalesFormatted: string
    totalProfit: number
    totalProfitFormatted: string
    totalOrders: number
    totalOrdersFormatted: string
    unitsSold: number
    unitsSoldFormatted: string
    avgOrderValue: number
    avgOrderValueFormatted: string
    profitMargin: number
    profitMarginFormatted: string
    cancelledOrders: number
    cancelledOrdersFormatted: string
    deliveredOrders: number
    deliveredOrdersFormatted: string
    salesGrowth: number
    profitGrowth: number
    ordersGrowth: number
    unitsGrowth: number
    aovGrowth: number
    marginGrowth: number
    cancellationRate: number
    deliveryRate: number
  }
  monthlyTrend: MonthlyTrend[]
  orderStatus: OrderStatusData[]
  categories: CategoryData[]
  topProducts: ProductItem[]
  paymentMethods: PaymentData[]
  fulfillmentTypes: FulfillmentData[]
  keyInsights: KeyInsight[]
  topStatesSales: StateData[]
  topStatesProfit: StateData[]
  topCities: CityData[]
  allStates: StateData[]
}

export const INITIAL_DASHBOARD_DATA: DashboardDataset = {
  summary: {
    totalSales: 123456789,
    totalSalesFormatted: '₹ 12,34,56,789',
    totalProfit: 19876432,
    totalProfitFormatted: '₹ 1,98,76,432',
    totalOrders: 48923,
    totalOrdersFormatted: '48,923',
    unitsSold: 75642,
    unitsSoldFormatted: '75,642',
    avgOrderValue: 2523,
    avgOrderValueFormatted: '₹ 2,523',
    profitMargin: 16.1,
    profitMarginFormatted: '16.1%',
    cancelledOrders: 3421,
    cancelledOrdersFormatted: '3,421',
    deliveredOrders: 44892,
    deliveredOrdersFormatted: '44,892',
    salesGrowth: 18.2,
    profitGrowth: 22.5,
    ordersGrowth: 15.3,
    unitsGrowth: 12.6,
    aovGrowth: 5.8,
    marginGrowth: 2.1,
    cancellationRate: 7.0,
    deliveryRate: 91.8,
  },
  monthlyTrend: [
    { month: 'Jan 2024', monthShort: 'Jan', sales: 2.5, profit: 0.4, orders: 3100, salesRaw: 25000000, profitRaw: 4000000 },
    { month: 'Feb 2024', monthShort: 'Feb', sales: 3.2, profit: 0.5, orders: 3400, salesRaw: 32000000, profitRaw: 5000000 },
    { month: 'Mar 2024', monthShort: 'Mar', sales: 4.1, profit: 0.6, orders: 3800, salesRaw: 41000000, profitRaw: 6000000 },
    { month: 'Apr 2024', monthShort: 'Apr', sales: 5.2, profit: 0.8, orders: 4200, salesRaw: 52000000, profitRaw: 8000000 },
    { month: 'May 2024', monthShort: 'May', sales: 6.0, profit: 0.9, orders: 4500, salesRaw: 60000000, profitRaw: 9000000 },
    { month: 'Jun 2024', monthShort: 'Jun', sales: 5.8, profit: 0.9, orders: 4400, salesRaw: 58000000, profitRaw: 9000000 },
    { month: 'Jul 2024', monthShort: 'Jul', sales: 6.4, profit: 1.0, orders: 4700, salesRaw: 64000000, profitRaw: 10000000 },
    { month: 'Aug 2024', monthShort: 'Aug', sales: 7.2, profit: 1.1, orders: 5000, salesRaw: 72000000, profitRaw: 11000000 },
    { month: 'Sep 2024', monthShort: 'Sep', sales: 8.5, profit: 1.3, orders: 5400, salesRaw: 85000000, profitRaw: 13000000 },
    { month: 'Oct 2024', monthShort: 'Oct', sales: 10.2, profit: 1.7, orders: 6200, salesRaw: 102000000, profitRaw: 17000000 },
    { month: 'Nov 2024', monthShort: 'Nov', sales: 11.5, profit: 1.9, orders: 6900, salesRaw: 115000000, profitRaw: 19000000 },
    { month: 'Dec 2024', monthShort: 'Dec', sales: 9.8, profit: 1.6, orders: 5923, salesRaw: 98000000, profitRaw: 16000000 },
  ],
  orderStatus: [
    { status: 'Delivered', percentage: 91.8, count: 44892, color: '#f97316' },
    { status: 'Cancelled', percentage: 7.0, count: 3421, color: '#ef4444' },
    { status: 'Returned', percentage: 0.8, count: 391, color: '#3b82f6' },
    { status: 'Pending', percentage: 0.4, count: 196, color: '#a855f7' },
  ],
  categories: [
    { name: 'Electronics', sales: 14.2, salesFormatted: '₹ 14.2M', color: '#f97316', percentage: 34.0 },
    { name: 'Fashion', sales: 9.8, salesFormatted: '₹ 9.8M', color: '#3b82f6', percentage: 23.5 },
    { name: 'Home & Kitchen', sales: 7.1, salesFormatted: '₹ 7.1M', color: '#10b981', percentage: 17.0 },
    { name: 'Beauty & Personal Care', sales: 4.3, salesFormatted: '₹ 4.3M', color: '#ec4899', percentage: 10.3 },
    { name: 'Books', sales: 2.9, salesFormatted: '₹ 2.9M', color: '#8b5cf6', percentage: 6.9 },
    { name: 'Others', sales: 1.8, salesFormatted: '₹ 1.8M', color: '#64748b', percentage: 4.3 },
  ],
  topProducts: [
    { id: '1', name: 'iPhone 14', category: 'Electronics', sales: 5200000, salesFormatted: '₹ 5.2M', units: 3421, unitsFormatted: '3,421', profit: 780000, icon: '📱', brand: 'Apple', rating: 4.8 },
    { id: '2', name: 'Samsung TV', category: 'Electronics', sales: 4800000, salesFormatted: '₹ 4.8M', units: 2981, unitsFormatted: '2,981', profit: 720000, icon: '📺', brand: 'Samsung', rating: 4.7 },
    { id: '3', name: 'boAt Headphones', category: 'Electronics', sales: 3600000, salesFormatted: '₹ 3.6M', units: 5213, unitsFormatted: '5,213', profit: 650000, icon: '🎧', brand: 'boAt', rating: 4.5 },
    { id: '4', name: 'Nike Shoes', category: 'Fashion', sales: 3100000, salesFormatted: '₹ 3.1M', units: 4892, unitsFormatted: '4,892', profit: 580000, icon: '👟', brand: 'Nike', rating: 4.6 },
    { id: '5', name: 'Ambrane Power Bank', category: 'Electronics', sales: 2900000, salesFormatted: '₹ 2.9M', units: 6421, unitsFormatted: '6,421', profit: 460000, icon: '🔋', brand: 'Ambrane', rating: 4.4 },
    { id: '6', name: 'Prestige Cooker', category: 'Home & Kitchen', sales: 2400000, salesFormatted: '₹ 2.4M', units: 7983, unitsFormatted: '7,983', profit: 410000, icon: '🍲', brand: 'Prestige', rating: 4.6 },
    { id: '7', name: 'LG Washing Machine', category: 'Home & Kitchen', sales: 2100000, salesFormatted: '₹ 2.1M', units: 1876, unitsFormatted: '1,876', profit: 340000, icon: '🧺', brand: 'LG', rating: 4.7 },
    { id: '8', name: 'Puma T-Shirt', category: 'Fashion', sales: 1800000, salesFormatted: '₹ 1.8M', units: 4210, unitsFormatted: '4,210', profit: 320000, icon: '👕', brand: 'Puma', rating: 4.3 },
    { id: '9', name: 'The Alchemist (Book)', category: 'Books', sales: 1600000, salesFormatted: '₹ 1.6M', units: 6784, unitsFormatted: '6,784', profit: 290000, icon: '📖', brand: 'HarperCollins', rating: 4.9 },
    { id: '10', name: 'Philips Trimmer', category: 'Beauty & Personal Care', sales: 1500000, salesFormatted: '₹ 1.5M', units: 5093, unitsFormatted: '5,093', profit: 260000, icon: '✂️', brand: 'Philips', rating: 4.5 },
  ],
  paymentMethods: [
    { name: 'UPI', percentage: 38.5, orders: 18835, color: '#f97316' },
    { name: 'COD', percentage: 24.3, orders: 11888, color: '#0ea5e9' },
    { name: 'Credit Card', percentage: 18.7, orders: 9148, color: '#10b981' },
    { name: 'Debit Card', percentage: 10.2, orders: 4990, color: '#6366f1' },
    { name: 'Net Banking', percentage: 6.1, orders: 2984, color: '#a855f7' },
    { name: 'Others', percentage: 2.2, orders: 1078, color: '#64748b' },
  ],
  fulfillmentTypes: [
    { name: 'Fulfilled by Amazon (FBA)', shortName: 'Fulfilled by Amazon', percentage: 62.1, orders: 30381, color: '#f97316' },
    { name: 'Fulfilled by Seller', shortName: 'Fulfilled by Seller', percentage: 37.9, orders: 18542, color: '#2563eb' },
  ],
  keyInsights: [
    {
      id: '1',
      icon: 'trending-up',
      badgeColor: 'green',
      text: 'Sales increased by 18.2% compared to previous period.',
      category: 'Growth',
      detail: 'Highest growth recorded in festive Q4 season driven by electronics and fashion promotions.',
    },
    {
      id: '2',
      icon: 'shopping-bag',
      badgeColor: 'orange',
      text: 'Electronics contributes 34% of total sales.',
      category: 'Product Mix',
      detail: 'Smartphones, audio, and large appliances account for ₹4.2 Cr of the quarterly gross volume.',
    },
    {
      id: '3',
      icon: 'x-circle',
      badgeColor: 'red',
      text: 'Cancellation rate decreased by 7.0%.',
      category: 'Operations',
      detail: 'Instant address verification and faster FBA dispatch reduced transit cancellations.',
    },
    {
      id: '4',
      icon: 'smartphone',
      badgeColor: 'blue',
      text: 'UPI is the most preferred payment method (38.5%).',
      category: 'Payments',
      detail: 'Zero-friction 1-click UPI checkout boosted conversion by 14.8% across Tier 2 and Tier 3 cities.',
    },
    {
      id: '5',
      icon: 'map-pin',
      badgeColor: 'amber',
      text: 'Maharashtra generates the highest revenue (₹ 18.4M).',
      category: 'Geographic',
      detail: 'Mumbai and Pune lead state volume with strong metro demand for premium electronics.',
    },
  ],
  topStatesSales: [
    { id: 'MH', name: 'Maharashtra', sales: 18400000, salesFormatted: '₹ 18.4M', profit: 2800000, profitFormatted: '₹ 2.8M', orders: 7850, ordersFormatted: '7,850', color: '#f97316' },
    { id: 'UP', name: 'Uttar Pradesh', sales: 14200000, salesFormatted: '₹ 14.2M', profit: 1900000, profitFormatted: '₹ 1.9M', orders: 6240, ordersFormatted: '6,240', color: '#f97316' },
    { id: 'KA', name: 'Karnataka', sales: 12700000, salesFormatted: '₹ 12.7M', profit: 2100000, profitFormatted: '₹ 2.1M', orders: 5820, ordersFormatted: '5,820', color: '#f97316' },
    { id: 'TN', name: 'Tamil Nadu', sales: 11300000, salesFormatted: '₹ 11.3M', profit: 1700000, profitFormatted: '₹ 1.7M', orders: 4950, ordersFormatted: '4,950', color: '#f97316' },
    { id: 'DL', name: 'Delhi', sales: 10900000, salesFormatted: '₹ 10.9M', profit: 1300000, profitFormatted: '₹ 1.3M', orders: 4680, ordersFormatted: '4,680', color: '#f97316' },
    { id: 'WB', name: 'West Bengal', sales: 8600000, salesFormatted: '₹ 8.6M', profit: 1100000, profitFormatted: '₹ 1.1M', orders: 3890, ordersFormatted: '3,890', color: '#f97316' },
    { id: 'GJ', name: 'Gujarat', sales: 8100000, salesFormatted: '₹ 8.1M', profit: 1300000, profitFormatted: '₹ 1.3M', orders: 3650, ordersFormatted: '3,650', color: '#f97316' },
    { id: 'RJ', name: 'Rajasthan', sales: 6900000, salesFormatted: '₹ 6.9M', profit: 800000, profitFormatted: '₹ 0.8M', orders: 3120, ordersFormatted: '3,120', color: '#f97316' },
    { id: 'TG', name: 'Telangana', sales: 6300000, salesFormatted: '₹ 6.3M', profit: 1000000, profitFormatted: '₹ 1.0M', orders: 2890, ordersFormatted: '2,890', color: '#f97316' },
    { id: 'MP', name: 'Madhya Pradesh', sales: 5800000, salesFormatted: '₹ 5.8M', profit: 700000, profitFormatted: '₹ 0.7M', orders: 2540, ordersFormatted: '2,540', color: '#f97316' },
  ],
  topStatesProfit: [
    { id: 'MH', name: 'Maharashtra', sales: 18400000, salesFormatted: '₹ 18.4M', profit: 2800000, profitFormatted: '₹ 2.8M', orders: 7850, ordersFormatted: '7,850', color: '#10b981' },
    { id: 'KA', name: 'Karnataka', sales: 12700000, salesFormatted: '₹ 12.7M', profit: 2100000, profitFormatted: '₹ 2.1M', orders: 5820, ordersFormatted: '5,820', color: '#10b981' },
    { id: 'UP', name: 'Uttar Pradesh', sales: 14200000, salesFormatted: '₹ 14.2M', profit: 1900000, profitFormatted: '₹ 1.9M', orders: 6240, ordersFormatted: '6,240', color: '#10b981' },
    { id: 'TN', name: 'Tamil Nadu', sales: 11300000, salesFormatted: '₹ 11.3M', profit: 1700000, profitFormatted: '₹ 1.7M', orders: 4950, ordersFormatted: '4,950', color: '#10b981' },
    { id: 'DL', name: 'Delhi', sales: 10900000, salesFormatted: '₹ 10.9M', profit: 1300000, profitFormatted: '₹ 1.3M', orders: 4680, ordersFormatted: '4,680', color: '#10b981' },
    { id: 'GJ', name: 'Gujarat', sales: 8100000, salesFormatted: '₹ 8.1M', profit: 1300000, profitFormatted: '₹ 1.3M', orders: 3650, ordersFormatted: '3,650', color: '#10b981' },
    { id: 'WB', name: 'West Bengal', sales: 8600000, salesFormatted: '₹ 8.6M', profit: 1100000, profitFormatted: '₹ 1.1M', orders: 3890, ordersFormatted: '3,890', color: '#10b981' },
    { id: 'TG', name: 'Telangana', sales: 6300000, salesFormatted: '₹ 6.3M', profit: 1000000, profitFormatted: '₹ 1.0M', orders: 2890, ordersFormatted: '2,890', color: '#10b981' },
    { id: 'RJ', name: 'Rajasthan', sales: 6900000, salesFormatted: '₹ 6.9M', profit: 800000, profitFormatted: '₹ 0.8M', orders: 3120, ordersFormatted: '3,120', color: '#10b981' },
    { id: 'MP', name: 'Madhya Pradesh', sales: 5800000, salesFormatted: '₹ 5.8M', profit: 700000, profitFormatted: '₹ 0.7M', orders: 2540, ordersFormatted: '2,540', color: '#10b981' },
  ],
  topCities: [
    { rank: 1, city: 'Bengaluru', state: 'Karnataka', orders: 6421, ordersFormatted: '6,421', sales: 6800000, salesFormatted: '₹ 6.8M', profit: 1200000, profitFormatted: '₹ 1.2M' },
    { rank: 2, city: 'Mumbai', state: 'Maharashtra', orders: 5982, ordersFormatted: '5,982', sales: 6200000, salesFormatted: '₹ 6.2M', profit: 1000000, profitFormatted: '₹ 1.0M' },
    { rank: 3, city: 'New Delhi', state: 'Delhi', orders: 5421, ordersFormatted: '5,421', sales: 5900000, salesFormatted: '₹ 5.9M', profit: 900000, profitFormatted: '₹ 0.9M' },
    { rank: 4, city: 'Hyderabad', state: 'Telangana', orders: 4982, ordersFormatted: '4,982', sales: 5100000, salesFormatted: '₹ 5.1M', profit: 800000, profitFormatted: '₹ 0.8M' },
    { rank: 5, city: 'Chennai', state: 'Tamil Nadu', orders: 4321, ordersFormatted: '4,321', sales: 4300000, salesFormatted: '₹ 4.3M', profit: 700000, profitFormatted: '₹ 0.7M' },
    { rank: 6, city: 'Kolkata', state: 'West Bengal', orders: 3987, ordersFormatted: '3,987', sales: 3900000, salesFormatted: '₹ 3.9M', profit: 600000, profitFormatted: '₹ 0.6M' },
    { rank: 7, city: 'Pune', state: 'Maharashtra', orders: 3876, ordersFormatted: '3,876', sales: 3600000, salesFormatted: '₹ 3.6M', profit: 600000, profitFormatted: '₹ 0.6M' },
    { rank: 8, city: 'Ahmedabad', state: 'Gujarat', orders: 3421, ordersFormatted: '3,421', sales: 3100000, salesFormatted: '₹ 3.1M', profit: 500000, profitFormatted: '₹ 0.5M' },
    { rank: 9, city: 'Jaipur', state: 'Rajasthan', orders: 2987, ordersFormatted: '2,987', sales: 2700000, salesFormatted: '₹ 2.7M', profit: 400000, profitFormatted: '₹ 0.4M' },
    { rank: 10, city: 'Lucknow', state: 'Uttar Pradesh', orders: 2654, ordersFormatted: '2,654', sales: 2400000, salesFormatted: '₹ 2.4M', profit: 400000, profitFormatted: '₹ 0.4M' },
  ],
  allStates: [
    { id: 'MH', name: 'Maharashtra', sales: 18400000, salesFormatted: '₹ 18.4M', profit: 2800000, profitFormatted: '₹ 2.8M', orders: 7850, ordersFormatted: '7,850', color: '#e65100' },
    { id: 'UP', name: 'Uttar Pradesh', sales: 14200000, salesFormatted: '₹ 14.2M', profit: 1900000, profitFormatted: '₹ 1.9M', orders: 6240, ordersFormatted: '6,240', color: '#f57c00' },
    { id: 'KA', name: 'Karnataka', sales: 12700000, salesFormatted: '₹ 12.7M', profit: 2100000, profitFormatted: '₹ 2.1M', orders: 5820, ordersFormatted: '5,820', color: '#fb8c00' },
    { id: 'TN', name: 'Tamil Nadu', sales: 11300000, salesFormatted: '₹ 11.3M', profit: 1700000, profitFormatted: '₹ 1.7M', orders: 4950, ordersFormatted: '4,950', color: '#ffa726' },
    { id: 'DL', name: 'Delhi', sales: 10900000, salesFormatted: '₹ 10.9M', profit: 1300000, profitFormatted: '₹ 1.3M', orders: 4680, ordersFormatted: '4,680', color: '#ffa726' },
    { id: 'WB', name: 'West Bengal', sales: 8600000, salesFormatted: '₹ 8.6M', profit: 1100000, profitFormatted: '₹ 1.1M', orders: 3890, ordersFormatted: '3,890', color: '#ffb74d' },
    { id: 'GJ', name: 'Gujarat', sales: 8100000, salesFormatted: '₹ 8.1M', profit: 1300000, profitFormatted: '₹ 1.3M', orders: 3650, ordersFormatted: '3,650', color: '#ffb74d' },
    { id: 'RJ', name: 'Rajasthan', sales: 6900000, salesFormatted: '₹ 6.9M', profit: 800000, profitFormatted: '₹ 0.8M', orders: 3120, ordersFormatted: '3,120', color: '#ffcc80' },
    { id: 'TG', name: 'Telangana', sales: 6300000, salesFormatted: '₹ 6.3M', profit: 1000000, profitFormatted: '₹ 1.0M', orders: 2890, ordersFormatted: '2,890', color: '#ffcc80' },
    { id: 'MP', name: 'Madhya Pradesh', sales: 5800000, salesFormatted: '₹ 5.8M', profit: 700000, profitFormatted: '₹ 0.7M', orders: 2540, ordersFormatted: '2,540', color: '#ffe0b2' },
    { id: 'KL', name: 'Kerala', sales: 4900000, salesFormatted: '₹ 4.9M', profit: 650000, profitFormatted: '₹ 0.65M', orders: 2180, ordersFormatted: '2,180', color: '#ffe0b2' },
    { id: 'AP', name: 'Andhra Pradesh', sales: 4600000, salesFormatted: '₹ 4.6M', profit: 590000, profitFormatted: '₹ 0.59M', orders: 1980, ordersFormatted: '1,980', color: '#ffe0b2' },
    { id: 'PB', name: 'Punjab', sales: 4100000, salesFormatted: '₹ 4.1M', profit: 520000, profitFormatted: '₹ 0.52M', orders: 1750, ordersFormatted: '1,750', color: '#ffecb3' },
    { id: 'HR', name: 'Haryana', sales: 3900000, salesFormatted: '₹ 3.9M', profit: 480000, profitFormatted: '₹ 0.48M', orders: 1620, ordersFormatted: '1,620', color: '#ffecb3' },
    { id: 'BR', name: 'Bihar', sales: 3400000, salesFormatted: '₹ 3.4M', profit: 410000, profitFormatted: '₹ 0.41M', orders: 1450, ordersFormatted: '1,450', color: '#fff3e0' },
    { id: 'OR', name: 'Odisha', sales: 2900000, salesFormatted: '₹ 2.9M', profit: 360000, profitFormatted: '₹ 0.36M', orders: 1240, ordersFormatted: '1,240', color: '#fff3e0' },
    { id: 'AS', name: 'Assam', sales: 2100000, salesFormatted: '₹ 2.1M', profit: 250000, profitFormatted: '₹ 0.25M', orders: 920, ordersFormatted: '920', color: '#fff8e1' },
    { id: 'JH', name: 'Jharkhand', sales: 1800000, salesFormatted: '₹ 1.8M', profit: 210000, profitFormatted: '₹ 0.21M', orders: 810, ordersFormatted: '810', color: '#fff8e1' },
    { id: 'UT', name: 'Uttarakhand', sales: 1500000, salesFormatted: '₹ 1.5M', profit: 180000, profitFormatted: '₹ 0.18M', orders: 670, ordersFormatted: '670', color: '#fff8e1' },
    { id: 'JK', name: 'Jammu and Kashmir', sales: 1200000, salesFormatted: '₹ 1.2M', profit: 140000, profitFormatted: '₹ 0.14M', orders: 540, ordersFormatted: '540', color: '#fffde7' },
  ],
}
