import React, { useState } from "react";

import RASubPanes from "../components/RiskAnalytics/RASubPanes";
import RiskVTRadio from "../components/RiskAnalytics/RiskVTRadio";
import RACurrentGVT from "../components/RiskAnalytics/RACurrentGVT";
import RAThroughTimeGVT from "../components/RiskAnalytics/RAThroughTimeGVT";
import DateRanger from "../components/DateRanger";
import TickerSelector from "../components/TickerSelector";

// Delete all below once actual data is working.
import currentTable from "../components/RiskAnalytics/tempPics/current-table.png";
import currentPlot from "../components/RiskAnalytics/tempPics/current-plot.png";
import searchBox from "../components/RiskAnalytics/tempPics/search-box.png";
import throughTimePlot from "../components/RiskAnalytics/tempPics/throughtime-plot.png";
import whatifTable from "../components/RiskAnalytics/tempPics/whatif-table.png";
import weightChanger from "../components/RiskAnalytics/tempPics/weight-changer.png";

export default function RiskAnalytics() {
  const [subPane, setSubPane] = useState("current");
  const [graphVT, setGraphVT] = useState(1);

  function onSubPaneSwitch(newSubPane) {
    setSubPane(newSubPane);
  }

  return (
    <>
      <RASubPanes onSubPaneSwitch={onSubPaneSwitch} />
      <div className="content">
        {subPane === "current" ? (
          <>
            <RACurrentGVT onGraphVTChange={(value) => setGraphVT(value)} />
            <RiskVTRadio />
            <div className="pane-split-container">
              <img
                src={currentTable}
                alt=""
                className="left-col"
                style={{ width: "500px" }}
              />
              <img
                src={currentPlot}
                alt=""
                className="right-col"
                style={{ width: "500px" }}
              />
            </div>
          </>
        ) : subPane === "throughtime" ? (
          <>
            <RAThroughTimeGVT onGraphVTChange={(value) => setGraphVT(value)} />
            <RiskVTRadio />
            {/* FIXME - Pass props for start and end date */}
            <DateRanger />
            <div className="small-box d-inline-block ml-4">
              {/* FIXME - Pass through data to ticker selector*/}
              {/* <TickerSelector tableData={} /> */}
              <img src={searchBox} alt="" style={{ width: "inherit" }} />
            </div>
            <img src={throughTimePlot} alt="" style={{ width: "90%" }} />
          </>
        ) : (
          subPane === "whatif" && (
            <>
              <div className="pane-split-container">
                <RiskVTRadio />
                <img
                  src={whatifTable}
                  alt=""
                  className="left-col"
                  style={{ width: "500px" }}
                />
                <div className="right-col">
                  <div className="small-box d-inline-block ml-4">
                    {/* FIXME - Pass through data to ticker selector*/}
                    {/* <TickerSelector tableData={} /> */}
                    <img src={searchBox} alt="" style={{ width: "inherit" }} />
                  </div>
                  <img src={weightChanger} alt="" style={{ width: "500px" }} />
                </div>
              </div>
            </>
          )
        )}
      </div>
    </>
  );
}
