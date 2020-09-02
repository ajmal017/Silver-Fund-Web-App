import React from "react";
import Select from "react-select";

import { customTheme } from "../../constants";

export default function GraphViewType(props) {
  return (
    <div style={{ width: "440px" }} className="m-1 float-right">
      <label className="input-label pt-2">Graph View Type:</label>
      <div
        style={{
          width: "300px",
          float: "right",
        }}
      >
        <Select
          theme={customTheme}
          options={props.dropdownOptions}
          defaultValue={props.dropdownOptions[0]}
          onChange={props.onSelection}
          maxMenuHeight="8"
        />
      </div>
    </div>
  );
}
