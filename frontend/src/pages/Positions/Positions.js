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
import PositionsSubPanes from "./components/PositionsSubPanes";
import PositionsTable from "./components/PositionsTable";
import SnapShotChart from "./components/SnapShotChart";
import TimeSeriesChart from "./components/TimeSeriesChart";
import PositionsGVT from "./components/PositionsGVT";

export default function Positions() {
  const [subPane, setSubPane] = useState("snapshot");
  const [errorMsg, setErrorMsg] = useState(null);
  const [graphVT, setGraphVT] = useState(1);
  const [start, setStart] = useState(getDateStr(-1));
  const [end, setEnd] = useState(getDateStr(-1));
  const [apiData, setApiData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [showTable, setShowTable] = useState(false);
  const [showTimeSeries, setShowTimeSeries] = useState(false);

  function getApiData() {
    setShowTable(true);
    setShowTimeSeries(true);
    setApiData([]);
    setErrorMsg(null);

    console.log("start: ", start, " end: ", end);
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
        console.log("apiData: ", apiData);
        console.log("DataSets: ", formatTimeSeries(apiData, start, end));
      })
      .catch((error) => {
        console.log(error);
        setShowTable(false);
        setShowTimeSeries(false);
        setErrorMsg("Uh oh! Failed to load positions data.  (" + error + ")");
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
      <div className="content pt-4">
        {subPane === "snapshot" && (
          <div className="pane-split-container">
            <div className="left-col">
              <div className="small-box d-inline-block ml-4">
                <DateSingler
                  itemType="Positions"
                  date={start}
                  onDateChange={(value) => {
                    setStart(value);
                    setEnd(value);
                  }}
                />
              </div>
              <hr />
              {showTable && <PositionsTable apiData={apiData} />}
              <br />
            </div>
            <div className="right-col">
              <PositionsGVT onGraphVTChange={(value) => setGraphVT(value)} />
              {showTable && graphVT === 1 && (
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
              {showTable && graphVT === 2 && (
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
        )}
        {subPane === "historybystock" && (
          <>
            <div className="small-box d-inline-block ml-4">
              <DateRanger
                start={start}
                end={end}
                onStartChange={(value) => setStart(value)}
                onEndChange={(value) => setEnd(value)}
              />
            </div>
            <div className="small-box d-inline-block ml-4">
              <TickerSelector
                apiData={apiData}
                onSubmit={(newValue) => setFilterData(newValue)}
              />
            </div>
            <PositionsGVT onGraphVTChange={(value) => setGraphVT(value)} />
            <hr />
            <div style={{ backgroundColor: "#FFFF" }}>
              {showTimeSeries && graphVT === 1 && (
                <TimeSeriesChart
                  data={formatTimeSeries(filterData, start, end, false)}
                  percent={""}
                  dollar={"$"}
                />
              )}
              {showTimeSeries && graphVT === 2 && (
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
