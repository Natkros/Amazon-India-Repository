import React from 'react'
import type { CityData } from '../data/dashboardData'

interface TopCitiesCardProps {
  cities: CityData[]
  onSelectCity?: (city: CityData) => void
}

export const TopCitiesCard: React.FC<TopCitiesCardProps> = ({
  cities,
  onSelectCity,
}) => {
  return (
    <div className="dashboard-card top-cities-card">
      <div className="card-header">
        <h3 className="card-heading">Top Cities by Sales</h3>
      </div>

      <div className="card-body cities-table-wrap">
        <table className="cities-data-table">
          <thead>
            <tr>
              <th className="th-rank">#</th>
              <th className="th-city">City</th>
              <th className="th-orders">Orders</th>
              <th className="th-sales">Sales (₹)</th>
              <th className="th-profit">Profit (₹)</th>
            </tr>
          </thead>
          <tbody>
            {cities.slice(0, 10).map((row) => (
              <tr
                key={row.rank}
                className="city-table-row"
                onClick={() => onSelectCity?.(row)}
              >
                <td className="td-rank">{row.rank}</td>
                <td className="td-city" title={`${row.city}, ${row.state}`}>
                  {row.city}
                </td>
                <td className="td-orders">{row.ordersFormatted}</td>
                <td className="td-sales">{row.salesFormatted}</td>
                <td className="td-profit">{row.profitFormatted}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
