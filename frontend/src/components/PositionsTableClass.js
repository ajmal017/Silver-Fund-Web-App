import React from "react";
import Spinner from "react-bootstrap/Spinner";

class PositionsTableClass extends React.Component {
  render() {
    return (
      <div>
        {this.props.data.length > 0 ? (
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
              {this.props.data.map((item, index) => {
                return (
                  <tr key={index}>
                    <td key={item.asset_id}>{item.asset_id}</td>
                    <td key={item.ticker}>{item.ticker}</td>
                    <td key={item.num_of_shares}>{item.num_of_shares}</td>
                    <td key={item.asset_type}>{item.asset_type}</td>
                    <td key={item.price}>{item.price}</td>
                    <td key={item.position_value}>{item.position_value}</td>
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
}

export default PositionsTableClass;
