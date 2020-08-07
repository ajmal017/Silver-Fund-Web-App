import React from "react";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";

class Trades extends React.Component {
  state = {
    data: [],
  };

  fetchTradesData = () => {
    axios
      .get("http://localhost:8000/trades/", {
        auth: {
          username: "su",
          password: "su",
        },
      })
      .then((response) => {
        console.log(response);
        this.setState({
          data: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
        alert("There was an error when retrieving the data.", error);
      });
  };

  componentDidMount() {
    this.fetchTradesData();
  }

  render() {
    return (
      <div>
        <h3>Trades</h3>
        <br />
        {this.state.data.length > 0 ? (
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
              {this.state.data.map((item, index) => {
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
}

export default Trades;
