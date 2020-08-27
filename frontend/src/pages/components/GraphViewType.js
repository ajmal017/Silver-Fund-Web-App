import React from "react";
import Select from "react-select";

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
          options={props.dropdownOptions}
          defaultValue={props.dropdownOptions[0]}
          onChange={props.onSelection}
        />
      </div>
    </div>
  );
}
