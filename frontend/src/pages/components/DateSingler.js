import React from "react";

import { getDateStr } from "../../helpers";

export default function DateSingler(props) {
  return (
    <>
      <label style={{ width: "200px" }}>
        Date:
        <input
          type="date"
          className="date-input one-date"
          value={props.date}
          max={getDateStr(0)}
          onChange={(event) => {
            props.onDateChange(event.target.value);
          }}
        />
      </label>
    </>
  );
}
