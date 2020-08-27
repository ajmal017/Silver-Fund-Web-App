import React, { useState } from "react";

import DateRanger from "../components/DateRanger";
// import TickerSelector from "../components/TickerSelector";
import GraphViewType from "../components/GraphViewType";
import RASubPanes from "./components/RASubPanes";
import RiskVTRadio from "./components/RiskVTRadio";
// Delete all below once actual data is working.
import currentTable from "./components/current-table.png";
import currentPlot from "./components/current-plot.png";
import searchBox from "./components/search-box.png";
import throughTimePlot from "./components/throughtime-plot.png";
import whatifTable from "./components/whatif-table.png";
import weightChanger from "./components/weight-changer.png";

export default function RiskAnalytics() {
  const [subPane, setSubPane] = useState("current");
  const [graphVT, setGraphVT] = useState(0);

  const currentGVTOptions = [
    { value: 0, label: "Bar Chart of All Style Exposures" },
    { value: 1, label: "Bar Chart for Top 10 Stocks by Risk" },
    { value: 2, label: "Bar Chart for Top 10 Industries by Risk" },
  ];

  const throughtimeGVTOptions = [
    { value: 0, label: "Ex-Ante vs. Realized Porfolio Risk" },
    { value: 1, label: "Ex-Ante vs. Realized Porfolio Benchmark Beta" },
    { value: 2, label: "Portfolio Exposures to Style Factors 1 Through K" },
    { value: 3, label: "Ex-Ante vs. Realized Risk by Stock(s)" },
    { value: 4, label: "Stock(s) Exposures to Style Factors 1 Through K" },
  ];

  function onSubPaneSwitch(newSubPane) {
    setSubPane(newSubPane);
  }

  return (
    <>
      <RASubPanes onSubPaneSwitch={onSubPaneSwitch} />
      <div className="content">
        {subPane === "current" ? (
          <>
            <GraphViewType
              dropdownOptions={currentGVTOptions}
              onSelection={(index) => setGraphVT(index.value)}
            />
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
              <GraphViewType
                dropdownOptions={throughtimeGVTOptions}
                onSelection={(index) => setGraphVT(index.value)}
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
