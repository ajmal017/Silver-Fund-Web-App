import React from "react";

export default function RAThroughTimeGVT(props) {
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
          Ex-Ante vs. Realized Porfolio Risk
        </span>
        <span
          className="dropdown-item"
          onClick={() => props.onGraphVTChange(2)}
        >
          Ex-Ante vs. Realized Porfolio Benchmark Beta
        </span>
        <span
          className="dropdown-item"
          onClick={() => props.onGraphVTChange(3)}
        >
          Portfolio Exposures to Style Factors 1 Through K
        </span>
        <span
          className="dropdown-item"
          onClick={() => props.onGraphVTChange(4)}
        >
          Ex-Ante vs. Realized Risk by Stock(s)
        </span>
        <span
          className="dropdown-item"
          onClick={() => props.onGraphVTChange(5)}
        >
          Stock(s) Exposures to Style Factors 1 Through K
        </span>
      </div>
    </div>
  );
}
