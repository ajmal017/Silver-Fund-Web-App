import React from "react";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";

class TableDB extends React.Component {
  state = {
    data: [],
  };

  fetchTableDBData = (url) => {
    console.log(this.props.url);
    axios
      .get(this.props.url, {
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
    this.fetchTableDBData();
  }

  render() {
    return (
      <div>
        {this.state.data.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th>Asset ID</th>
                <th>Number of Shares</th>
                <th>Position Type</th>
                <th>Position Value</th>
                <th>Item Price</th>
                <th>Item Ticker</th>
              </tr>
            </thead>
            <tbody>
              {this.state.data.map((item, index) => {
                return (
                  <tr key={index}>
                    <td key={item.asset_id}>{item.asset_id}</td>
                    <td key={item.num_of_shares}>{item.num_of_shares}</td>
                    <td key={item.pos_type}>{item.pos_type}</td>
                    <td key={item.position_value}>{item.position_value}</td>
                    <td key={item.price}>{item.price}</td>
                    <td key={item.ticker}>{item.ticker}</td>
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

export default TableDB;
