import React from "react";

import { getDateStr } from "../../helpers";

export default function DateRanger(props) {
  return (
    <div style={{ width: "250px", height: "79px" }} className="m-2">
      <label className="input-label">Start Date: </label>
      <input
        type="date"
        className="date-input"
        value={props.start}
        max={getDateStr(0)}
        onChange={(event) => props.onStartChange(event.target.value)}
      />
      <br />
      <br />
      <label className="input-label">End Date:</label>
      <input
        type="date"
        className="date-input"
        value={props.end}
        max={getDateStr(0)}
        onChange={(event) => props.onEndChange(event.target.value)}
      />
    </div>
  );
}
