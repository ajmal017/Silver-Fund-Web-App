import React from "react";

export default function PositionsGraphVT(props) {
  return (
    <div className="dropdown float-right">
      <button
        type="button"
        className="btn btn-secondary dropdown-toggle"
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
        <span
          className="dropdown-item"
          onClick={() => props.onGraphVTChange(3)}
        >
          $ Positions vs. Benchmark by Stock
        </span>
        <span
          className="dropdown-item"
          onClick={() => props.onGraphVTChange(4)}
        >
          % Positions vs. Benchmark by Stock
        </span>
        <span
          className="dropdown-item"
          onClick={() => props.onGraphVTChange(5)}
        >
          $ Positions by Industry
        </span>
        <span
          className="dropdown-item"
          onClick={() => props.onGraphVTChange(6)}
        >
          % Positions by Industry
        </span>
        <span
          className="dropdown-item"
          onClick={() => props.onGraphVTChange(7)}
        >
          $ Positions vs. Benchmark by Industry
        </span>
        <span
          className="dropdown-item"
          onClick={() => props.onGraphVTChange(8)}
        >
          % Positions vs. Benchmark by Industry
        </span>
      </div>
    </div>
  );
}
