import React from "react";
import TableDB from "../components/TableDB";
import testGraph from "../images/test-graph.png";

function CurrentPositions() {
  const url = "http://localhost:8000/current_positions/";

  return (
    <div className="pane-split-container">
      <div className="left-col">
        <div className="pane-top">
          <h3 className="pane-header">Current Positions</h3>
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
            >
              View Type
            </button>
            <div className="dropdown-menu dropdown-menu-right">
              <a className="dropdown-item" href="http://www.fixme.com/">
                $ Positions
              </a>
              <a className="dropdown-item" href="http://www.fixme.com/">
                % Positions
              </a>
              <a className="dropdown-item" href="http://www.fixme.com/">
                $ Positions vs. Benchmark
              </a>
              <a className="dropdown-item" href="http://www.fixme.com/">
                % Positions vs. Benchmark
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

export default CurrentPositions;
