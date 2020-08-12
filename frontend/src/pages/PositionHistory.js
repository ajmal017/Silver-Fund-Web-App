import React from "react";
import PositionsTable from "../components/PositionsTable";
import testGraph from "../images/test-graph.png";

function PositionHistory() {
  const url = "http://localhost:8000/all_positions/";

  function getDateToday() {
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

  return (
    <div className="pane-split-container">
      <div className="left-col">
        <div className="pane-top">
          <h3 className="pane-header">Position History</h3>
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
            >
              Primary View Type
            </button>
            <div className="dropdown-menu dropdown-menu-right">
              <a className="dropdown-item" href="http://www.fixme.com/">
                By Date (Point-in-Time Snapshot)
              </a>
              <a className="dropdown-item" href="http://www.fixme.com/">
                History by Stock (Time Series View)
              </a>
              <a className="dropdown-item" href="http://www.fixme.com/">
                History by Industry (Time Series View)
              </a>
            </div>
          </div>
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
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
        <span className="dropdown-item" onClick={() => this.getDateToday()}>
          Get Today's Date
        </span>
        {/* <PositionsTable url={url} /> */}
        <PositionsTable end={"2020-08-12"} />
      </div>
      <div className="right-col">
        <img src={testGraph} alt="/" className="positions-graph" />
      </div>
    </div>
  );
}

export default PositionHistory;
