import React from "react";
import Spinner from "react-bootstrap/Spinner";

function TransactionHistoryTable(props) {
  return (
    <div>
      {props.data.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Trade ID</th>
              <th>Asset ID</th>
              <th>Trade Type</th>
              <th>Number of Shares</th>
              <th>Price</th>
              <th>Total Price</th>
              <th>Trade Time</th>
            </tr>
          </thead>
          <tbody>
            {props.data.map((item, index) => {
              return (
                <tr key={index}>
                  <td key={item.trade_id}>{item.trade_id}</td>
                  <td key={item.asset_id}>{item.asset_id}</td>
                  <td key={item.trade_type}>{item.trade_type}</td>
                  <td key={item.num_of_shares}>{item.num_of_shares}</td>
                  <td key={item.price}>{item.price}</td>
                  <td key={item.tot_price}>{item.tot_price}</td>
                  <td key={item.trade_time}>{item.trade_time}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <Spinner animation="border" variant="dark" />
      )}
    </div>
  );
}

export default TransactionHistoryTable;
