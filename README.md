# Amazon India Dashboard 📊

A single-page management dashboard built for **Manoj → Ravi**: a clear, non-technical overview of Sales, Profit, Products, Orders, Order Status, Payment, Fulfillment, and Geographic performance — all in one place.

Implements the four sections required by the *Amazon India Dashboard — Sapphire IQ* spec:

| # | Section | What it shows |
|---|---------|---------------|
| 1 | Overall Sales & Profit | Total Sales, Total Profit, Total Orders, Units Sold, Avg Order Value, Profit Margin %, Monthly Sales & Profit trend |
| 2 | Category & Product Performance | Category-wise Sales / Profit / Units, Top 10 Products by Sales |
| 3 | Order Status & Revenue Loss | Delivered / Shipped / Cancelled / Returned counts, Return Rate %, Cancellation Rate %, Category-wise Returns & Cancellations |
| 4 | Payment, Fulfillment & Geographic | Sales & Profit by Payment Method and by Fulfillment Method, State-wise Sales / Profit / Orders |

Plus interactive **filters** (date range, category, state) that recompute every chart and KPI.

## Quick start

```bash
npm install
npm run dev
```

Then open the printed URL (default `http://localhost:5173`).

Other commands:

```bash
npm run build     # typecheck + production build into dist/
npm run preview   # serve the production build locally
```

## Using your own data

**Option A — drop a file in the project:** replace `public/data/dataset.xlsx` with your own file (`.csv`, `.xlsx`, `.xls`, or `.json`) keeping the same base name `dataset`. Reload the page.

**Option B — upload in the app:** click **⬆ Load different data file** (or use the upload screen when no data is found) and pick any CSV/Excel/JSON file.

**Column names are auto-detected.** The app fuzzy-matches your headers to the fields it needs — e.g. `Amount`/`Sales`/`Revenue` → sales, `ship-state`/`State` → state, `Qty`/`Quantity` → units, `Courier Status`/`Status` → order status, `Fulfilment` → fulfillment, `Payment Method`/`Payment Mode` → payment, `Date`/`Order Date` → date, `Category`, `SKU`/`Item Name`/`Product` → product.

Expected fields (only **sales or qty** is strictly required — everything else degrades gracefully):

| Field | Required | Notes |
|-------|----------|-------|
| Sales / Amount | ✅ (or Qty) | Supports `₹`, commas, `K/L/Cr` suffixes |
| Date | recommended | ISO, `dd-mm-yyyy`, `dd/mm/yyyy`, or Excel serial |
| Status | recommended | Maps variants like *Shipped - Delivered to Buyer*, *Cancelled*, *RTO* → Returned |
| Category, Product, Qty, Payment, Fulfilment, State | optional | Missing ones become "Unknown" buckets |

If the dataset has **no profit column**, profit charts use an estimated margin (default 15%) — clearly labeled, adjustable with a slider in the warning banner. Cancelled/returned orders are excluded from revenue KPIs but shown in Section 3 (revenue at risk). Rows with no sales and no units are skipped and counted in the **Data quality** footer.

> The bundled **`public/data/dataset.xlsx`** is the real dataset (10,000 orders, Jan 2024 – Aug 2026, with actual `Profit_INR`). A generated sample file (`dataset-sample.csv`, Kaggle "Amazon Sale Report"-style columns) is kept alongside for testing column auto-detection with a different header style — regenerate it with `node scripts/generateSampleData.mjs` if needed.

## Architecture

```
public/data/            ← your dataset goes here (dataset.csv/xlsx/xls/json)
scripts/                ← sample-data generator
src/
  types.ts              → normalized Order schema + data-quality report types
  data/
    columnMap.ts        → header synonyms + fuzzy auto-mapping
    loadData.ts         → CSV (PapaParse) / Excel (SheetJS) / JSON loaders
    transform.ts        → row normalization, date/status parsing, quality report
  metrics/
    computeMetrics.ts   → all KPIs & aggregations (pure, testable functions)
  hooks/
    useDataset.ts       → load default file / upload, estimated-margin fallback
    useFilters.ts       → date/category/state filtering
  components/
    ui.tsx, Filters.tsx, chartHelpers.tsx
    sections/           → one component per spec section
  App.tsx               → header, upload screen, warnings, 4 sections
  styles.css            → Amazon-inspired navy/orange theme
```

**Data flow:** file → header auto-detection → normalized typed rows → pure metric computations → sections. No backend, no database — everything runs in the browser.

## Tech stack

Vite · React 18 · TypeScript (strict) · Recharts · PapaParse · SheetJS
