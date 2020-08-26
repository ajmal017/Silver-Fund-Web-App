import React from "react";

import performanceBarChart from "./components/performance-bar-chart.png";

export default function Performance() {
  return (
    <div className="content">
      <img src={performanceBarChart} alt="" style={{ width: "90%" }} />
    </div>
  );
}
