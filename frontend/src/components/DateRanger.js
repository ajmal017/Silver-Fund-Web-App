import React from "react";

function DateRanger(props) {
  return (
    <>
      <h5>Custom Date Range</h5>
      <label className="date-label">
        Start Date:
        <input
          type="date"
          className="date-input start-date"
          onChange={(event) => props.onStartChange(event.target.value)}
        />
      </label>
      <br />
      <label className="date-label">
        End Date:
        <input
          type="date"
          className="date-input end-date"
          onChange={(event) => props.onEndChange(event.target.value)}
        />
      </label>
      <br />
      <button className="btn date-btn" onClick={() => props.onSubmit()}>
        Show Positions in Date Range
      </button>
    </>
  );
}

export default DateRanger;
