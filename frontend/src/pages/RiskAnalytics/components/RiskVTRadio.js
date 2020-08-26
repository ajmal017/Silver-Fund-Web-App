import React from "react";

export default function RiskVTRadio() {
  return (
    <div className="radio-box">
      <h4 className="pl-2">Risk View Type</h4>
      <div className="d-inline p-4">
        <label className="radio-label">
          <input
            type="radio"
            name="risk-vt"
            className="radio-input d-block mx-auto w-100 "
          />
          Total
        </label>
      </div>
      <div className="d-inline p-2">
        <label className="radio-label">
          <input
            type="radio"
            name="risk-vt"
            className="radio-input d-block mx-auto w-100 "
          />
          Active
        </label>
      </div>
    </div>
  );
}
