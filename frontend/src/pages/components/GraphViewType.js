import React from "react";
import Select from "react-select";

export default function GraphViewType(props) {
  function customTheme(theme) {
    return {
      ...theme,
      colors: {
        ...theme.colors,
        primary25: "#cfcfcf",
        primary: "#002e5d",
      },
    };
  }

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
