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
        {this.state.data.map((item) => (
          <p>
            asset id: {item.asset_id} <br />
            number of shares: {item.num_of_shares} <br />
            position type: {item.pos_type} <br />
            position value: {item.position_value} <br />
            item price: {item.price} <br />
            item ticker: {item.ticker} <br />
            <br />
          </p>
        ))}
        <br />
      </div>
    );
  }
}

export default IBTest;
