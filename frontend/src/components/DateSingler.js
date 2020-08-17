import React from "react";

import { getDateToday } from "./Helpers";

function DateSingler(props) {
  return (
    <>
      <label className="date-label">
        Date in Time:
        <input
          type="date"
          className="date-input one-date"
          defaultValue={getDateToday()}
          onChange={(event) => {
            props.onDateChange(event.target.value);
          }}
        />
      </label>
      <button className="btn date-btn" onClick={() => props.onSubmit()}>
        Show Positions on Date
      </button>
    </>
  );
}

export default DateSingler;
