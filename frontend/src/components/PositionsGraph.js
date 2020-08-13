import React from "react";
import Spinner from "react-bootstrap/Spinner";

var myvar = "hi"

class PositionsGraph extends React.Component {


  render() {
    return (
      <div>
        <h1>{myvar}</h1>
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
      </div>
    );
  }
}

export default PositionsGraph;
