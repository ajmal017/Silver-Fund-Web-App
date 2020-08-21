import React, { useState } from "react";

import RASubPanes from "../components/RiskAnalytics/RASubPanes";
import RiskVTRadio from "../components/RiskAnalytics/RiskVTRadio";
import RACurrentGVT from "../components/RiskAnalytics/RACurrentGVT";
import RAThroughTimeGVT from "../components/RiskAnalytics/RAThroughTimeGVT";
import DateRanger from "../components/DateRanger";
// import TickerSelector from "../components/TickerSelector";

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
            <hr />
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
            <div className="d-inline-block">
              <RiskVTRadio />
            </div>
            <div className="small-box d-inline-block ml-4">
              <DateRanger />
            </div>
            <div className="small-box d-inline-block ml-4">
              {/* FIXME - Pass through data to ticker selector*/}
              {/* <TickerSelector apiData={} /> */}
              <img src={searchBox} alt="" style={{ width: "inherit" }} />
            </div>
            <div className="d-inline-block float-right">
              <RAThroughTimeGVT
                onGraphVTChange={(value) => setGraphVT(value)}
              />
            </div>
            <hr />
            <img src={throughTimePlot} alt="" style={{ width: "90%" }} />
          </>
        ) : (
          subPane === "whatif" && (
            <>
              <RiskVTRadio />
              <div className="pane-split-container">
                <img
                  src={whatifTable}
                  alt=""
                  className="left-col"
                  style={{ width: "500px" }}
                />
                <div className="right-col">
                  <div className="small-box d-inline-block ml-4">
                    {/* FIXME - Pass through data to ticker selector*/}
                    {/* <TickerSelector apiData={} /> */}
                    <img src={searchBox} alt="" style={{ width: "inherit" }} />
                  </div>
                  <br />
                  <br />
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
