import React from "react";

import { getDateStr } from "../../helpers";

export default function DateSingler(props) {
  return (
    <div style={{ width: "200px", height: "30px" }} className="m-2 mb-4">
      <label className="input-label">Date:</label>
      <input
        type="date"
        className="date-input one-date"
        value={props.date}
        max={getDateStr(0)}
        onChange={(event) => {
          props.onDateChange(event.target.value);
        }}
      />
    </div>
  );
}
