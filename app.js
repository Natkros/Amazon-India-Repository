/**
 * Amazon India Sales Dashboard - Standalone Vanilla JS Engine & Live Telemetry
 * 100% Native Web APIs, Vector SVG Geometry & Real-Time Reactive State
 * Zero third-party packages or external dependencies.
 */

(function () {
  'use strict';

  // --- Initial Data Seed & Master Data Store ---
  const INITIAL_PRODUCTS = [
    { id: 'p1', name: 'iPhone 14', category: 'Electronics', brand: 'Apple', price: 69999, profitMargin: 0.12, baseSales: 5200000, baseUnits: 3421, icon: '📱', rating: 4.8, inStock: true },
    { id: 'p2', name: 'Samsung TV', category: 'Electronics', brand: 'Samsung', price: 41990, profitMargin: 0.14, baseSales: 4800000, baseUnits: 2981, icon: '📺', rating: 4.7, inStock: true },
    { id: 'p3', name: 'boAt Headphones', category: 'Electronics', brand: 'boAt', price: 1499, profitMargin: 0.24, baseSales: 3600000, baseUnits: 5213, icon: '🎧', rating: 4.5, inStock: true },
    { id: 'p4', name: 'Nike Running Shoes', category: 'Fashion', brand: 'Nike', price: 4495, profitMargin: 0.22, baseSales: 3100000, baseUnits: 4892, icon: '👟', rating: 4.6, inStock: true },
    { id: 'p5', name: 'Ambrane Power Bank', category: 'Electronics', brand: 'Ambrane', price: 1899, profitMargin: 0.18, baseSales: 2900000, baseUnits: 6421, icon: '🔋', rating: 4.4, inStock: true },
    { id: 'p6', name: 'Prestige Cooker', category: 'Home & Kitchen', brand: 'Prestige', price: 2350, profitMargin: 0.19, baseSales: 2400000, baseUnits: 7983, icon: '🍲', rating: 4.6, inStock: true },
    { id: 'p7', name: 'LG Washing Machine', category: 'Home & Kitchen', brand: 'LG', price: 28990, profitMargin: 0.15, baseSales: 2100000, baseUnits: 1876, icon: '🧺', rating: 4.7, inStock: true },
    { id: 'p8', name: 'Puma Sports T-Shirt', category: 'Fashion', brand: 'Puma', price: 899, profitMargin: 0.28, baseSales: 1800000, baseUnits: 4210, icon: '👕', rating: 4.3, inStock: true },
    { id: 'p9', name: 'The Alchemist (Book)', category: 'Books', brand: 'HarperCollins', price: 399, profitMargin: 0.35, baseSales: 1600000, baseUnits: 6784, icon: '📖', rating: 4.9, inStock: true },
    { id: 'p10', name: 'Philips Multi Trimmer', category: 'Beauty & Personal Care', brand: 'Philips', price: 1599, profitMargin: 0.21, baseSales: 1500000, baseUnits: 5093, icon: '✂️', rating: 4.5, inStock: true },
    { id: 'p11', name: 'OnePlus Nord CE 3', category: 'Electronics', brand: 'OnePlus', price: 19999, profitMargin: 0.11, baseSales: 1420000, baseUnits: 2150, icon: '📲', rating: 4.6, inStock: true },
    { id: 'p12', name: 'Levi\'s 511 Slim Fit', category: 'Fashion', brand: 'Levi\'s', price: 2499, profitMargin: 0.25, baseSales: 1350000, baseUnits: 2800, icon: '👖', rating: 4.5, inStock: true },
    { id: 'p13', name: 'Echo Dot 5th Gen', category: 'Electronics', brand: 'Amazon', price: 4499, profitMargin: 0.20, baseSales: 1280000, baseUnits: 3100, icon: '🔊', rating: 4.7, inStock: true },
    { id: 'p14', name: 'Kindle Paperwhite', category: 'Books', brand: 'Amazon', price: 12999, profitMargin: 0.16, baseSales: 1150000, baseUnits: 1420, icon: '📚', rating: 4.8, inStock: true },
    { id: 'p15', name: 'Bajaj Mixer Grinder', category: 'Home & Kitchen', brand: 'Bajaj', price: 2999, profitMargin: 0.17, baseSales: 1050000, baseUnits: 2200, icon: '🥣', rating: 4.4, inStock: true }
  ];

  const INITIAL_STATES = [
    { name: 'Maharashtra', region: 'West', baseSales: 18400000, baseProfit: 2800000, baseOrders: 7850 },
    { name: 'Uttar Pradesh', region: 'North', baseSales: 14200000, baseProfit: 1900000, baseOrders: 6240 },
    { name: 'Karnataka', region: 'South', baseSales: 12700000, baseProfit: 2100000, baseOrders: 5820 },
    { name: 'Tamil Nadu', region: 'South', baseSales: 11300000, baseProfit: 1700000, baseOrders: 4950 },
    { name: 'Delhi', region: 'North', baseSales: 10900000, baseProfit: 1300000, baseOrders: 4680 },
    { name: 'West Bengal', region: 'East', baseSales: 8600000, baseProfit: 1100000, baseOrders: 3890 },
    { name: 'Gujarat', region: 'West', baseSales: 8100000, baseProfit: 1300000, baseOrders: 3650 },
    { name: 'Rajasthan', region: 'North', baseSales: 6900000, baseProfit: 800000, baseOrders: 3120 },
    { name: 'Telangana', region: 'South', baseSales: 6300000, baseProfit: 1000000, baseOrders: 2890 },
    { name: 'Madhya Pradesh', region: 'Central', baseSales: 5800000, baseProfit: 700000, baseOrders: 2540 },
    { name: 'Kerala', region: 'South', baseSales: 4900000, baseProfit: 650000, baseOrders: 2100 },
    { name: 'Andhra Pradesh', region: 'South', baseSales: 4500000, baseProfit: 580000, baseOrders: 1950 },
    { name: 'Punjab', region: 'North', baseSales: 3900000, baseProfit: 520000, baseOrders: 1780 },
    { name: 'Haryana', region: 'North', baseSales: 3700000, baseProfit: 490000, baseOrders: 1650 },
    { name: 'Bihar', region: 'East', baseSales: 3200000, baseProfit: 410000, baseOrders: 1450 }
  ];

  const INITIAL_CITIES = [
    { rank: 1, city: 'Bengaluru', state: 'Karnataka', baseOrders: 6421, baseSales: 6800000, baseProfit: 1200000 },
    { rank: 2, city: 'Mumbai', state: 'Maharashtra', baseOrders: 5982, baseSales: 6200000, baseProfit: 1000000 },
    { rank: 3, city: 'New Delhi', state: 'Delhi', baseOrders: 5421, baseSales: 5900000, baseProfit: 900000 },
    { rank: 4, city: 'Hyderabad', state: 'Telangana', baseOrders: 4982, baseSales: 5100000, baseProfit: 800000 },
    { rank: 5, city: 'Chennai', state: 'Tamil Nadu', baseOrders: 4321, baseSales: 4300000, baseProfit: 700000 },
    { rank: 6, city: 'Kolkata', state: 'West Bengal', baseOrders: 3987, baseSales: 3900000, baseProfit: 600000 },
    { rank: 7, city: 'Pune', state: 'Maharashtra', baseOrders: 3876, baseSales: 3600000, baseProfit: 600000 },
    { rank: 8, city: 'Ahmedabad', state: 'Gujarat', baseOrders: 3421, baseSales: 3100000, baseProfit: 500000 },
    { rank: 9, city: 'Jaipur', state: 'Rajasthan', baseOrders: 2987, baseSales: 2700000, baseProfit: 400000 },
    { rank: 10, city: 'Lucknow', state: 'Uttar Pradesh', baseOrders: 2654, baseSales: 2400000, baseProfit: 400000 },
    { rank: 11, city: 'Surat', state: 'Gujarat', baseOrders: 2210, baseSales: 1980000, baseProfit: 310000 },
    { rank: 12, city: 'Nagpur', state: 'Maharashtra', baseOrders: 1890, baseSales: 1650000, baseProfit: 260000 }
  ];

  // --- Dynamic Dashboard State ---
  const STATE = {
    liveActive: true,
    liveTimer: null,
    salesToggle: 'Sales',
    profitToggle: 'Profit',
    mapMetric: 'sales',
    trendTimeframe: 'Monthly',
    activeTab: 'overview',
    searchQuery: '',
    selectedFormat: 'csv',
    
    // Active Filter Values
    filters: {
      date: 'all',
      state: 'all',
      city: 'all',
      category: 'all',
      product: 'all',
      status: 'all',
      payment: 'all',
      fulfillment: 'all',
      channel: 'all'
    },

    // Cumulative Aggregates
    totals: {
      sales: 123456789,
      profit: 19876432,
      orders: 48923,
      units: 75642,
      cancelled: 3421,
      delivered: 44892,
      returned: 390,
      pending: 220
    },

    // 12-Month Series
    monthlyTrend: [
      { month: 'Jan', sales: 2.5, profit: 0.4 },
      { month: 'Feb', sales: 3.2, profit: 0.5 },
      { month: 'Mar', sales: 4.1, profit: 0.6 },
      { month: 'Apr', sales: 5.2, profit: 0.8 },
      { month: 'May', sales: 6.0, profit: 0.9 },
      { month: 'Jun', sales: 5.8, profit: 0.9 },
      { month: 'Jul', sales: 6.4, profit: 1.0 },
      { month: 'Aug', sales: 7.2, profit: 1.1 },
      { month: 'Sep', sales: 8.5, profit: 1.3 },
      { month: 'Oct', sales: 10.2, profit: 1.7 },
      { month: 'Nov', sales: 11.5, profit: 1.9 },
      { month: 'Dec', sales: 9.8, profit: 1.6 },
    ],

    // Categories
    categories: [
      { name: 'Electronics', sales: 14.2, color: '#f97316' },
      { name: 'Fashion', sales: 9.8, color: '#3b82f6' },
      { name: 'Home & Kitchen', sales: 7.1, color: '#10b981' },
      { name: 'Beauty & Personal Care', sales: 4.3, color: '#ec4899' },
      { name: 'Books', sales: 2.9, color: '#8b5cf6' },
      { name: 'Others', sales: 1.8, color: '#64748b' },
    ],

    // Product entities
    products: INITIAL_PRODUCTS.map(p => ({
      ...p,
      sales: p.baseSales,
      units: p.baseUnits
    })),

    // State entities
    states: INITIAL_STATES.map(s => ({
      ...s,
      sales: s.baseSales,
      profit: s.baseProfit,
      orders: s.baseOrders
    })),

    // City entities
    cities: INITIAL_CITIES.map(c => ({
      ...c,
      sales: c.baseSales,
      profit: c.baseProfit,
      orders: c.baseOrders
    })),

    // Payment Methods Breakdown
    paymentMethods: [
      { name: 'UPI', percentage: 38.5, color: '#f97316', volume: 47530000, txCount: 18835 },
      { name: 'COD', percentage: 24.3, color: '#0ea5e9', volume: 30000000, txCount: 11888 },
      { name: 'Credit Card', percentage: 18.7, color: '#10b981', volume: 23086000, txCount: 9148 },
      { name: 'Debit Card', percentage: 10.2, color: '#6366f1', volume: 12592000, txCount: 4990 },
      { name: 'Net Banking', percentage: 6.1, color: '#a855f7', volume: 7530000, txCount: 2984 },
      { name: 'Others', percentage: 2.2, color: '#64748b', volume: 2718000, txCount: 1078 },
    ],

    // Fulfillment Breakdown
    fulfillmentTypes: [
      { name: 'Fulfilled by Amazon (FBA)', percentage: 62.1, color: '#f97316', count: 30381 },
      { name: 'Fulfilled by Seller', percentage: 37.9, color: '#2563eb', count: 18542 },
    ],

    // Status Breakdown
    orderStatus: [
      { status: 'Delivered', percentage: 91.8, color: '#10b981' },
      { status: 'Cancelled', percentage: 7.0, color: '#ef4444' },
      { status: 'Returned', percentage: 0.8, color: '#3b82f6' },
      { status: 'Pending', percentage: 0.4, color: '#f59e0b' },
    ],

    // Recent Live Orders Ledger (Real-time Stream)
    recentOrders: [],

    // Key Insights
    keyInsights: [
      {
        id: '1',
        icon: 'trending-up',
        color: '#10b981',
        bg: 'rgba(16, 185, 129, 0.15)',
        text: 'Sales increased by 18.2% compared to previous period.',
        category: 'Growth',
        detail: 'Festive season spike in electronics and fashion pushed record sales velocity across all tier-1 and tier-2 regions.'
      },
      {
        id: '2',
        icon: 'shopping-bag',
        color: '#f97316',
        bg: 'rgba(249, 115, 22, 0.15)',
        text: 'Electronics contributes 34.0% of total sales.',
        category: 'Category Mix',
        detail: 'Premium smartphones and 4K smart TVs drove highest gross basket transaction value.'
      },
      {
        id: '3',
        icon: 'x-circle',
        color: '#ef4444',
        bg: 'rgba(239, 68, 68, 0.15)',
        text: 'Cancellation rate decreased to 7.0%.',
        category: 'Operations',
        detail: 'Direct FBA 1-day delivery and instant OTP verification on COD orders reduced transit cancellations.'
      },
      {
        id: '4',
        icon: 'smartphone',
        color: '#38bdf8',
        bg: 'rgba(56, 189, 248, 0.15)',
        text: 'UPI is the most preferred payment method (38.5%).',
        category: 'Payments',
        detail: '1-click UPI checkout conversion improved substantially across all mobile web and app sessions.'
      },
      {
        id: '5',
        icon: 'map-pin',
        color: '#f59e0b',
        bg: 'rgba(245, 158, 11, 0.15)',
        text: 'Maharashtra generates the highest revenue (₹ 18.4M).',
        category: 'Geographic',
        detail: 'Mumbai and Pune metropolitan areas lead overall state-level consumer spend.'
      },
    ]
  };

  // Seed Initial 20 Orders into recent ledger
  function seedInitialLedger() {
    const customerNames = ['Rahul Sharma', 'Priya Patel', 'Amit Verma', 'Sneha Iyer', 'Vikas Gupta', 'Ananya Roy', 'Rohan Mehta', 'Deepika Nair', 'Suresh Kumar', 'Neha Deshmukh'];
    const now = Date.now();
    for (let i = 20; i >= 1; i--) {
      const prod = STATE.products[Math.floor(Math.random() * STATE.products.length)];
      const city = STATE.cities[Math.floor(Math.random() * STATE.cities.length)];
      const pay = STATE.paymentMethods[Math.floor(Math.random() * STATE.paymentMethods.length)].name;
      const ful = Math.random() > 0.35 ? 'Fulfilled by Amazon (FBA)' : 'Fulfilled by Seller';
      const status = Math.random() > 0.08 ? 'Delivered' : (Math.random() > 0.5 ? 'Pending' : 'Cancelled');
      const orderDate = new Date(now - i * 180000);
      
      STATE.recentOrders.push({
        id: `AMZ-IN-${Math.floor(10000000 + Math.random() * 90000000)}`,
        time: orderDate.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
        date: orderDate.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' }),
        customer: customerNames[Math.floor(Math.random() * customerNames.length)],
        product: prod.name,
        category: prod.category,
        icon: prod.icon,
        price: prod.price,
        profit: Math.round(prod.price * prod.profitMargin),
        quantity: 1,
        city: city.city,
        state: city.state,
        payment: pay,
        fulfillment: ful,
        channel: 'Amazon.in',
        status: status
      });
    }
  }

  // --- Formatting Helpers ---
  function formatINR(num) {
    if (isNaN(num) || num === null || num === undefined) return '₹ 0';
    const parts = Math.round(num).toString().split('');
    let lastThree = parts.splice(-3).join('');
    let otherNumbers = parts.join('');
    if (otherNumbers !== '') {
      lastThree = ',' + lastThree;
    }
    const res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ',') + lastThree;
    return `₹ ${res}`;
  }

  function formatMillions(num) {
    if (isNaN(num)) return '₹ 0M';
    return `₹ ${(num / 1000000).toFixed(1)}M`;
  }

  function formatCount(num) {
    if (isNaN(num)) return '0';
    return Math.round(num).toLocaleString('en-IN');
  }

  // --- SVG Paths for India States Map ---
  const INDIA_PATHS = [
    { id: 'JK', name: 'Jammu and Kashmir', d: 'M 140 25 L 165 20 L 195 35 L 210 60 L 190 85 L 160 85 L 145 75 L 130 55 Z' },
    { id: 'HP', name: 'Himachal Pradesh', d: 'M 160 85 L 190 85 L 205 105 L 180 125 L 160 110 Z' },
    { id: 'PB', name: 'Punjab', d: 'M 130 95 L 160 95 L 160 125 L 140 135 L 125 115 Z' },
    { id: 'UT', name: 'Uttarakhand', d: 'M 180 105 L 215 115 L 210 145 L 180 135 Z' },
    { id: 'HR', name: 'Haryana', d: 'M 145 125 L 175 125 L 175 155 L 145 155 Z' },
    { id: 'DL', name: 'Delhi', d: 'M 168 138 L 178 138 L 178 148 L 168 148 Z' },
    { id: 'RJ', name: 'Rajasthan', d: 'M 95 130 L 145 130 L 155 175 L 135 220 L 90 205 L 75 160 Z' },
    { id: 'UP', name: 'Uttar Pradesh', d: 'M 175 130 L 250 140 L 270 180 L 225 210 L 175 190 L 165 155 Z' },
    { id: 'BR', name: 'Bihar', d: 'M 255 165 L 315 165 L 310 205 L 255 205 Z' },
    { id: 'WB', name: 'West Bengal', d: 'M 305 175 L 335 175 L 330 245 L 295 240 L 295 210 Z' },
    { id: 'AS', name: 'Assam', d: 'M 345 155 L 415 155 L 400 185 L 345 180 Z' },
    { id: 'AR', name: 'Arunachal Pradesh', d: 'M 370 120 L 435 130 L 425 155 L 370 145 Z' },
    { id: 'JH', name: 'Jharkhand', d: 'M 260 205 L 305 205 L 295 245 L 250 240 Z' },
    { id: 'OR', name: 'Odisha', d: 'M 255 245 L 305 245 L 285 305 L 235 285 Z' },
    { id: 'MP', name: 'Madhya Pradesh', d: 'M 140 200 L 230 200 L 240 250 L 155 260 L 130 230 Z' },
    { id: 'GJ', name: 'Gujarat', d: 'M 60 200 L 125 210 L 125 265 L 75 270 L 55 235 Z' },
    { id: 'MH', name: 'Maharashtra', d: 'M 115 265 L 215 255 L 210 330 L 130 335 L 105 295 Z' },
    { id: 'TG', name: 'Telangana', d: 'M 175 305 L 225 305 L 215 365 L 165 350 Z' },
    { id: 'AP', name: 'Andhra Pradesh', d: 'M 205 320 L 265 300 L 230 410 L 185 390 L 195 345 Z' },
    { id: 'KA', name: 'Karnataka', d: 'M 130 335 L 180 340 L 175 425 L 125 410 L 120 365 Z' },
    { id: 'KL', name: 'Kerala', d: 'M 135 415 L 165 415 L 155 480 L 130 460 Z' },
    { id: 'TN', name: 'Tamil Nadu', d: 'M 160 405 L 205 405 L 185 490 L 145 485 Z' },
  ];

  // --- Filtered Data Calculation Engine ---
  function getFilteredState() {
    let salesMultiplier = 1.0;
    let filteredProducts = STATE.products.slice();
    let filteredStates = STATE.states.slice();
    let filteredCities = STATE.cities.slice();
    let filteredCategories = STATE.categories.slice();

    // 1. Date filter
    if (STATE.filters.date === 'q1') salesMultiplier *= 0.25;
    else if (STATE.filters.date === 'q2') salesMultiplier *= 0.28;
    else if (STATE.filters.date === 'q3') salesMultiplier *= 0.32;
    else if (STATE.filters.date === 'q4') salesMultiplier *= 0.38;
    else if (STATE.filters.date === 'last30') salesMultiplier *= 0.12;

    // 2. Category filter
    if (STATE.filters.category !== 'all') {
      filteredProducts = filteredProducts.filter(p => p.category === STATE.filters.category);
      filteredCategories = filteredCategories.filter(c => c.name === STATE.filters.category);
      salesMultiplier *= (STATE.filters.category === 'Electronics' ? 0.34 : STATE.filters.category === 'Fashion' ? 0.24 : 0.18);
    }

    // 3. Product filter
    if (STATE.filters.product !== 'all') {
      filteredProducts = filteredProducts.filter(p => p.name === STATE.filters.product);
      salesMultiplier *= 0.15;
    }

    // 4. State filter
    if (STATE.filters.state !== 'all') {
      filteredStates = filteredStates.filter(s => s.name === STATE.filters.state);
      filteredCities = filteredCities.filter(c => c.state === STATE.filters.state);
      salesMultiplier *= 0.22;
    }

    // 5. City filter
    if (STATE.filters.city !== 'all') {
      filteredCities = filteredCities.filter(c => c.city === STATE.filters.city);
      salesMultiplier *= 0.12;
    }

    // 6. Order Status filter
    if (STATE.filters.status !== 'all') {
      const matchStatus = STATE.orderStatus.find(s => s.status === STATE.filters.status);
      salesMultiplier *= ((matchStatus ? matchStatus.percentage : 10) / 100);
    }

    // 7. Payment filter
    if (STATE.filters.payment !== 'all') {
      const matchPay = STATE.paymentMethods.find(p => p.name === STATE.filters.payment);
      salesMultiplier *= ((matchPay ? matchPay.percentage : 10) / 100);
    }

    // 8. Fulfillment filter
    if (STATE.filters.fulfillment !== 'all') {
      salesMultiplier *= (STATE.filters.fulfillment === 'FBA' ? 0.621 : 0.379);
    }

    // 9. Sales Channel filter
    if (STATE.filters.channel !== 'all') {
      salesMultiplier *= (STATE.filters.channel === 'Amazon.in' ? 0.72 : STATE.filters.channel === 'Amazon Business' ? 0.18 : 0.10);
    }

    // Clamp multiplier
    salesMultiplier = Math.max(0.05, Math.min(1.0, salesMultiplier));

    const computedSales = Math.round(STATE.totals.sales * salesMultiplier);
    const computedProfit = Math.round(STATE.totals.profit * salesMultiplier);
    const computedOrders = Math.max(10, Math.round(STATE.totals.orders * salesMultiplier));
    const computedUnits = Math.max(15, Math.round(STATE.totals.units * salesMultiplier));
    const computedCancelled = Math.round(STATE.totals.cancelled * salesMultiplier);
    const computedDelivered = Math.round(STATE.totals.delivered * salesMultiplier);

    return {
      sales: computedSales,
      profit: computedProfit,
      orders: computedOrders,
      units: computedUnits,
      cancelled: computedCancelled,
      delivered: computedDelivered,
      products: filteredProducts,
      states: filteredStates.length ? filteredStates : STATE.states,
      cities: filteredCities.length ? filteredCities : STATE.cities,
      categories: filteredCategories.length ? filteredCategories : STATE.categories
    };
  }

  // --- Component Renderers ---

  function renderKPIs() {
    const container = document.getElementById('kpi-grid');
    if (!container) return;

    const data = getFilteredState();
    const aov = data.orders > 0 ? (data.sales / data.orders) : 0;
    const margin = data.sales > 0 ? (data.profit / data.sales) * 100 : 0;
    const deliveryRate = data.orders > 0 ? ((data.delivered / data.orders) * 100).toFixed(1) : '91.8';
    const cancelRate = data.orders > 0 ? ((data.cancelled / data.orders) * 100).toFixed(1) : '7.0';

    const kpis = [
      { id: 'kpi-sales', title: 'Total Sales', val: formatINR(data.sales), change: '▲ 18.2%', sub: 'vs. previous period', icon: '₹', iconBg: '#059669', stroke: '#10b981', trend: 'up', wave: 'M0,18 Q15,8 30,14 T60,6 T90,12 T120,4' },
      { id: 'kpi-profit', title: 'Total Profit', val: formatINR(data.profit), change: '▲ 22.5%', sub: 'vs. previous period', icon: '📊', iconBg: '#7c3aed', stroke: '#a855f7', trend: 'up', wave: 'M0,16 Q20,18 40,8 T80,10 T100,5 T120,2' },
      { id: 'kpi-orders', title: 'Total Orders', val: formatCount(data.orders), change: '▲ 15.3%', sub: 'vs. previous period', icon: '🛒', iconBg: '#2563eb', stroke: '#3b82f6', trend: 'up', wave: 'M0,15 Q25,5 50,12 T90,8 T120,3' },
      { id: 'kpi-units', title: 'Units Sold', val: formatCount(data.units), change: '▲ 12.6%', sub: 'vs. previous period', icon: '📦', iconBg: '#d97706', stroke: '#f59e0b', trend: 'up', wave: 'M0,14 Q20,16 45,6 T85,10 T120,4' },
      { id: 'kpi-aov', title: 'Avg. Order Value', val: formatINR(aov), change: '▲ 5.8%', sub: 'vs. previous period', icon: '🏷️', iconBg: '#dc2626', stroke: '#ef4444', trend: 'up', wave: 'M0,16 Q20,8 40,14 T70,9 T100,12 T120,5' },
      { id: 'kpi-margin', title: 'Profit Margin', val: `${margin.toFixed(1)}%`, change: '▲ 2.1%', sub: 'vs. previous period', icon: '%', iconBg: '#0d9488', stroke: '#14b8a6', trend: 'up', wave: 'M0,17 Q30,6 60,11 T90,7 T120,2' },
      { id: 'kpi-cancelled', title: 'Cancelled Orders', val: formatCount(data.cancelled), change: `▼ ${cancelRate}%`, sub: 'of total orders', icon: '✕', iconBg: '#b91c1c', stroke: '#ef4444', trend: 'down', wave: 'M0,6 Q30,12 60,10 T90,16 T120,18' },
      { id: 'kpi-delivered', title: 'Delivered Orders', val: formatCount(data.delivered), change: `● ${deliveryRate}%`, sub: 'of total orders', icon: '🚚', iconBg: '#1d4ed8', stroke: '#38bdf8', trend: 'info', wave: 'M0,15 Q30,5 60,10 T90,4 T120,2' },
    ];

    container.innerHTML = kpis.map(card => `
      <div class="kpi-metric-card" id="${card.id}">
        <div class="kpi-top-row">
          <div class="kpi-icon-badge" style="background-color: ${card.iconBg};">
            <span>${card.icon}</span>
          </div>
          <span class="kpi-card-title">${card.title}</span>
        </div>
        <div class="kpi-value-row">
          <span class="kpi-main-number">${card.val}</span>
        </div>
        <div class="kpi-bottom-row">
          <div class="kpi-trend-badge ${card.trend === 'up' ? 'trend-up' : card.trend === 'down' ? 'trend-down' : 'trend-info'}">
            <span>${card.change}</span>
            <span class="trend-subtext">${card.sub}</span>
          </div>
        </div>
        <div class="kpi-sparkline-wrap">
          <svg viewBox="0 0 120 22" class="sparkline-svg" preserveAspectRatio="none">
            <path d="${card.wave}" fill="none" stroke="${card.stroke}" stroke-width="2.2" stroke-linecap="round"/>
          </svg>
        </div>
      </div>
    `).join('');
  }

  function renderTrendChart() {
    const container = document.getElementById('trend-chart-container');
    if (!container) return;

    let data = STATE.monthlyTrend;
    if (STATE.trendTimeframe === 'Quarterly') {
      data = [
        { month: 'Q1', sales: 9.8, profit: 1.5 },
        { month: 'Q2', sales: 17.0, profit: 2.6 },
        { month: 'Q3', sales: 22.1, profit: 3.4 },
        { month: 'Q4', sales: 31.5, profit: 5.2 }
      ];
    } else if (STATE.trendTimeframe === 'Weekly') {
      data = [
        { month: 'W1', sales: 2.1, profit: 0.35 },
        { month: 'W2', sales: 2.4, profit: 0.40 },
        { month: 'W3', sales: 2.8, profit: 0.45 },
        { month: 'W4', sales: 3.1, profit: 0.52 },
        { month: 'W5', sales: 2.9, profit: 0.48 },
        { month: 'W6', sales: 3.5, profit: 0.60 },
        { month: 'W7', sales: 3.8, profit: 0.65 },
        { month: 'W8', sales: 4.2, profit: 0.72 }
      ];
    }

    const w = 480;
    const h = 200;
    const padding = { top: 20, right: 35, bottom: 25, left: 40 };
    const chartW = w - padding.left - padding.right;
    const chartH = h - padding.top - padding.bottom;

    const maxSales = Math.max(...data.map(d => d.sales)) * 1.25 || 12;
    const maxProfit = Math.max(...data.map(d => d.profit)) * 1.3 || 2.5;

    const barW = Math.max(12, Math.min(24, Math.floor(chartW / data.length / 2.2)));
    const stepX = chartW / data.length;

    const barsHtml = data.map((d, i) => {
      const x = padding.left + i * stepX + (stepX - barW) / 2;
      const barH = (d.sales / maxSales) * chartH;
      const y = padding.top + chartH - barH;
      return `<rect x="${x}" y="${y}" width="${barW}" height="${barH}" rx="3" fill="#f97316" data-month="${d.month}" data-sales="${d.sales.toFixed(1)}" data-profit="${d.profit.toFixed(1)}" class="chart-bar-hover"/>`;
    }).join('');

    const points = data.map((d, i) => {
      const cx = padding.left + i * stepX + stepX / 2;
      const cy = padding.top + chartH - (d.profit / maxProfit) * chartH;
      return { cx, cy, month: d.month, profit: d.profit.toFixed(1), sales: d.sales.toFixed(1) };
    });

    const pathD = points.reduce((acc, p, idx) => `${acc} ${idx === 0 ? 'M' : 'L'} ${p.cx} ${p.cy}`, '');

    const dotsHtml = points.map(p => `
      <circle cx="${p.cx}" cy="${p.cy}" r="3.5" fill="#ffffff" stroke="#0f172a" stroke-width="1.5" class="chart-dot-hover" data-month="${p.month}" data-sales="${p.sales}" data-profit="${p.profit}"/>
    `).join('');

    const gridLevels = [0, 0.25, 0.5, 0.75, 1.0];
    const gridHtml = gridLevels.map(pct => {
      const y = padding.top + chartH - pct * chartH;
      const val = (pct * maxSales).toFixed(0);
      return `
        <line x1="${padding.left}" y1="${y}" x2="${w - padding.right}" y2="${y}" stroke="rgba(255,255,255,0.07)" stroke-dasharray="3,3"/>
        <text x="${padding.left - 6}" y="${y + 3}" fill="#94a3b8" font-size="10" text-anchor="end">₹ ${val}M</text>
      `;
    }).join('');

    const rightAxisHtml = gridLevels.map(pct => {
      const y = padding.top + chartH - pct * chartH;
      const val = (pct * maxProfit).toFixed(1);
      return `<text x="${w - padding.right + 6}" y="${y + 3}" fill="#94a3b8" font-size="10" text-anchor="start">₹ ${val}M</text>`;
    }).join('');

    const xLabelsHtml = data.map((d, i) => {
      const x = padding.left + i * stepX + stepX / 2;
      const y = h - 6;
      return `<text x="${x}" y="${y}" fill="#94a3b8" font-size="10" text-anchor="middle">${d.month}</text>`;
    }).join('');

    container.innerHTML = `
      <svg viewBox="0 0 ${w} ${h}" style="width: 100%; height: 100%; overflow: visible;">
        ${gridHtml}
        ${rightAxisHtml}
        ${barsHtml}
        <path d="${pathD}" fill="none" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round"/>
        ${dotsHtml}
        ${xLabelsHtml}
      </svg>
      <div id="trend-tooltip" class="chart-custom-tooltip" style="display: none;"></div>
    `;

    const tooltip = document.getElementById('trend-tooltip');
    container.querySelectorAll('.chart-bar-hover, .chart-dot-hover').forEach(el => {
      el.addEventListener('mouseenter', (e) => {
        const m = el.getAttribute('data-month');
        const s = el.getAttribute('data-sales');
        const p = el.getAttribute('data-profit');
        tooltip.innerHTML = `
          <div class="tooltip-title">${m} 2024</div>
          <div class="tooltip-item" style="color: #f97316;"><span>Sales:</span><strong>₹ ${s}M</strong></div>
          <div class="tooltip-item" style="color: #ffffff;"><span>Profit:</span><strong>₹ ${p}M</strong></div>
        `;
        tooltip.style.display = 'block';
        tooltip.style.left = `${e.offsetX + 10}px`;
        tooltip.style.top = `${e.offsetY - 30}px`;
      });
      el.addEventListener('mousemove', (e) => {
        tooltip.style.left = `${e.offsetX + 10}px`;
        tooltip.style.top = `${e.offsetY - 30}px`;
      });
      el.addEventListener('mouseleave', () => {
        tooltip.style.display = 'none';
      });
    });
  }

  function renderDonutChart(containerId, items, centerVal, centerLbl) {
    const container = document.getElementById(containerId);
    if (!container) return;

    let cumulativePercent = 0;
    const radius = 60;
    const strokeWidth = 22;
    const center = 80;
    const circ = 2 * Math.PI * radius;

    const segments = items.map(item => {
      const strokeDashoffset = circ * (1 - cumulativePercent / 100);
      const strokeDasharray = `${(item.percentage / 100) * circ} ${circ}`;
      cumulativePercent += item.percentage;

      return `
        <circle
          cx="${center}"
          cy="${center}"
          r="${radius}"
          fill="none"
          stroke="${item.color}"
          stroke-width="${strokeWidth}"
          stroke-dasharray="${strokeDasharray}"
          stroke-dashoffset="${strokeDashoffset}"
          transform="rotate(-90 ${center} ${center})"
        />
      `;
    }).join('');

    const legendHtml = items.map(item => `
      <div class="legend-row-item">
        <div class="legend-left">
          <span class="status-dot" style="background-color: ${item.color}"></span>
          <span class="status-name">${item.status || item.name}</span>
        </div>
        <span class="status-pct">${item.percentage}%</span>
      </div>
    `).join('');

    container.innerHTML = `
      <div class="donut-chart-wrapper">
        <svg viewBox="0 0 160 160" width="145" height="145">
          ${segments}
        </svg>
        <div class="donut-center-overlay">
          <span class="donut-center-value">${centerVal}</span>
          <span class="donut-center-label">${centerLbl}</span>
        </div>
      </div>
      <div class="donut-legend-list">
        ${legendHtml}
      </div>
    `;
  }

  function renderCategoryChart() {
    const container = document.getElementById('category-chart-container');
    if (!container) return;

    const cats = STATE.categories;
    const w = 380;
    const h = 200;
    const padding = { top: 20, right: 10, bottom: 25, left: 35 };
    const chartW = w - padding.left - padding.right;
    const chartH = h - padding.top - padding.bottom;

    const maxVal = Math.max(...cats.map(c => c.sales), 18) * 1.15;
    const barW = 26;
    const stepX = chartW / cats.length;

    const gridHtml = [0, 5, 10, 15, 20].map(val => {
      const y = padding.top + chartH - (val / 20) * chartH;
      return `
        <line x1="${padding.left}" y1="${y}" x2="${w - padding.right}" y2="${y}" stroke="rgba(255,255,255,0.07)" stroke-dasharray="3,3"/>
        <text x="${padding.left - 6}" y="${y + 3}" fill="#94a3b8" font-size="10" text-anchor="end">₹ ${val}M</text>
      `;
    }).join('');

    const barsHtml = cats.map((c, i) => {
      const x = padding.left + i * stepX + (stepX - barW) / 2;
      const barH = (c.sales / maxVal) * chartH;
      const y = padding.top + chartH - barH;
      const shortName = c.name === 'Beauty & Personal Care' ? 'Beauty' : c.name === 'Home & Kitchen' ? 'Home' : c.name;

      return `
        <rect x="${x}" y="${y}" width="${barW}" height="${barH}" rx="4" fill="${c.color}"/>
        <text x="${x + barW / 2}" y="${y - 5}" fill="#cbd5e1" font-size="10" font-weight="600" text-anchor="middle">₹ ${c.sales.toFixed(1)}M</text>
        <text x="${x + barW / 2}" y="${h - 6}" fill="#94a3b8" font-size="9.5" text-anchor="middle">${shortName}</text>
      `;
    }).join('');

    container.innerHTML = `
      <svg viewBox="0 0 ${w} ${h}" style="width: 100%; height: 100%;">
        ${gridHtml}
        ${barsHtml}
      </svg>
    `;
  }

  function renderTopProducts() {
    const container = document.getElementById('top-products-container');
    if (!container) return;

    let prods = STATE.products.slice().sort((a, b) => b.sales - a.sales);
    if (STATE.searchQuery.trim()) {
      const q = STATE.searchQuery.toLowerCase();
      prods = prods.filter(p => p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q) || p.brand.toLowerCase().includes(q));
    }
    if (STATE.filters.category !== 'all') {
      prods = prods.filter(p => p.category === STATE.filters.category);
    }

    const maxSales = Math.max(...prods.map(p => p.sales), 5200000);

    const listHtml = prods.slice(0, 10).map(p => {
      const pct = (p.sales / maxSales) * 100;
      return `
        <div class="product-row-item">
          <div class="product-info-col">
            <div class="product-icon-box">${p.icon}</div>
            <span class="product-title-text" title="${p.name}">${p.name}</span>
          </div>
          <div class="product-bar-col">
            <div class="bar-track">
              <div class="bar-fill-orange" style="width: ${pct}%"></div>
            </div>
            <span class="bar-value-text">${formatMillions(p.sales)}</span>
          </div>
          <div class="product-units-col">
            <span>${formatCount(p.units)}</span>
          </div>
        </div>
      `;
    }).join('');

    container.innerHTML = `
      <div class="products-table-header">
        <span class="col-product">Product</span>
        <span class="col-sales">Sales (₹)</span>
        <span class="col-units" style="text-align: right;">Units Sold</span>
      </div>
      <div class="products-list-scroll">
        ${listHtml || '<div style="padding: 20px; text-align: center; color: #94a3b8;">No products found matching filters</div>'}
      </div>
    `;
  }

  function renderKeyInsights() {
    const container = document.getElementById('key-insights-container');
    if (!container) return;

    // Dynamically update insights text
    const topSt = STATE.states.slice().sort((a, b) => b.sales - a.sales)[0] || { name: 'Maharashtra', sales: 18400000 };
    const topCat = STATE.categories.slice().sort((a, b) => b.sales - a.sales)[0] || { name: 'Electronics' };
    const topPay = STATE.paymentMethods.slice().sort((a, b) => b.percentage - a.percentage)[0] || { name: 'UPI', percentage: 38.5 };

    STATE.keyInsights[1].text = `${topCat.name} contributes ${((topCat.sales / (STATE.totals.sales / 1000000)) * 100).toFixed(0)}% of total sales.`;
    STATE.keyInsights[3].text = `${topPay.name} is the most preferred payment method (${topPay.percentage}%).`;
    STATE.keyInsights[4].text = `${topSt.name} generates the highest revenue (${formatMillions(topSt.sales)}).`;

    const items = STATE.keyInsights;
    const listHtml = items.map(item => `
      <div class="insight-card-item">
        <div class="insight-icon-badge" style="background-color: ${item.bg}">
          <span style="color: ${item.color}; font-weight: bold; font-size: 13px;">${item.icon === 'trending-up' ? '↗' : item.icon === 'shopping-bag' ? '🛍' : item.icon === 'x-circle' ? '✕' : item.icon === 'smartphone' ? '📱' : '📍'}</span>
        </div>
        <p class="insight-text-content">${item.text}</p>
      </div>
    `).join('');

    container.innerHTML = `
      <div class="insights-items-list">
        ${listHtml}
      </div>
      <button class="view-detailed-insights-btn" id="open-insights-btn">
        <span>View Detailed Insights</span>
        <span>→</span>
      </button>
    `;

    document.getElementById('open-insights-btn')?.addEventListener('click', () => {
      openModal('insights-modal');
      renderInsightsModalBody();
    });
  }

  function renderStateSales(metric) {
    const container = document.getElementById('state-sales-container');
    if (!container) return;

    let states = STATE.states.slice();
    if (metric === 'Profit') states.sort((a, b) => b.profit - a.profit);
    else if (metric === 'Orders') states.sort((a, b) => b.orders - a.orders);
    else states.sort((a, b) => b.sales - a.sales);

    const maxVal = metric === 'Profit' ? 3000000 : metric === 'Orders' ? 8500 : 20000000;

    const listHtml = states.slice(0, 10).map(s => {
      const raw = metric === 'Sales' ? s.sales : metric === 'Profit' ? s.profit : s.orders;
      const pct = Math.min(100, Math.max(6, (raw / maxVal) * 100));
      const displayVal = metric === 'Sales' ? formatMillions(s.sales) : metric === 'Profit' ? formatMillions(s.profit) : formatCount(s.orders);

      return `
        <div class="state-bar-row">
          <span class="state-name-label" title="${s.name}">${s.name}</span>
          <div class="state-bar-track-wrap">
            <div class="bar-track">
              <div class="bar-fill-orange" style="width: ${pct}%"></div>
            </div>
            <span class="bar-end-value">${displayVal}</span>
          </div>
        </div>
      `;
    }).join('');

    container.innerHTML = `
      <div class="state-bars-list">
        ${listHtml}
      </div>
      <div class="state-x-axis">
        <span>${metric === 'Orders' ? '0' : '₹ 0M'}</span>
        <span>${metric === 'Orders' ? '2.5K' : '5M'}</span>
        <span>${metric === 'Orders' ? '5.0K' : '10M'}</span>
        <span>${metric === 'Orders' ? '7.5K' : '15M'}</span>
        <span>${metric === 'Orders' ? '10K' : '20M'}</span>
      </div>
    `;
  }

  function renderStateProfit(metric) {
    const container = document.getElementById('state-profit-container');
    if (!container) return;

    let states = STATE.states.slice();
    if (metric === 'Sales') states.sort((a, b) => b.sales - a.sales);
    else if (metric === 'Orders') states.sort((a, b) => b.orders - a.orders);
    else states.sort((a, b) => b.profit - a.profit);

    const maxVal = metric === 'Sales' ? 20000000 : metric === 'Orders' ? 8500 : 3000000;

    const listHtml = states.slice(0, 10).map(s => {
      const raw = metric === 'Profit' ? s.profit : metric === 'Sales' ? s.sales : s.orders;
      const pct = Math.min(100, Math.max(6, (raw / maxVal) * 100));
      const displayVal = metric === 'Profit' ? formatMillions(s.profit) : metric === 'Sales' ? formatMillions(s.sales) : formatCount(s.orders);

      return `
        <div class="state-bar-row">
          <span class="state-name-label" title="${s.name}">${s.name}</span>
          <div class="state-bar-track-wrap">
            <div class="bar-track">
              <div class="bar-fill-emerald" style="width: ${pct}%"></div>
            </div>
            <span class="bar-end-value">${displayVal}</span>
          </div>
        </div>
      `;
    }).join('');

    container.innerHTML = `
      <div class="state-bars-list">
        ${listHtml}
      </div>
      <div class="state-x-axis">
        <span>${metric === 'Orders' ? '0' : '₹ 0M'}</span>
        <span>${metric === 'Orders' ? '1K' : '1M'}</span>
        <span>${metric === 'Orders' ? '2K' : '2M'}</span>
        <span>${metric === 'Orders' ? '3K' : '3M'}</span>
      </div>
    `;
  }

  function renderIndiaMap(metric) {
    const container = document.getElementById('india-map-container');
    if (!container) return;

    const stateMap = new Map();
    STATE.states.forEach(s => stateMap.set(s.name.toLowerCase(), s));

    const getColor = (stateName) => {
      const d = stateMap.get(stateName.toLowerCase());
      if (!d) return '#fed7aa';
      if (metric === 'profit') {
        if (d.profit >= 2500000) return '#059669';
        if (d.profit >= 1800000) return '#10b981';
        if (d.profit >= 1200000) return '#34d399';
        return '#6ee7b7';
      } else if (metric === 'orders') {
        if (d.orders >= 6000) return '#2563eb';
        if (d.orders >= 4000) return '#3b82f6';
        if (d.orders >= 2500) return '#60a5fa';
        return '#93c5fd';
      } else {
        if (d.sales >= 16000000) return '#ea580c';
        if (d.sales >= 12000000) return '#f97316';
        if (d.sales >= 9000000) return '#fb923c';
        if (d.sales >= 6000000) return '#fdba74';
        return '#fed7aa';
      }
    };

    const pathsHtml = INDIA_PATHS.map(st => {
      const fill = getColor(st.name);
      return `
        <path
          d="${st.d}"
          fill="${fill}"
          stroke="#1e293b"
          stroke-width="1.2"
          class="map-state-node"
          data-state="${st.name}"
          style="cursor: pointer; transition: opacity 0.2s;"
        />
      `;
    }).join('');

    container.innerHTML = `
      <div style="display: flex; align-items: center; justify-content: space-between; height: 100%; position: relative;">
        <svg viewBox="30 10 420 490" style="width: 75%; max-height: 240px; filter: drop-shadow(0 6px 12px rgba(0,0,0,0.4));">
          ${pathsHtml}
        </svg>

        <div style="display: flex; flex-direction: column; align-items: center; height: 160px; justify-content: space-between; padding-right: 8px;">
          <span style="font-size: 10.5px; color: #94a3b8; font-weight: 600; text-transform: capitalize;">${metric}</span>
          <div style="display: flex; align-items: center; gap: 6px; height: 110px;">
            <div style="width: 9px; height: 100%; border-radius: 4px; background: ${metric === 'profit' ? 'linear-gradient(to bottom, #059669, #10b981, #34d399, #6ee7b7)' : metric === 'orders' ? 'linear-gradient(to bottom, #2563eb, #3b82f6, #60a5fa, #93c5fd)' : 'linear-gradient(to bottom, #ea580c, #f97316, #fb923c, #fdba74, #fed7aa)'};"></div>
            <div style="display: flex; flex-direction: column; justify-content: space-between; height: 100%; font-size: 9.5px; color: #cbd5e1; font-weight: 500;">
              <span>▲ High</span>
              <span>▼ Low</span>
            </div>
          </div>
        </div>

        <div id="map-tooltip" class="chart-custom-tooltip" style="display: none; position: fixed; z-index: 9999;"></div>
      </div>
    `;

    const tooltip = document.getElementById('map-tooltip');
    container.querySelectorAll('.map-state-node').forEach(el => {
      el.addEventListener('mouseenter', (e) => {
        const stateName = el.getAttribute('data-state');
        const d = stateMap.get(stateName.toLowerCase());
        tooltip.innerHTML = `
          <div class="tooltip-title" style="color: #f97316;">${stateName}</div>
          <div class="tooltip-item"><span>Sales:</span><strong>${d ? formatMillions(d.sales) : '₹ 1.2M'}</strong></div>
          <div class="tooltip-item"><span>Profit:</span><strong style="color: #10b981;">${d ? formatMillions(d.profit) : '₹ 0.2M'}</strong></div>
          <div class="tooltip-item"><span>Orders:</span><strong>${d ? formatCount(d.orders) : '650'}</strong></div>
        `;
        tooltip.style.display = 'block';
        tooltip.style.left = `${e.clientX + 12}px`;
        tooltip.style.top = `${e.clientY - 40}px`;
      });
      el.addEventListener('mousemove', (e) => {
        tooltip.style.left = `${e.clientX + 12}px`;
        tooltip.style.top = `${e.clientY - 40}px`;
      });
      el.addEventListener('mouseleave', () => {
        tooltip.style.display = 'none';
      });
    });
  }

  function renderTopCities() {
    const container = document.getElementById('top-cities-container');
    if (!container) return;

    let cities = STATE.cities.slice().sort((a, b) => b.sales - a.sales);
    if (STATE.searchQuery.trim()) {
      const q = STATE.searchQuery.toLowerCase();
      cities = cities.filter(c => c.city.toLowerCase().includes(q) || c.state.toLowerCase().includes(q));
    }
    if (STATE.filters.state !== 'all') {
      cities = cities.filter(c => c.state === STATE.filters.state);
    }

    const rowsHtml = cities.slice(0, 10).map((c, i) => `
      <tr class="city-table-row">
        <td class="td-rank">${i + 1}</td>
        <td class="td-city" title="${c.city}, ${c.state}">${c.city}</td>
        <td class="td-orders">${formatCount(c.orders)}</td>
        <td class="td-sales">${formatMillions(c.sales)}</td>
        <td class="td-profit">${formatMillions(c.profit)}</td>
      </tr>
    `).join('');

    container.innerHTML = `
      <table class="cities-data-table">
        <thead>
          <tr>
            <th class="th-rank">#</th>
            <th class="th-city">City</th>
            <th class="th-orders">Orders</th>
            <th class="th-sales">Sales (₹)</th>
            <th class="th-profit">Profit (₹)</th>
          </tr>
        </thead>
        <tbody>
          ${rowsHtml || '<tr><td colspan="5" style="text-align:center; padding: 20px; color: #94a3b8;">No cities found</td></tr>'}
        </tbody>
      </table>
    `;
  }

  function populateFilterDropdowns() {
    const stateSelect = document.getElementById('filter-state');
    if (stateSelect && stateSelect.options.length <= 1) {
      STATE.states.forEach(s => {
        const opt = document.createElement('option');
        opt.value = s.name;
        opt.textContent = s.name;
        stateSelect.appendChild(opt);
      });
    }

    const citySelect = document.getElementById('filter-city');
    if (citySelect && citySelect.options.length <= 1) {
      STATE.cities.forEach(c => {
        const opt = document.createElement('option');
        opt.value = c.city;
        opt.textContent = c.city;
        citySelect.appendChild(opt);
      });
    }

    const catSelect = document.getElementById('filter-category');
    if (catSelect && catSelect.options.length <= 1) {
      STATE.categories.forEach(c => {
        const opt = document.createElement('option');
        opt.value = c.name;
        opt.textContent = c.name;
        catSelect.appendChild(opt);
      });
    }

    const prodSelect = document.getElementById('filter-product');
    if (prodSelect && prodSelect.options.length <= 1) {
      STATE.products.forEach(p => {
        const opt = document.createElement('option');
        opt.value = p.name;
        opt.textContent = p.name;
        prodSelect.appendChild(opt);
      });
    }
  }

  function renderInsightsModalBody() {
    const container = document.getElementById('insights-modal-body');
    if (!container) return;

    const cardsHtml = STATE.keyInsights.map(item => `
      <div class="insight-deep-card">
        <div class="deep-card-top">
          <span class="insight-category-tag">${item.category}</span>
          <span class="insight-status-badge">Actionable</span>
        </div>
        <h4 class="insight-headline">${item.text}</h4>
        <p class="insight-detailed-desc">${item.detail}</p>
        <div class="insight-recommendation">
          <span>⚡ <strong>Recommendation:</strong> Allocate regional FBA inventory buffers to capture high-converting organic demand.</span>
        </div>
      </div>
    `).join('');

    container.innerHTML = `
      <div class="insights-grid-2col">
        ${cardsHtml}
      </div>
      <div class="ai-summary-box">
        <div class="ai-badge">
          <span>✨ AI Revenue Engine Strategic Brief</span>
        </div>
        <p class="ai-text">
          By boosting Prime 1-day delivery availability in Western and Southern India by 14%, overall gross monthly transaction volume is projected to surge by an additional <strong>₹ 2.4 Cr</strong> with a 1.8% expansion in net operating margin.
        </p>
      </div>
    `;
  }

  function showToast(msg) {
    const toast = document.getElementById('live-toast-container');
    const msgEl = document.getElementById('live-toast-message');
    if (!toast || !msgEl) return;

    msgEl.textContent = msg;
    toast.style.display = 'flex';

    setTimeout(() => {
      toast.style.display = 'none';
    }, 2800);
  }

  // --- Real-time Live Order Simulator ---
  function triggerLiveOrderTick() {
    if (!STATE.liveActive) return;

    const prod = STATE.products[Math.floor(Math.random() * STATE.products.length)];
    const loc = STATE.cities[Math.floor(Math.random() * STATE.cities.length)];
    const qty = Math.random() > 0.8 ? 2 : 1;
    const orderTotal = prod.price * qty;
    const orderProfit = Math.round(orderTotal * prod.profitMargin);
    const payMethod = STATE.paymentMethods[Math.floor(Math.random() * STATE.paymentMethods.length)].name;
    const fulfillment = Math.random() > 0.38 ? 'Fulfilled by Amazon (FBA)' : 'Fulfilled by Seller';
    const status = Math.random() > 0.08 ? 'Delivered' : (Math.random() > 0.6 ? 'Pending' : 'Cancelled');

    // Increment Cumulative State
    STATE.totals.sales += orderTotal;
    STATE.totals.profit += orderProfit;
    STATE.totals.orders += 1;
    STATE.totals.units += qty;
    if (status === 'Delivered') STATE.totals.delivered += 1;
    else if (status === 'Cancelled') STATE.totals.cancelled += 1;
    else if (status === 'Pending') STATE.totals.pending += 1;

    // Increment Category
    const catObj = STATE.categories.find(c => c.name === prod.category);
    if (catObj) catObj.sales += orderTotal / 1000000;

    // Increment Product
    const prodObj = STATE.products.find(p => p.id === prod.id);
    if (prodObj) {
      prodObj.sales += orderTotal;
      prodObj.units += qty;
    }

    // Increment State
    const stateObj = STATE.states.find(s => s.name === loc.state);
    if (stateObj) {
      stateObj.sales += orderTotal;
      stateObj.profit += orderProfit;
      stateObj.orders += 1;
    }

    // Increment City
    const cityObj = STATE.cities.find(c => c.city === loc.city);
    if (cityObj) {
      cityObj.sales += orderTotal;
      cityObj.profit += orderProfit;
      cityObj.orders += 1;
    }

    // Increment December Monthly Trend
    STATE.monthlyTrend[11].sales += orderTotal / 1000000;
    STATE.monthlyTrend[11].profit += orderProfit / 1000000;

    // Prepend to Live Ledger
    const orderDate = new Date();
    STATE.recentOrders.unshift({
      id: `AMZ-IN-${Math.floor(10000000 + Math.random() * 90000000)}`,
      time: orderDate.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
      date: orderDate.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' }),
      customer: `Buyer (${loc.city})`,
      product: prod.name,
      category: prod.category,
      icon: prod.icon,
      price: orderTotal,
      profit: orderProfit,
      quantity: qty,
      city: loc.city,
      state: loc.state,
      payment: payMethod,
      fulfillment: fulfillment,
      channel: 'Amazon.in',
      status: status
    });

    if (STATE.recentOrders.length > 100) STATE.recentOrders.pop();

    // Rerender Active View Components
    renderAllViews();

    // Visual Flash on KPI Card
    const salesCardNumber = document.querySelector('#kpi-sales .kpi-main-number');
    if (salesCardNumber) {
      salesCardNumber.classList.add('tick-flash');
      setTimeout(() => salesCardNumber.classList.remove('tick-flash'), 600);
    }

    showToast(`+${formatINR(orderTotal)} · ${prod.name} in ${loc.city} (${fulfillment.includes('FBA') ? 'FBA' : 'Seller'})`);
  }

  function startLiveSimulation() {
    if (STATE.liveTimer) clearInterval(STATE.liveTimer);
    STATE.liveTimer = setInterval(triggerLiveOrderTick, 3200);
  }

  function toggleLiveSimulation() {
    STATE.liveActive = !STATE.liveActive;
    const btnText = document.getElementById('live-btn-text');
    const btnIcon = document.getElementById('live-btn-icon');
    const badge = document.getElementById('live-indicator-badge');

    if (STATE.liveActive) {
      if (btnText) btnText.textContent = 'Pause Live';
      if (btnIcon) btnIcon.textContent = '⏸';
      if (badge) badge.style.opacity = '1';
      startLiveSimulation();
    } else {
      if (btnText) btnText.textContent = 'Resume Live';
      if (btnIcon) btnIcon.textContent = '▶';
      if (badge) badge.style.opacity = '0.4';
      if (STATE.liveTimer) clearInterval(STATE.liveTimer);
    }
  }

  function openModal(id) {
    const el = document.getElementById(id);
    if (el) el.style.display = 'flex';
  }

  function closeModal(id) {
    const el = document.getElementById(id);
    if (el) el.style.display = 'none';
  }

  // --- Subview Management ---
  function renderAllViews() {
    if (STATE.activeTab === 'overview') {
      renderKPIs();
      renderTrendChart();
      renderDonutChart('order-status-container', STATE.orderStatus, formatCount(STATE.totals.orders), 'Total Orders');
      renderCategoryChart();
      renderTopProducts();
      renderDonutChart('payment-methods-container', STATE.paymentMethods, formatCount(STATE.totals.orders), 'Orders');
      renderDonutChart('fulfillment-type-container', STATE.fulfillmentTypes, formatCount(STATE.totals.orders), 'Orders');
      renderKeyInsights();
      renderStateSales(STATE.salesToggle);
      renderStateProfit(STATE.profitToggle);
      renderIndiaMap(STATE.mapMetric);
      renderTopCities();
    } else {
      renderActiveSubview(STATE.activeTab);
    }
  }

  function renderActiveSubview(tabId) {
    const subviewEl = document.getElementById('subview-container');
    if (!subviewEl) return;

    if (tabId === 'products') {
      let prods = STATE.products.slice().sort((a, b) => b.sales - a.sales);
      if (STATE.searchQuery.trim()) {
        const q = STATE.searchQuery.toLowerCase();
        prods = prods.filter(p => p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q) || p.brand.toLowerCase().includes(q));
      }

      const cardsHtml = prods.map(p => `
        <div class="subview-product-card">
          <div class="product-card-top">
            <span class="product-card-icon">${p.icon}</span>
            <span class="product-card-brand">${p.brand}</span>
          </div>
          <h3 class="product-card-name">${p.name}</h3>
          <div class="product-card-badge">${p.category}</div>
          <div class="product-card-metrics">
            <div><span class="metric-lbl">Sales</span><span class="metric-val">${formatMillions(p.sales)}</span></div>
            <div><span class="metric-lbl">Units</span><span class="metric-val">${formatCount(p.units)}</span></div>
            <div><span class="metric-lbl">Rating</span><span class="metric-val" style="color: #f59e0b">★ ${p.rating}</span></div>
          </div>
          <div class="product-card-footer">
            <span class="in-stock-tag">● In Stock (FBA Prime)</span>
            <span style="color: #94a3b8; font-size: 10px;">${formatINR(p.price)}/unit</span>
          </div>
        </div>
      `).join('');

      subviewEl.innerHTML = `
        <div class="subview-container">
          <div class="subview-header">
            <div>
              <h2 class="subview-title">Product Catalog & Real-Time Performance</h2>
              <p class="subview-sub">All active SKUs, revenue contributions, customer ratings, and live inventory status</p>
            </div>
            <button class="btn-secondary-dark" id="back-to-overview-btn">← Back to Overview</button>
          </div>
          <div class="subview-stats-grid">
            <div class="subview-kpi-card">
              <span class="subview-kpi-label">Active SKUs</span>
              <span class="subview-kpi-val">${STATE.products.length} Products</span>
              <span class="subview-kpi-change" style="color: #10b981;">● 100% In-Stock SLA</span>
            </div>
            <div class="subview-kpi-card">
              <span class="subview-kpi-label">Top Selling Item</span>
              <span class="subview-kpi-val">${STATE.products[0].name}</span>
              <span class="subview-kpi-change" style="color: #f97316;">${formatMillions(STATE.products[0].sales)} Gross Rev</span>
            </div>
            <div class="subview-kpi-card">
              <span class="subview-kpi-label">Total Units Dispatched</span>
              <span class="subview-kpi-val">${formatCount(STATE.totals.units)}</span>
              <span class="subview-kpi-change" style="color: #3b82f6;">▲ 12.6% MoM</span>
            </div>
          </div>
          <div class="subview-grid-cards">
            ${cardsHtml}
          </div>
        </div>
      `;
    } else if (tabId === 'orders') {
      const rowsHtml = STATE.recentOrders.map(o => `
        <tr class="orders-table-row">
          <td class="order-id-cell">${o.id}</td>
          <td>${o.time}</td>
          <td>
            <div class="order-product-cell">
              <span class="order-product-icon">${o.icon}</span>
              <span>${o.product}</span>
            </div>
          </td>
          <td>${o.city}, ${o.state}</td>
          <td style="font-weight: 700; color: #ffffff;">${formatINR(o.price)}</td>
          <td><span class="pay-tag">${o.payment}</span></td>
          <td>
            ${o.fulfillment.includes('FBA') ? '<span class="fba-prime-badge">⚡ FBA Prime</span>' : '<span class="seller-fba-badge">Seller</span>'}
          </td>
          <td>
            <span class="status-badge ${o.status.toLowerCase()}">${o.status}</span>
          </td>
        </tr>
      `).join('');

      subviewEl.innerHTML = `
        <div class="subview-container">
          <div class="subview-header">
            <div>
              <h2 class="subview-title">Live Real-Time Orders Stream</h2>
              <p class="subview-sub">Incoming real-time transaction ledger directly connected to the sales telemetry</p>
            </div>
            <button class="btn-secondary-dark" id="back-to-overview-btn">← Back to Overview</button>
          </div>
          <div class="subview-stats-grid">
            <div class="subview-kpi-card">
              <span class="subview-kpi-label">Total Orders Processed</span>
              <span class="subview-kpi-val">${formatCount(STATE.totals.orders)}</span>
              <span class="subview-kpi-change" style="color: #10b981;">▲ Live Updating</span>
            </div>
            <div class="subview-kpi-card">
              <span class="subview-kpi-label">Delivered Successfully</span>
              <span class="subview-kpi-val">${formatCount(STATE.totals.delivered)}</span>
              <span class="subview-kpi-change" style="color: #10b981;">91.8% Delivery Success</span>
            </div>
            <div class="subview-kpi-card">
              <span class="subview-kpi-label">Fulfillment Velocity</span>
              <span class="subview-kpi-val">1.2 Days</span>
              <span class="subview-kpi-change" style="color: #f97316;">⚡ Amazon Prime FastTrack</span>
            </div>
          </div>
          <div class="orders-table-card">
            <div class="orders-table-toolbar">
              <h3 style="color: #ffffff; font-size: 14px; font-weight: 700;">Live Stream (${STATE.recentOrders.length} Recent Transactions)</h3>
              <span style="font-size: 11px; color: #10b981;">● Synchronized with Telemetry</span>
            </div>
            <div class="orders-table-wrapper">
              <table class="orders-data-table">
                <thead>
                  <tr>
                    <th>Order ID</th>
                    <th>Time</th>
                    <th>Product</th>
                    <th>Destination</th>
                    <th>Amount</th>
                    <th>Payment</th>
                    <th>Fulfillment</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  ${rowsHtml}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      `;
    } else if (tabId === 'customers') {
      subviewEl.innerHTML = `
        <div class="subview-container">
          <div class="subview-header">
            <div>
              <h2 class="subview-title">Customer Analytics & Buyer Retention</h2>
              <p class="subview-sub">Prime membership engagement, cohort retention, and regional buyer density</p>
            </div>
            <button class="btn-secondary-dark" id="back-to-overview-btn">← Back to Overview</button>
          </div>
          <div class="subview-stats-grid">
            <div class="subview-kpi-card">
              <span class="subview-kpi-label">Active Buyers</span>
              <span class="subview-kpi-val">38,420</span>
              <span class="subview-kpi-change" style="color: #10b981;">▲ 14.8% YoY</span>
            </div>
            <div class="subview-kpi-card">
              <span class="subview-kpi-label">Prime Membership Share</span>
              <span class="subview-kpi-val">68.2%</span>
              <span class="subview-kpi-change" style="color: #f97316;">⚡ 2.4x Higher Basket Size</span>
            </div>
            <div class="subview-kpi-card">
              <span class="subview-kpi-label">Repeat Purchase Rate</span>
              <span class="subview-kpi-val">78.4%</span>
              <span class="subview-kpi-change" style="color: #3b82f6;">Top Retention Decile</span>
            </div>
            <div class="subview-kpi-card">
              <span class="subview-kpi-label">Avg. Customer Lifetime Value</span>
              <span class="subview-kpi-val">₹ 14,250</span>
              <span class="subview-kpi-change" style="color: #10b981;">▲ 8.2% vs 2023</span>
            </div>
          </div>
          <div class="gateway-cards-grid">
            <div class="gateway-card">
              <div class="gateway-card-header">
                <span class="gateway-name">Tier-1 Metros</span>
                <span class="gateway-share-pct">54.2%</span>
              </div>
              <p style="color: #94a3b8; font-size: 11.5px;">Bengaluru, Mumbai, Delhi NCR, Hyderabad, Chennai account for the bulk of high-ticket electronics purchases.</p>
              <div class="gateway-metrics-row">
                <span>Avg Order: ₹ 3,450</span>
                <span>FBA Prime: 88.5%</span>
              </div>
            </div>
            <div class="gateway-card">
              <div class="gateway-card-header">
                <span class="gateway-name">Tier-2 & Tier-3 Growth Cities</span>
                <span class="gateway-share-pct">45.8%</span>
              </div>
              <p style="color: #94a3b8; font-size: 11.5px;">Fastest expanding buyer demographic powered by UPI 1-click checkout and regional language support.</p>
              <div class="gateway-metrics-row">
                <span>Avg Order: ₹ 1,890</span>
                <span>UPI Adoption: 64.2%</span>
              </div>
            </div>
          </div>
        </div>
      `;
    } else if (tabId === 'payments') {
      const cardsHtml = STATE.paymentMethods.map(pm => `
        <div class="gateway-card">
          <div class="gateway-card-header">
            <span class="gateway-name" style="color: ${pm.color};">${pm.name}</span>
            <span class="gateway-share-pct">${pm.percentage}%</span>
          </div>
          <div class="bar-track" style="margin: 4px 0 8px;">
            <div style="height: 100%; width: ${pm.percentage}%; background: ${pm.color}; border-radius: 3px;"></div>
          </div>
          <div class="gateway-metrics-row">
            <span>Processed Volume</span>
            <strong style="color: #ffffff;">${formatINR(pm.volume)}</strong>
          </div>
          <div class="gateway-metrics-row">
            <span>Transactions</span>
            <strong style="color: #cbd5e1;">${formatCount(pm.txCount)}</strong>
          </div>
          <div class="gateway-metrics-row">
            <span>Success Rate</span>
            <strong style="color: #10b981;">99.4%</strong>
          </div>
        </div>
      `).join('');

      subviewEl.innerHTML = `
        <div class="subview-container">
          <div class="subview-header">
            <div>
              <h2 class="subview-title">Payment Gateways & Transaction Infrastructure</h2>
              <p class="subview-sub">Real-time payment method distribution, transaction volumes, and settlement metrics</p>
            </div>
            <button class="btn-secondary-dark" id="back-to-overview-btn">← Back to Overview</button>
          </div>
          <div class="gateway-cards-grid">
            ${cardsHtml}
          </div>
        </div>
      `;
    } else if (tabId === 'fulfillment') {
      subviewEl.innerHTML = `
        <div class="subview-container">
          <div class="subview-header">
            <div>
              <h2 class="subview-title">Fulfillment & Supply Chain Network</h2>
              <p class="subview-sub">Amazon Fulfillment Centers (FCs), dispatch SLAs, and courier performance</p>
            </div>
            <button class="btn-secondary-dark" id="back-to-overview-btn">← Back to Overview</button>
          </div>
          <div class="subview-stats-grid">
            <div class="subview-kpi-card">
              <span class="subview-kpi-label">FBA Volume Share</span>
              <span class="subview-kpi-val">62.1%</span>
              <span class="subview-kpi-change" style="color: #f97316;">⚡ Prime 1-Day Guaranteed</span>
            </div>
            <div class="subview-kpi-card">
              <span class="subview-kpi-label">On-Time Delivery SLA</span>
              <span class="subview-kpi-val">98.7%</span>
              <span class="subview-kpi-change" style="color: #10b981;">Industry Benchmark</span>
            </div>
            <div class="subview-kpi-card">
              <span class="subview-kpi-label">Return to Origin (RTO)</span>
              <span class="subview-kpi-val">2.8%</span>
              <span class="subview-kpi-change" style="color: #3b82f6;">▼ Reduced by 1.4%</span>
            </div>
          </div>
          <div class="gateway-cards-grid">
            <div class="gateway-card">
              <span class="gateway-name">📍 BOM1 - Mumbai Mega Center</span>
              <p style="color: #94a3b8; font-size: 11px;">West Zone Hub · 1.2M sq. ft storage capacity · 99.1% on-time dispatch</p>
            </div>
            <div class="gateway-card">
              <span class="gateway-name">📍 BLR2 - Bengaluru South Center</span>
              <p style="color: #94a3b8; font-size: 11px;">South Zone Hub · Automated sortation conveyor · 99.4% on-time dispatch</p>
            </div>
            <div class="gateway-card">
              <span class="gateway-name">📍 DEL4 - Delhi NCR North Center</span>
              <p style="color: #94a3b8; font-size: 11px;">North Zone Hub · High speed robotics sorting · 98.9% on-time dispatch</p>
            </div>
            <div class="gateway-card">
              <span class="gateway-name">📍 HYD1 - Hyderabad Tech Center</span>
              <p style="color: #94a3b8; font-size: 11px;">Central & Deccan Zone · Direct airport connectivity · 99.2% on-time dispatch</p>
            </div>
          </div>
        </div>
      `;
    } else if (tabId === 'geo') {
      const stateRowsHtml = STATE.states.map((s, idx) => `
        <tr class="orders-table-row">
          <td class="td-rank">${idx + 1}</td>
          <td style="font-weight: 600; color: #ffffff;">${s.name}</td>
          <td>${s.region}</td>
          <td style="text-align: right; font-weight: 700; color: #f97316;">${formatMillions(s.sales)}</td>
          <td style="text-align: right; font-weight: 700; color: #10b981;">${formatMillions(s.profit)}</td>
          <td style="text-align: right; color: #cbd5e1;">${formatCount(s.orders)}</td>
          <td style="text-align: right; color: #94a3b8;">${formatINR(s.sales / s.orders)}</td>
        </tr>
      `).join('');

      subviewEl.innerHTML = `
        <div class="subview-container">
          <div class="subview-header">
            <div>
              <h2 class="subview-title">Geographic Performance Matrix</h2>
              <p class="subview-sub">State-by-state regional telemetry, profitability indices, and market penetration</p>
            </div>
            <button class="btn-secondary-dark" id="back-to-overview-btn">← Back to Overview</button>
          </div>
          <div class="orders-table-card">
            <div class="orders-table-wrapper">
              <table class="orders-data-table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>State</th>
                    <th>Region</th>
                    <th style="text-align: right;">Sales (₹)</th>
                    <th style="text-align: right;">Profit (₹)</th>
                    <th style="text-align: right;">Orders</th>
                    <th style="text-align: right;">Avg Order Value</th>
                  </tr>
                </thead>
                <tbody>
                  ${stateRowsHtml}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      `;
    } else if (tabId === 'insights') {
      renderInsightsModalBody();
      subviewEl.innerHTML = `
        <div class="subview-container">
          <div class="subview-header">
            <div>
              <h2 class="subview-title">Amazon Executive Intelligence & Insights</h2>
              <p class="subview-sub">Comprehensive strategic directives and revenue engine forecasts</p>
            </div>
            <button class="btn-secondary-dark" id="back-to-overview-btn">← Back to Overview</button>
          </div>
          <div id="inline-insights-body"></div>
        </div>
      `;
      const inlineBody = document.getElementById('inline-insights-body');
      if (inlineBody) {
        inlineBody.innerHTML = document.getElementById('insights-modal-body')?.innerHTML || '';
      }
    }

    document.getElementById('back-to-overview-btn')?.addEventListener('click', () => switchTab('overview'));
  }

  function switchTab(tabId) {
    STATE.activeTab = tabId;
    document.querySelectorAll('.nav-item').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-tab') === tabId);
    });

    if (tabId === 'download') {
      openModal('download-modal');
      return;
    }

    const overviewEl = document.getElementById('overview-view');
    const subviewEl = document.getElementById('subview-container');
    if (!overviewEl || !subviewEl) return;

    if (tabId === 'overview') {
      overviewEl.style.display = 'block';
      subviewEl.style.display = 'none';
      renderAllViews();
    } else {
      overviewEl.style.display = 'none';
      subviewEl.style.display = 'block';
      renderActiveSubview(tabId);
    }
  }

  // --- Multi-Format Report Exporter ---
  function downloadLiveReport() {
    const timestamp = new Date().toLocaleString('en-IN');
    const data = getFilteredState();
    let content = '';
    let fileName = `Amazon_India_Sales_Report_${new Date().toISOString().slice(0, 10)}.csv`;
    let mimeType = 'text/csv;charset=utf-8;';

    if (STATE.selectedFormat === 'json') {
      fileName = `Amazon_India_Sales_Report_${new Date().toISOString().slice(0, 10)}.json`;
      mimeType = 'application/json;charset=utf-8;';
      content = JSON.stringify({
        reportTitle: 'Amazon India Executive Sales Intelligence Report',
        generatedAt: timestamp,
        activeFilters: STATE.filters,
        summary: {
          totalSalesINR: data.sales,
          totalProfitINR: data.profit,
          totalOrders: data.orders,
          unitsSold: data.units,
          avgOrderValueINR: Math.round(data.sales / data.orders),
          profitMarginPercentage: ((data.profit / data.sales) * 100).toFixed(2),
          deliveredOrders: data.delivered,
          cancelledOrders: data.cancelled
        },
        monthlyTrend: STATE.monthlyTrend,
        categoryPerformance: STATE.categories,
        topProducts: STATE.products,
        geographicPerformance: {
          topStates: STATE.states,
          topCities: STATE.cities
        },
        paymentGateways: STATE.paymentMethods,
        fulfillmentBreakdown: STATE.fulfillmentTypes,
        recentTelemetryTransactions: STATE.recentOrders
      }, null, 2);
    } else if (STATE.selectedFormat === 'xlsx') {
      // Excel-compatible HTML Spreadsheet Table
      fileName = `Amazon_India_Sales_Report_${new Date().toISOString().slice(0, 10)}.xls`;
      mimeType = 'application/vnd.ms-excel;charset=utf-8;';
      content = `
        <html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40">
        <head><meta charset="utf-8"/><title>Amazon India Report</title></head>
        <body>
          <h2>Amazon India Sales Intelligence Report (Live Telemetry)</h2>
          <p>Generated At: ${timestamp}</p>
          <table border="1">
            <tr style="background:#f97316;color:#ffffff;font-weight:bold;">
              <th>Metric</th><th>Value</th>
            </tr>
            <tr><td>Total Sales</td><td>${formatINR(data.sales)}</td></tr>
            <tr><td>Total Profit</td><td>${formatINR(data.profit)}</td></tr>
            <tr><td>Total Orders</td><td>${formatCount(data.orders)}</td></tr>
            <tr><td>Units Sold</td><td>${formatCount(data.units)}</td></tr>
            <tr><td>Avg Order Value</td><td>${formatINR(data.sales / data.orders)}</td></tr>
            <tr><td>Profit Margin</td><td>${((data.profit / data.sales) * 100).toFixed(1)}%</td></tr>
          </table>
          <br/>
          <h3>Top Products by Revenue</h3>
          <table border="1">
            <tr style="background:#232f3e;color:#ffffff;">
              <th>Product</th><th>Category</th><th>Sales (₹)</th><th>Units Sold</th><th>Rating</th>
            </tr>
            ${STATE.products.map(p => `<tr><td>${p.name}</td><td>${p.category}</td><td>${p.sales}</td><td>${p.units}</td><td>${p.rating}</td></tr>`).join('')}
          </table>
          <br/>
          <h3>State Performance</h3>
          <table border="1">
            <tr style="background:#232f3e;color:#ffffff;">
              <th>State</th><th>Region</th><th>Sales (₹)</th><th>Profit (₹)</th><th>Orders</th>
            </tr>
            ${STATE.states.map(s => `<tr><td>${s.name}</td><td>${s.region}</td><td>${s.sales}</td><td>${s.profit}</td><td>${s.orders}</td></tr>`).join('')}
          </table>
          <br/>
          <h3>Live Telemetry Ledger</h3>
          <table border="1">
            <tr style="background:#232f3e;color:#ffffff;">
              <th>Order ID</th><th>Time</th><th>Product</th><th>City</th><th>Amount (₹)</th><th>Status</th>
            </tr>
            ${STATE.recentOrders.map(o => `<tr><td>${o.id}</td><td>${o.time}</td><td>${o.product}</td><td>${o.city}</td><td>${o.price}</td><td>${o.status}</td></tr>`).join('')}
          </table>
        </body></html>
      `;
    } else {
      // Clean CSV Format
      const rows = [
        ['====================================================================='],
        ['AMAZON INDIA SALES DASHBOARD - EXECUTIVE REPORT'],
        [`Generated At: ${timestamp}`],
        [`Filters Applied: Date=${STATE.filters.date} | State=${STATE.filters.state} | Category=${STATE.filters.category}`],
        ['====================================================================='],
        [],
        ['EXECUTIVE KPI SUMMARY'],
        ['Metric', 'Value'],
        ['Total Sales', formatINR(data.sales)],
        ['Total Profit', formatINR(data.profit)],
        ['Total Orders', formatCount(data.orders)],
        ['Units Sold', formatCount(data.units)],
        ['Avg Order Value', formatINR(data.sales / data.orders)],
        ['Profit Margin', `${((data.profit / data.sales) * 100).toFixed(1)}%`],
        ['Delivered Orders', formatCount(data.delivered)],
        ['Cancelled Orders', formatCount(data.cancelled)],
        [],
        ['PRODUCT PERFORMANCE MATRIX'],
        ['Product Name', 'Category', 'Brand', 'Sales (INR)', 'Units Sold', 'Rating'],
        ...STATE.products.map(p => [p.name, p.category, p.brand, p.sales, p.units, p.rating]),
        [],
        ['GEOGRAPHIC PERFORMANCE (STATES)'],
        ['State Name', 'Region', 'Sales (INR)', 'Profit (INR)', 'Orders'],
        ...STATE.states.map(s => [s.name, s.region, s.sales, s.profit, s.orders]),
        [],
        ['GEOGRAPHIC PERFORMANCE (CITIES)'],
        ['City', 'State', 'Orders', 'Sales (INR)', 'Profit (INR)'],
        ...STATE.cities.map(c => [c.city, c.state, c.orders, c.sales, c.profit]),
        [],
        ['PAYMENT METHODS DISTRIBUTION'],
        ['Method', 'Percentage', 'Processed Volume (INR)', 'Transaction Count'],
        ...STATE.paymentMethods.map(pm => [pm.name, `${pm.percentage}%`, pm.volume, pm.txCount]),
        [],
        ['LIVE TRANSACTION LOG (RECENT DISPATCHES)'],
        ['Order ID', 'Time', 'Product', 'Location', 'Amount (INR)', 'Payment', 'Fulfillment', 'Status'],
        ...STATE.recentOrders.map(o => [o.id, o.time, o.product, `${o.city}, ${o.state}`, o.price, o.payment, o.fulfillment, o.status])
      ];
      content = rows.map(r => r.join(',')).join('\n');
    }

    const blob = new Blob([content], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  // --- Attach Filter Events ---
  function setupFilterEventListeners() {
    const filterIds = [
      { id: 'filter-date', key: 'date' },
      { id: 'filter-state', key: 'state' },
      { id: 'filter-city', key: 'city' },
      { id: 'filter-category', key: 'category' },
      { id: 'filter-product', key: 'product' },
      { id: 'filter-status', key: 'status' },
      { id: 'filter-payment', key: 'payment' },
      { id: 'filter-fulfillment', key: 'fulfillment' },
      { id: 'filter-channel', key: 'channel' }
    ];

    filterIds.forEach(({ id, key }) => {
      const select = document.getElementById(id);
      if (select) {
        select.addEventListener('change', (e) => {
          STATE.filters[key] = e.target.value;

          // Cross-filter dropdowns
          if (key === 'state') {
            const citySelect = document.getElementById('filter-city');
            if (citySelect) {
              citySelect.innerHTML = '<option value="all">All</option>';
              const stateCities = e.target.value === 'all' ? STATE.cities : STATE.cities.filter(c => c.state === e.target.value);
              stateCities.forEach(c => {
                const opt = document.createElement('option');
                opt.value = c.city;
                opt.textContent = c.city;
                citySelect.appendChild(opt);
              });
              STATE.filters.city = 'all';
            }
          }

          if (key === 'category') {
            const prodSelect = document.getElementById('filter-product');
            if (prodSelect) {
              prodSelect.innerHTML = '<option value="all">All</option>';
              const catProds = e.target.value === 'all' ? STATE.products : STATE.products.filter(p => p.category === e.target.value);
              catProds.forEach(p => {
                const opt = document.createElement('option');
                opt.value = p.name;
                opt.textContent = p.name;
                prodSelect.appendChild(opt);
              });
              STATE.filters.product = 'all';
            }
          }

          // Header date sync
          if (key === 'date') {
            const headerDate = document.getElementById('header-date-text');
            if (headerDate) {
              const opt = select.options[select.selectedIndex];
              headerDate.textContent = opt ? opt.textContent : '01 Jan 2024 - 31 Dec 2024';
            }
          }

          renderAllViews();
        });
      }
    });

    // Reset Filters Button
    document.getElementById('reset-filters-btn')?.addEventListener('click', () => {
      filterIds.forEach(({ id, key }) => {
        const el = document.getElementById(id);
        if (el) el.value = 'all';
        STATE.filters[key] = 'all';
      });

      const headerDate = document.getElementById('header-date-text');
      if (headerDate) headerDate.textContent = '01 Jan 2024 - 31 Dec 2024';

      const searchInput = document.getElementById('global-search');
      if (searchInput) searchInput.value = '';
      STATE.searchQuery = '';

      populateFilterDropdowns();
      renderAllViews();
      showToast('Filters reset to default view');
    });

    // Trend Timeframe Dropdown
    document.getElementById('trend-timeframe')?.addEventListener('change', (e) => {
      STATE.trendTimeframe = e.target.value;
      renderTrendChart();
    });

    // Global Search Bar
    document.getElementById('global-search')?.addEventListener('input', (e) => {
      STATE.searchQuery = e.target.value;
      renderTopProducts();
      renderTopCities();
    });

    // Header Date Pill Quick Trigger
    document.getElementById('header-date-pill')?.addEventListener('click', () => {
      const dateSelect = document.getElementById('filter-date');
      if (dateSelect) {
        dateSelect.focus();
        dateSelect.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    });
  }

  // --- App Initialization ---
  function init() {
    seedInitialLedger();
    populateFilterDropdowns();
    renderAllViews();

    // Start Live Simulation Loop
    startLiveSimulation();

    // Setup Filter Listeners
    setupFilterEventListeners();

    // Toggle live button
    document.getElementById('toggle-live-feed-btn')?.addEventListener('click', toggleLiveSimulation);

    // Sidebar navigation
    document.querySelectorAll('.nav-item').forEach(btn => {
      btn.addEventListener('click', () => {
        const tab = btn.getAttribute('data-tab');
        if (tab) switchTab(tab);
      });
    });

    // View all categories button
    document.getElementById('view-all-categories-btn')?.addEventListener('click', () => switchTab('products'));

    // State sales toggle
    document.querySelectorAll('#sales-state-toggles .metric-pill-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('#sales-state-toggles .metric-pill-btn').forEach(b => b.classList.remove('active-orange'));
        btn.classList.add('active-orange');
        STATE.salesToggle = btn.getAttribute('data-metric');
        renderStateSales(STATE.salesToggle);
      });
    });

    // State profit toggle
    document.querySelectorAll('#profit-state-toggles .metric-pill-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('#profit-state-toggles .metric-pill-btn').forEach(b => b.classList.remove('active-emerald'));
        btn.classList.add('active-emerald');
        STATE.profitToggle = btn.getAttribute('data-metric');
        renderStateProfit(STATE.profitToggle);
      });
    });

    // Map metric dropdown
    document.getElementById('map-metric-select')?.addEventListener('change', (e) => {
      STATE.mapMetric = e.target.value;
      renderIndiaMap(STATE.mapMetric);
    });

    // Modal listeners
    document.getElementById('close-insights-modal')?.addEventListener('click', () => closeModal('insights-modal'));
    document.getElementById('dismiss-insights-modal')?.addEventListener('click', () => closeModal('insights-modal'));
    document.getElementById('export-insights-pdf')?.addEventListener('click', () => {
      downloadLiveReport();
      closeModal('insights-modal');
      showToast('Executive Report Exported Successfully!');
    });

    document.getElementById('close-download-modal')?.addEventListener('click', () => closeModal('download-modal'));
    document.getElementById('cancel-download-modal')?.addEventListener('click', () => closeModal('download-modal'));
    document.getElementById('confirm-download-btn')?.addEventListener('click', () => {
      downloadLiveReport();
      closeModal('download-modal');
      showToast('Live Sales Report Downloaded!');
    });

    // Format selection in modal
    document.querySelectorAll('.format-card-option').forEach(card => {
      card.addEventListener('click', () => {
        document.querySelectorAll('.format-card-option').forEach(c => c.classList.remove('selected'));
        card.classList.add('selected');
        STATE.selectedFormat = card.getAttribute('data-format') || 'csv';
      });
    });
  }

  // DOM Ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
