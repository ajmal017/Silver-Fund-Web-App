import React from "react";
import Spinner from "react-bootstrap/Spinner";
import uuid from "react-uuid";

import { addThousandsComma, makeMoneyFormat } from "../../../helpers";

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
                  <td key={uuid()}>{addThousandsComma(item.num_of_shares)}</td>
                  <td key={uuid()}>{item.asset_type}</td>
                  <td key={uuid()}>{makeMoneyFormat(item.price)}</td>
                  <td key={uuid()}>{makeMoneyFormat(item.position_value)}</td>
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
