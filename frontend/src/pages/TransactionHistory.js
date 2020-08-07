import React from "react";
import TableDB from "../components/TableDB";

function TransactionHistory() {
  const url = "http://localhost:8000/all_positions/"; // FIXME

  return (
    <div>
      <div className="pane-top">
        <h3 className="pane-header">Transaction History</h3>
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
          >
            View Type
          </button>
          <div className="dropdown-menu dropdown-menu-right dropdown-menu-right">
            <a className="dropdown-item" href="http://www.fixme.com/">
              By Date (Point-in-Time Snapshot)
            </a>
            <a className="dropdown-item" href="http://www.fixme.com/">
              History by Stock (Time Series View)
            </a>
          </div>
        </div>
      </div>
      <TableDB url={url} />
    </div>
  );
}

export default TransactionHistory;
