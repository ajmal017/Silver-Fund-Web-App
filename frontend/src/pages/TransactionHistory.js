import React, { useState } from "react";
import axios from "axios";

import DateRanger from "../components/DateRanger";
import TransactionHistoryTable from "../components/TransactionHistoryTable";
import { getDateToday } from "../components/Helpers";

function TransactionHistory() {
  const [viewType, setViewType] = useState(0);
  const [showTableNow, setShowTableNow] = useState(false);
  const [tableData, setTableData] = useState([]);
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");

  function getApiData(callType) {
    setShowTableNow(true);
    setTableData([]);

    axios.defaults.baseURL = "http://localhost:8000/";
    axios.defaults.auth = {
      username: "su",
      password: "su",
    };

    if (callType === "all") {
      axios
        .get("trades/")
        .then((response) => {
          if (response.data.length === 0) {
            showTableNow(false);
            alert("No transactions exist.");
          }
          setTableData(response.data);
          console.log("tableData: ", tableData);
        })
        .catch((error) => {
          console.log(error);
          alert("Error: Failed to load all transaction table.", error);
        });
    }

    if (callType === "current") {
      axios
        .get("api/trades/filter/date/", {
          params: {
            start: getDateToday(),
            end: getDateToday(),
          },
        })
        .then((response) => {
          if (response.data.length === 0) {
            setShowTableNow(false);
            alert("No current transactions exist.");
          }
          setTableData(response.data);

          console.log("tableData: ", tableData);
        })
        .catch((error) => {
          console.log(error);
          alert("Error: Failed to load current transactions table.", error);
        });
    }

    if (callType === "custom") {
      console.log("start: ", start, " end: ", end);
      if (start === "" || end === "") {
        setShowTableNow(false);
        return alert("Please select both a start date and end date.");
      }

      axios
        .get("api/trades/filter/date/", {
          params: {
            start: start,
            end: end,
          },
        })
        .then((response) => {
          if (response.data.length === 0) {
            setShowTableNow(false);
            alert("No transactions exist in that date range.");
          }
          setTableData(response.data);
          console.log("tableData: ", tableData);
        })
        .catch((error) => {
          console.log(error);
          alert(
            "Error: Failed to load transactions table for that date range.",
            error
          );
        });
    }
  }

  return (
    <div>
      <div className="pane-top">
        <h3 className="pane-header">Transaction History</h3>
        <div className="dropdown">
          <button
            className="btn dropdown-toggle dropdown-btn"
            type="button"
            data-toggle="dropdown"
          >
            View Type
          </button>
          <div className="dropdown-menu dropdown-menu-right">
            <span className="dropdown-item" onClick={() => setViewType(1)}>
              By Date (Point-in-Time Snapshot)
            </span>
            <span className="dropdown-item" onClick={() => setViewType(2)}>
              History by Stock (Time Series View)
            </span>
          </div>
        </div>
      </div>
      {viewType === 1 && (
        <div id="bydate-dropdown">
          <div className="left-col">
            <h5>Defaults</h5>
            <label>
              <input
                type="radio"
                className="defaults-radio"
                name="by-date-defaults"
                onClick={() => getApiData("all")}
              />
              Show All Transactions
            </label>
            <br />
            <label>
              <input
                type="radio"
                className="defaults-radio"
                name="by-date-defaults"
                onClick={() => getApiData("current")}
              />
              Show Current Transactions
            </label>
          </div>
          <div className="custom-date-box float-right">
            <DateRanger
              onStartChange={(value) => setStart(value)}
              onEndChange={(value) => setEnd(value)}
              onSubmit={() => getApiData("custom")}
            />
          </div>
        </div>
        // <div>
        //   <span onClick={() => getApiData()}>Show All Pos</span>
        // </div>
      )}
      <hr />
      {showTableNow && <TransactionHistoryTable data={tableData} />}
    </div>
  );
}

export default TransactionHistory;
