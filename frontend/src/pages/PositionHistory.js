import React from "react";
import TableDB from "../components/TableDB";
import testGraph from "../images/test-graph.png";

function PositionHistory() {
  const url = "http://localhost:8000/all_positions/";

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
        <TableDB url={url} />
      </div>
      <div className="right-col">
        <img src={testGraph} alt="/" className="positions-graph" />
      </div>
    </div>
  );
}

export default PositionHistory;
