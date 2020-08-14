import React, { useState } from "react";
import axios from "axios";

import TransactionHistoryTable from "../components/TransactionHistoryTable";

function TransactionHistory() {
  const [viewType, setViewType] = useState(0);
  const [showTableNow, setShowTableNow] = useState(false);
  const [tableData, setTableData] = useState([]);

  function getApiData() {
    setShowTableNow(true);
    setTableData([]);

    axios.defaults.baseURL = "http://localhost:8000/";
    axios.defaults.auth = {
      username: "su",
      password: "su",
    };

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
        <div>
          <span onClick={() => getApiData()}>Show All Pos</span>
        </div>
      )}
      {showTableNow && <TransactionHistoryTable data={tableData} />}
    </div>
  );
}

export default TransactionHistory;
