import React from "react";
import CPTableDB from "../components/CPTableDB";

function CurrentPositions() {
  return (
    <div className="cp-container">
      <div className="left-col">
        <h3>Current Positions</h3>
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
          >
            View Type
          </button>
          <div className="dropdown-menu">
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
        <CPTableDB />
      </div>
      <div className="positions-graph left-col">
        Graph of Current Positions (Based on View Type)
      </div>
    </div>
  );
}

export default CurrentPositions;
