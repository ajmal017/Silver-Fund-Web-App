import React from "react";
import axios from "axios";

class Test extends React.Component {
  state = {
    data: {},
  };

  fetchTestData = () => {
    axios
      .get("https://api.exchangeratesapi.io/latest")
      .then((response) => {
        console.log(response);
        this.setState({
          data: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
        alert("There was an error in retrieving the data.", error);
      });
  };

  componentDidMount() {
    this.fetchTestData();
  }

  render() {
    return (
      <div>
        TESTING
        <br />
        {this.state.data.base}
        <br />
        {this.state.data.date}
        <br />
      </div>
    );
  }
}

export default Test;
