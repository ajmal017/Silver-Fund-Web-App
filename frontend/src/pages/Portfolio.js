import React, { useState } from "react";

import PortfolioSubPanes from "../components/Portfolio/PortfolioSubPanes";

// Delete all below once actual data is working.
import constructionSheet from "../components/Portfolio/tempPics/construction-sheet.png";
import attributionBarChart from "../components/Portfolio/tempPics/attribution-bar-chart.png";

export default function Portfolio() {
  const [subPane, setSubPane] = useState("construction");

  function onSubPaneSwitch(newSubPane) {
    setSubPane(newSubPane);
  }

  return (
    <>
      <PortfolioSubPanes onSubPaneSwitch={onSubPaneSwitch} />
      <div className="content">
        {subPane === "construction" ? (
          <img src={constructionSheet} alt="" style={{ width: "90%" }} />
        ) : (
          subPane === "attribution" && (
            <img src={attributionBarChart} alt="" style={{ width: "90%" }} />
          )
        )}
      </div>
    </>
  );
}
