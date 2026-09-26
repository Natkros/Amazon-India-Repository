import React from 'react'
import type { ProductItem } from '../data/dashboardData'

interface TopProductsCardProps {
  products: ProductItem[]
  onSelectProduct?: (product: ProductItem) => void
}

export const TopProductsCard: React.FC<TopProductsCardProps> = ({
  products,
  onSelectProduct,
}) => {
  const maxSales = Math.max(...products.map((p) => p.sales), 5200000)

  return (
    <div className="dashboard-card top-products-card">
      <div className="card-header">
        <h3 className="card-heading">Top 10 Products by Revenue</h3>
      </div>

      <div className="card-body products-table-wrap">
        {/* Table Column Headers */}
        <div className="products-table-header">
          <span className="col-product">Product</span>
          <span className="col-sales">Sales (₹)</span>
          <span className="col-units">Units Sold</span>
        </div>

        {/* Product Items List */}
        <div className="products-list-scroll">
          {products.slice(0, 10).map((item) => {
            const barWidthPercent = (item.sales / maxSales) * 100

            return (
              <div
                key={item.id}
                className="product-row-item"
                onClick={() => onSelectProduct?.(item)}
              >
                {/* Thumbnail and Product Name */}
                <div className="product-info-col">
                  <div className="product-icon-box">
                    <span>{item.icon}</span>
                  </div>
                  <span className="product-title-text" title={item.name}>
                    {item.name}
                  </span>
                </div>

                {/* Horizontal Bar with Value Label */}
                <div className="product-bar-col">
                  <div className="bar-track">
                    <div
                      className="bar-fill-orange"
                      style={{ width: `${barWidthPercent}%` }}
                    />
                  </div>
                  <span className="bar-value-text">{item.salesFormatted}</span>
                </div>

                {/* Units Sold */}
                <div className="product-units-col">
                  <span>{item.unitsFormatted}</span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
