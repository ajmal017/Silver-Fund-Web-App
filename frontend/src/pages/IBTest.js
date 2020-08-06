import React from "react";
import axios from "axios";

class IBTest extends React.Component {
  state = {
    data: [],
  };

  fetchTestData = () => {
    axios
      .get("http://localhost:8000/api/positions/current/")
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
    this.fetchTestData();
  }

  render() {
    return (
      <div>
        <h3>My Positions</h3>
        {this.state.data.asset_id}
        <br />
        <ul>
          {this.state.data.map((item, index) => {
            return (
              <div key={index}>
                <li key={item.asset_id}>asset id: {item.asset_id}</li>
                <li key={item.num_of_shares}>
                  number of shares: {item.num_of_shares}
                </li>
                <li key={item.pos_type}>position type: {item.pos_type}</li>
                <li key={item.position_value}>
                  position value: {item.position_value}
                </li>
                <li key={item.price}>item price: {item.price}</li>
                <li key={item.ticker}>item ticker: {item.ticker}</li>
                <br />
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default IBTest;
