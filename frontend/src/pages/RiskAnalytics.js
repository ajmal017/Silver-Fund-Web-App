import React, { useState } from "react";

import RASubPanes from "../components/RiskAnalytics/RASubPanes";
import RiskVTRadio from "../components/RiskAnalytics/RiskVTRadio";

export default function RiskAnalytics() {
  const [subPane, setSubPane] = useState("current");

  function onSubPaneSwitch(newSubPane) {
    setSubPane(newSubPane);
  }

  return (
    <>
      <RASubPanes onSubPaneSwitch={onSubPaneSwitch} />
      <div className="content">
        <RiskVTRadio />
        {subPane === "current" ? (
          <div>
            <h1>fix</h1>
            <p>{subPane}</p>
          </div>
        ) : subPane === "throughtime" ? (
          <div>
            <h1>fix</h1>
            <p>{subPane}</p>
          </div>
        ) : (
          subPane === "whatif" && (
            <div>
              <h1>fix</h1>
              <p>{subPane}</p>
            </div>
          )
        )}
      </div>
    </>
  );
}
