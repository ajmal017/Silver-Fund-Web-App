import React from "react";
import axios from "axios";

import PositionsTable from "../components/PositionsTable";

class Positions extends React.Component {
  state = {
    primaryViewType: 0,
    showTableNow: false,
    tableData: [],
    start: "",
    end: "",
  };

  choosePrimaryVT(selection) {
    this.setState({ primaryViewType: selection }, () => {
      console.log("primaryViewType: ", this.state.primaryViewType);
    });
  }

  getDateToday() {
    var today = new Date();
    var date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();
    console.log(date);
    return date;
  }

  getApiData(callType) {
    this.setState({ showTableNow: true, tableData: [] });

    axios.defaults.baseURL = "http://localhost:8000/";
    axios.defaults.auth = {
      username: "su",
      password: "su",
    };

    if (callType === "all") {
      axios
        .get("all_positions/")
        .then((response) => {
          if (response.data.length === 0) {
            this.setState({ showTableNow: false });
            alert("No positions exist.");
          }
          this.setState({ tableData: response.data });
          console.log("tableData: ", this.state.tableData);
        })
        .catch((error) => {
          console.log(error);
          alert("Error: Failed to load all positions table.", error);
        });
    }

    if (callType === "current") {
      axios
        .get("api/positions/filter/date/", {
          params: {
            start: this.getDateToday(),
            end: this.getDateToday(),
          },
        })
        .then((response) => {
          if (response.data.length === 0) {
            this.setState({ showTableNow: false });
            alert("No current positions exist.");
          }
          this.setState({ tableData: response.data });
          console.log("tableData: ", this.state.tableData);
        })
        .catch((error) => {
          console.log(error);
          alert("Error: Failed to load current positions table.", error);
        });
    }

    if (callType === "custom") {
      if (this.state.start === "" || this.state.end === "") {
        this.setState({ showTableNow: false });
        return alert("Please select both a start date and end date.");
      }

      axios
        .get("api/positions/filter/date/", {
          params: {
            start: this.state.start,
            end: this.state.end,
          },
        })
        .then((response) => {
          if (response.data.length === 0) {
            this.setState({ showTableNow: false });
            alert("No positions exist in that date range.");
          }
          this.setState({ tableData: response.data });
          console.log("tableData: ", this.state.tableData);
        })
        .catch((error) => {
          console.log(error);
          alert(
            "Error: Failed to load positions table for that date range.",
            error
          );
        });
    }
  }

  render() {
    return (
      <div className="pane-split-container">
        <div className="left-col">
          <div className="pane-top">
            <h3 className="pane-header">Positions</h3>
            <div className="dropdown">
              <button
                className="btn dropdown-toggle dropdown-btn"
                type="button"
                data-toggle="dropdown"
              >
                Primary View Type
              </button>
              <div className="dropdown-menu dropdown-menu-right">
                <span
                  className="dropdown-item"
                  onClick={() => this.choosePrimaryVT("by_date")}
                >
                  By Date (Point-in-Time Snapshot)
                </span>
                <span
                  className="dropdown-item"
                  onClick={() => this.choosePrimaryVT(2)}
                >
                  History by Stock (Time Series View)
                </span>
                <span
                  className="dropdown-item"
                  onClick={() => this.choosePrimaryVT(3)}
                >
                  History by Industry (Time Series View)
                </span>
              </div>
            </div>
            <div className="dropdown">
              <button
                className="btn dropdown-toggle dropdown-btn"
                type="button"
                data-toggle="dropdown"
              >
                Secondary View Type
              </button>
              <div className="dropdown-menu dropdown-menu-right">
                <a className="dropdown-item" href="http://www.fixme.com/">
                  $ Positions by Stock
                </a>
                <a className="dropdown-item" href="http://www.fixme.com/">
                  % Positions by Stock
                </a>
                <a className="dropdown-item" href="http://www.fixme.com/">
                  $ Positions vs. Benchmark by Stock
                </a>
                <a className="dropdown-item" href="http://www.fixme.com/">
                  % Positions vs. Benchmark by Stock
                </a>
                <a className="dropdown-item" href="http://www.fixme.com/">
                  $ Positions by Industry
                </a>
                <a className="dropdown-item" href="http://www.fixme.com/">
                  % Positions by Industry
                </a>
                <a className="dropdown-item" href="http://www.fixme.com/">
                  $ Positions vs. Benchmark by Industry
                </a>
                <a className="dropdown-item" href="http://www.fixme.com/">
                  % Positions vs. Benchmark by Industry
                </a>
              </div>
            </div>
          </div>
          {/* EXPANDS FROM PRIMARY VIEW TYPE */}
          {this.state.primaryViewType === "by_date" && (
            <div id="bydate-dropdown">
              <div className="left-col">
                <h5>Defaults</h5>
                <label>
                  <input
                    type="radio"
                    className="defaults-radio"
                    name="by-date-defaults"
                    onClick={() => this.getApiData("all")}
                  />
                  Show All Positions
                </label>
                <br />
                <label>
                  <input
                    type="radio"
                    className="defaults-radio"
                    name="by-date-defaults"
                    onClick={() => this.getApiData("current")}
                  />
                  Show Current Positions
                </label>
              </div>
              <div className="right-col" id="custom-date-box">
                <h5>Custom</h5>
                <label className="date-label">
                  Start Date:
                  <input
                    type="date"
                    id="start-date"
                    value={this.state.start}
                    onChange={(event) => {
                      this.setState({ start: event.target.value });
                    }}
                  />
                </label>
                <br />
                <label className="date-label">
                  End Date:
                  <input
                    type="date"
                    id="end-date"
                    value={this.state.end}
                    onChange={(event) => {
                      this.setState({ end: event.target.value });
                    }}
                  />
                </label>
                <br />
                <button
                  className="btn daterange-btn"
                  onClick={() => this.getApiData("custom")}
                >
                  Show Positions in Date Range
                </button>
              </div>
            </div>
          )}
          <hr />
          {this.state.showTableNow && (
            <PositionsTable data={this.state.tableData} />
          )}
        </div>
        {/* <div className="right-col">
          INSERT SAM'S GRAPH COMPONENT HERE
        </div> */}
      </div>
    );
  }
}

export default Positions;
