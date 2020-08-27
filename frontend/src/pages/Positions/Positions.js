import React, { useState, useEffect } from "react";
import axios from "axios";

import {
  getDateStr,
  getDateStr3MonthsBack,
  convertToPercentage,
  formatTimeSeries,
} from "../../helpers";
import ErrorMsg from "../components/ErrorMsg";
import TickerSelector from "../components/TickerSelector";
import DateSingler from "../components/DateSingler";
import DateRanger from "../components/DateRanger";
import GraphViewType from "../components/GraphViewType";
import PositionsSubPanes from "./components/PositionsSubPanes";
import PositionsTable from "./components/PositionsTable";
import SnapShotChart from "./components/SnapShotChart";
import TimeSeriesChart from "./components/TimeSeriesChart";

export default function Positions() {
  const [subPane, setSubPane] = useState("snapshot");
  const [errorMsg, setErrorMsg] = useState(null);
  const [graphVT, setGraphVT] = useState(0);
  const [start, setStart] = useState(getDateStr(-1));
  const [end, setEnd] = useState(getDateStr(-1));
  const [apiData, setApiData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [showTable, setShowTable] = useState(false);
  const [showTimeSeries, setShowTimeSeries] = useState(false);

  const positionsGVTOptions = [
    { value: 0, label: "$ Positions by Stock" },
    { value: 1, label: "% Positions by Stock" },
    // FIXME - Add these back once we're able to implement them.
    // { value: 2, label: "$ Positions vs. Benchmark by Stock" },
    // { value: 3, label: "% Positions vs. Benchmark by Stock" },
    // { value: 4, label: "$ Positions by Industry" },
    // { value: 5, label: "% Positions by Industry" },
    // { value: 6, label: "$ Positions vs. Benchmark by Industry" },
    // { value: 7, label: "% Positions vs. Benchmark by Industry" },
  ];

  function getApiData() {
    setShowTable(true);
    setShowTimeSeries(true);
    setApiData([]);
    setErrorMsg(null);

    if (end < start) {
      setShowTable(false);
      setShowTimeSeries(false);
      setErrorMsg("Warning: Start date isn't before end date.");
      return;
    }

    axios.defaults.baseURL = "http://localhost:8000/";
    axios
      .get("api/positions/filter/date/", {
        params: {
          start: start,
          end: end,
        },
      })
      .then((response) => {
        if (response.data.length === 0) {
          setShowTable(false);
          setShowTimeSeries(false);
          setErrorMsg(
            "No positions exist on the date(s) selected.  Try a different selection."
          );
        }
        setApiData(response.data);
        setFilterData(response.data);
      })
      .catch((error) => {
        console.log(error);
        setShowTable(false);
        setShowTimeSeries(false);
        setErrorMsg(
          "Uh oh! Something went wrong on our end (failed to load positions data).  If this error persists, contact support."
        );
      });
  }

  function onSubPaneSwitch(newSubPane) {
    if (newSubPane === "snapshot") {
      const yesterday = getDateStr(-1);
      setStart(yesterday);
      setEnd(yesterday);
      setShowTimeSeries(false);
    }
    if (newSubPane === "historybystock") {
      const threeMonthsAgo = getDateStr3MonthsBack();
      setStart(threeMonthsAgo);
      const yesterday = getDateStr(-1);
      setEnd(yesterday);
      setShowTimeSeries(true);
    }
    setSubPane(newSubPane);
  }

  /* Calls the API to fetch data at first, whenever start or end date change. */
  useEffect(() => {
    getApiData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [start, end]);

  return (
    <>
      <PositionsSubPanes onSubPaneSwitch={onSubPaneSwitch} />
      <ErrorMsg errorMsg={errorMsg} />
      <div className="content">
        {subPane === "snapshot" && (
          <>
            <div className="d-inline-block">
              <DateSingler
                date={start}
                onDateChange={(value) => {
                  setStart(value);
                  setEnd(value);
                }}
              />
            </div>
            <div className="float-right">
              <GraphViewType
                dropdownOptions={positionsGVTOptions}
                onSelection={(index) => setGraphVT(index.value)}
              />
            </div>
            <hr />
            <div className="pane-split-container">
              <div className="left-col">
                {showTable && <PositionsTable apiData={apiData} />}
                <br />
              </div>
              <div className="right-col">
                {showTable && graphVT === 0 && (
                  <SnapShotChart
                    tickerData={apiData.map(({ ticker }) => ticker)}
                    valuesData={apiData.map(
                      ({ position_value }) => position_value
                    )}
                    x_label={"Position Value (USD)"}
                    tool_tip_label={"Value"}
                    percent={""}
                    dollar={"$"}
                    buffer={5000}
                  />
                )}
                {showTable && graphVT === 1 && (
                  <SnapShotChart
                    tickerData={apiData.map(({ ticker }) => ticker)}
                    valuesData={convertToPercentage(
                      apiData.map(({ position_value }) => position_value)
                    )}
                    x_label={"Percent of Portfolio"}
                    tool_tip_label={"Percent"}
                    percent={"%"}
                    dollar={""}
                    buffer={10}
                  />
                )}
              </div>
            </div>
          </>
        )}
        {subPane === "historybystock" && (
          <>
            <div className="d-inline-block">
              <DateRanger
                start={start}
                end={end}
                onStartChange={(value) => setStart(value)}
                onEndChange={(value) => setEnd(value)}
              />
            </div>
            <div className="ticker-selector d-inline-block ml-4">
              <TickerSelector
                apiData={apiData}
                onSubmit={(newValue) => setFilterData(newValue)}
              />
            </div>
            <GraphViewType
              dropdownOptions={positionsGVTOptions}
              onSelection={(index) => setGraphVT(index.value)}
            />
            <hr />
            <div style={{ backgroundColor: "#ffffff" }}>
              {showTimeSeries && graphVT === 0 && (
                <TimeSeriesChart
                  data={formatTimeSeries(filterData, start, end, false)}
                  percent={""}
                  dollar={"$"}
                />
              )}
              {showTimeSeries && graphVT === 1 && (
                <TimeSeriesChart
                  data={formatTimeSeries(filterData, start, end, true)}
                  percent={"%"}
                  dollar={""}
                />
              )}
            </div>

            <br />
            {showTable && <PositionsTable apiData={filterData} />}
          </>
        )}
      </div>
    </>
  );
}
