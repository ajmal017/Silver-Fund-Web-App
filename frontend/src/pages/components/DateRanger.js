import React from "react";

import { getDateStr } from "../../helpers";

export default function DateRanger(props) {
  return (
    <>
      <label className="date-label">
        Start Date:
        <input
          type="date"
          className="date-input start-date"
          value={props.start}
          max={getDateStr(0)}
          onChange={(event) => props.onStartChange(event.target.value)}
        />
      </label>
      <label className="date-label">
        End Date:
        <input
          type="date"
          className="date-input end-date"
          value={props.end}
          max={getDateStr(0)}
          onChange={(event) => props.onEndChange(event.target.value)}
        />
      </label>
    </>
  );
}
