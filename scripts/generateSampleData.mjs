// Generates public/data/dataset.csv — a realistic Amazon India-style order dataset
// with the exact column names of the well-known Kaggle 'Amazon Sale Report'.
import { mkdirSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const OUT = join(__dirname, '..', 'public', 'data', 'dataset.csv')

// Simple seeded PRNG for reproducibility
let seed = 42
const rand = () => {
  seed = (seed * 1103515245 + 12345) % 2147483648
  return seed / 2147483648
}
const pick = (arr) => arr[Math.floor(rand() * arr.length)]
const between = (a, b) => a + rand() * (b - a)

const CATEGORIES = [
  { name: 'Electronics', share: 0.24, price: [1500, 45000] },
  { name: 'Apparel', share: 0.22, price: [400, 3500] },
  { name: 'Home & Kitchen', share: 0.16, price: [500, 12000] },
  { name: 'Beauty', share: 0.12, price: [200, 2500] },
  { name: 'Footwear', share: 0.10, price: [500, 6000] },
  { name: 'Books', share: 0.09, price: [150, 1200] },
  { name: 'Sports & Fitness', share: 0.07, price: [400, 8000] },
]

const PRODUCTS = {
  Electronics: ['Smart TV 43" 4K', 'Wireless Earbuds Pro', 'Bluetooth Speaker', 'Power Bank 20000mAh', 'Smart Watch Series 5', 'USB-C Fast Charger', 'Laptop Backpack', 'HDMI Cable 2m'],
  Apparel: ['Cotton T-Shirt Slim Fit', 'Denim Jacket', 'Formal Shirt', 'Kurta Set', 'Sports Shorts', 'Winter Sweatshirt', 'Leather Belt', 'Polo T-Shirt'],
  'Home & Kitchen': ['Non-Stick Cookware Set', 'Mixer Grinder 750W', 'Bedsheet Double', 'Storage Container Set', 'LED Table Lamp', 'Steel Water Bottle 1L', 'Curtain Set 7ft', 'Vacuum Flask'],
  Beauty: ['Vitamin C Face Serum', 'Sunscreen SPF 50', 'Lipstick Matte Set', 'Hair Dryer 1600W', 'Face Wash Neem', 'Perfume EDT 100ml', 'Shampoo Anti-Dandruff', 'Beard Oil'],
  Footwear: ['Running Shoes', 'Casual Sneakers', 'Formal Leather Shoes', 'Flip Flops', 'Sports Sandals', 'Canvas Shoes', 'Loafers', 'Trail Hiking Boots'],
  Books: ['Atomic Habits', 'The Alchemist', 'Rich Dad Poor Dad', 'Ikigai', 'Sapiens', 'Deep Work', 'Think and Grow Rich', 'The Psychology of Money'],
  'Sports & Fitness': ['Yoga Mat 6mm', 'Dumbbell Set 10kg', 'Resistance Bands', 'Cricket Bat', 'Badminton Racket', 'Skipping Rope', 'Foam Roller', 'Football Size 5'],
}

const STATES = [
  ['MAHARASHTRA', 0.17], ['KARNATAKA', 0.13], ['TAMIL NADU', 0.10], ['TELANGANA', 0.08],
  ['DELHI', 0.08], ['UTTAR PRADESH', 0.09], ['GUJARAT', 0.07], ['WEST BENGAL', 0.06],
  ['RAJASTHAN', 0.05], ['KERALA', 0.05], ['HARYANA', 0.04], ['PUNJAB', 0.03],
  ['MADHYA PRADESH', 0.03], ['BIHAR', 0.02], ['ODISHA', 0.01],
]

const PAYMENTS = [['UPI', 0.34], ['Card', 0.26], ['Net Banking', 0.10], ['Wallet', 0.12], ['COD', 0.18]]

const MONTHS = ['2023-03', '2023-04', '2023-05', '2023-06']
const DAYS_IN_MONTH = { '2023-03': 31, '2023-04': 30, '2023-05': 31, '2023-06': 29 }
// Growth trend + festive spike in May
const MONTH_WEIGHT = { '2023-03': 0.85, '2023-04': 1.0, '2023-05': 1.35, '2023-06': 1.1 }

const STATUS_W = [['Delivered', 0.74], ['Shipped', 0.10], ['Cancelled', 0.09], ['Returned', 0.05], ['Pending', 0.02]]
const FULFIL_W = [['Amazon', 0.68], ['Merchant', 0.32]]

function weighted(list) {
  let r = rand()
  for (const [item, w] of list) {
    r -= w
    if (r <= 0) return item
  }
  return list[list.length - 1][0]
}

function pickState() {
  let r = rand()
  for (const [s, w] of STATES) {
    r -= w
    if (r <= 0) return s
  }
  return 'MAHARASHTRA'
}

const rows = []
let id = 1000000
const N = 4800

for (let i = 0; i < N; i++) {
  const month = weighted(Object.entries(MONTH_WEIGHT).map(([m, w]) => [m, w / 4]))
  const day = 1 + Math.floor(rand() * DAYS_IN_MONTH[month])
  const date = `${month}-${String(day).padStart(2, '0')}`

  const cat = weighted(CATEGORIES.map((c) => [c, c.share]))
  const product = pick(PRODUCTS[cat.name])
  const basePrice = between(cat.price[0], cat.price[1])
  const qty = rand() < 0.72 ? 1 : rand() < 0.85 ? 2 : 3
  const amount = Math.round(basePrice * qty * 100) / 100
  const status = weighted(STATUS_W)
  const fulfilment = weighted(FULFIL_W)
  const b2b = rand() < 0.03 ? 'B2B' : 'B2C'
  const payment = status === 'Cancelled' && rand() < 0.6 ? 'COD' : weighted(PAYMENTS)
  const state = pickState()

  rows.push({
    'Order ID': `AMZ-${id++}`,
    Date: date,
    Status: status,
    Fulfilment: fulfilment,
    'Sales Channel': 'Amazon.in',
    'ship-state': state,
    Category: cat.name,
    'Item Name': product,
    Qty: qty,
    Amount: amount,
    'Payment Method': payment,
    'B2B or B2C': b2b,
  })
}

const headers = Object.keys(rows[0]).join(',')
const csv = [headers, ...rows.map((r) => Object.values(r).map((v) => (String(v).includes(',') ? `"${v}"` : v)).join(','))].join('\n')

mkdirSync(dirname(OUT), { recursive: true })
writeFileSync(OUT, csv)
console.log(`Wrote ${rows.length} rows to ${OUT}`)
