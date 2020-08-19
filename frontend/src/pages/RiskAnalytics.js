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
        <h1>Risk Analytics pane here</h1>
        {subPane && <h1>{subPane}</h1>}
      </div>
    </>
  );
}
