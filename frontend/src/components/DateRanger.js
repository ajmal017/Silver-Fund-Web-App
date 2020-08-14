import React from "react";

function DateRanger(props) {
  return (
    <div className="custom-date-box">
      <h5>Custom Date Range</h5>
      <label className="date-label">
        Start Date:
        <input
          type="date"
          id="start-date"
          onChange={(event) => props.onStartChange(event.target.value)}
        />
      </label>
      <br />
      <label className="date-label">
        End Date:
        <input
          type="date"
          id="end-date"
          onChange={(event) => props.onEndChange(event.target.value)}
        />
      </label>
      <br />
      <button
        className="btn daterange-btn"
        onClick={() => props.onSubmit(true)}
      >
        Show Positions in Date Range
      </button>
    </div>
  );
}

export default DateRanger;
