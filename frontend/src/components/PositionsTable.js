import React from "react";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";

var mybaby = true;

class PositionsTable extends React.Component {
  state = {
    data: [],
    loadedUrl: "",
  };

  fetchPositionsData(url) {
    console.log("table url", this.props.url);
    if (this.props.url === undefined) {
      return alert("Please select a valid view type.");
    }
    axios
      .get(this.props.url, {
        auth: {
          username: "su",
          password: "su",
        },
      })
      .then((response) => {
        console.log(response);
        this.setState(
          {
            data: response.data,
            loadedUrl: this.props.url,
          },
          () => {
            console.log("url: ", this.state.loadedUrl);
          }
        );
        // this.setState({
        //   data: response.data,
        //   loadedUrl: this.props.url,
        // });
      })
      .catch((error) => {
        console.log(error);
        this.setState({
          loadedUrl: this.props.url,
        });
        alert("There was an error when retrieving the data.", error);
      });
  }

  // fetchWithParams = (start: 'today', end: 'today') => {
  // fetchWithParams = (end) => {
  //   axios
  //     .get(
  //       "http://127.0.0.1:8000/api/positions/filter/date/",
  //       {
  //         params: {
  //           start: "2020-08-10",
  //           end: this.props.end,
  //           // start: this.state.library,
  //           // end: this.state.language,
  //         },
  //       },
  //       {
  //         auth: {
  //           username: "su",
  //           password: "su",
  //         },
  //       }
  //     )
  //     .then((response) => {
  //       console.log(response);
  //       this.setState({
  //         data: response.data,
  //       });
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       alert("There was an error when retrieving the data.", error);
  //     });
  // };

  componentDidMount() {
    this.fetchPositionsData();
    console.log("outside table ", this.props.url);
    // this.fetchWithParams();
  }

  componentWillUnmount() {
    console.log("Now hiding a table");
  }

  render() {
    if (this.props.url != this.state.loadedUrl && mybaby) {
      mybaby = false;
      this.fetchPositionsData(this.props.url);
      console.log("render table ", this.props.url);
    } else {
      mybaby = true;
    }

    return (
      <div>
        {/* <h1>positions table</h1> */}
        {this.state.data.length > 0 ? (
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
              {this.state.data.map((item, index) => {
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

export default PositionsTable;
