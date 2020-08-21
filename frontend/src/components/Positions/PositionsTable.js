import React from "react";
import Spinner from "react-bootstrap/Spinner";
import uuid from "react-uuid";

export default function PositionsTable(props) {
  return (
    <div>
      {props.apiData && props.apiData.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Asset ID</th>
              <th>Ticker</th>
              <th># of Shares</th>
              <th>Position Type</th>
              <th>Price</th>
              <th>Position Value</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {props.apiData.map((item) => {
              return (
                <tr key={uuid()}>
                  <td key={uuid()}>{item.asset_id}</td>
                  <td key={uuid()}>{item.ticker}</td>
                  <td key={uuid()}>
                    {item.num_of_shares
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </td>
                  <td key={uuid()}>{item.asset_type}</td>
                  <td key={uuid()}>
                    $
                    {item.price
                      .toFixed(2)
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </td>
                  <td key={uuid()}>
                    $
                    {item.position_value
                      .toFixed(2)
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </td>
                  <td key={uuid()}>{item.date}</td>
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
