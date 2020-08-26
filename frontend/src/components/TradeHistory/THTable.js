import React from "react";
import Spinner from "react-bootstrap/Spinner";
import uuid from "react-uuid";

import { addThousandsComma, makeMoneyFormat } from "../Helpers";

export default function THTable(props) {
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
            {props.data.map((item) => {
              return (
                <tr key={uuid()}>
                  <td key={uuid()}>{item.trade_id}</td>
                  <td key={uuid()}>{item.asset_id}</td>
                  <td key={uuid()}>{item.trade_type}</td>
                  <td key={uuid()}>{addThousandsComma(item.num_of_shares)}</td>
                  <td key={uuid()}>{makeMoneyFormat(item.price)}</td>
                  <td key={uuid()}>{makeMoneyFormat(item.tot_price)}</td>
                  <td key={uuid()}>{item.trade_time}</td>
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
