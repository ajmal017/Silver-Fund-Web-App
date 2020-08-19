import React from "react";

export default function PositionsGVT(props) {
  return (
    <div className="dropdown float-right">
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        id="dropdownMenuButton"
        data-toggle="dropdown"
      >
        Graph View Type
      </button>
      <div className="dropdown-menu dropdown-menu-right">
        <span
          className="dropdown-item"
          onClick={() => props.onGraphVTChange(1)}
        >
          $ Positions by Stock
        </span>
        <span
          className="dropdown-item"
          onClick={() => props.onGraphVTChange(2)}
        >
          % Positions by Stock
        </span>
        <span className="dropdown-item" href="http://www.fixme.com/">
          $ Positions vs. Benchmark by Stock
        </span>
        <span className="dropdown-item" href="http://www.fixme.com/">
          % Positions vs. Benchmark by Stock
        </span>
        <span className="dropdown-item" href="http://www.fixme.com/">
          $ Positions by Industry
        </span>
        <span className="dropdown-item" href="http://www.fixme.com/">
          % Positions by Industry
        </span>
        <span className="dropdown-item" href="http://www.fixme.com/">
          $ Positions vs. Benchmark by Industry
        </span>
        <span className="dropdown-item" href="http://www.fixme.com/">
          % Positions vs. Benchmark by Industry
        </span>
      </div>
    </div>
  );
}
