import React from "react";
import Spinner from "react-bootstrap/Spinner";

export default function PositionsTable(props) {
  return (
    <div>
      {props.tableData && props.tableData.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Asset ID</th>
              <th>Ticker</th>
              <th>Number of Shares</th>
              <th>Position Type</th>
              <th>Price</th>
              <th>Position Value</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {props.tableData.map((item, index) => {
              return (
                <tr key={index}>
                  <td key={item.asset_id}>{item.asset_id}</td>
                  <td key={item.ticker}>{item.ticker}</td>
                  <td key={item.num_of_shares}>
                    {item.num_of_shares
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </td>
                  <td key={item.asset_type}>{item.asset_type}</td>
                  <td key={item.price}>
                    $
                    {item.price
                      .toFixed(2)
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </td>
                  <td key={item.position_value}>
                    $
                    {item.position_value
                      .toFixed(2)
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </td>
                  <td key={item.date}>{item.date}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <div>
          <Spinner
            animation="border"
            variant="dark"
            className="loading-spinner"
          />
        </div>
      )}
    </div>
  );
}
