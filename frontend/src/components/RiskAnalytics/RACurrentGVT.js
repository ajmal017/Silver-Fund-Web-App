import React from "react";

export default function RACurrentGVT(props) {
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
          Bar Chart of All Style Exposures
        </span>
        <span
          className="dropdown-item"
          onClick={() => props.onGraphVTChange(2)}
        >
          Bar Chart for Top 10 Stocks by Risk
        </span>
        <span
          className="dropdown-item"
          onClick={() => props.onGraphVTChange(3)}
        >
          Bar Chart for Top 10 Industries by Risk
        </span>
      </div>
    </div>
  );
}
