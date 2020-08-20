import React, { useState } from "react";
import axios from "axios";

import PositionsSubPanes from "../components/Positions/PositionsSubPanes";
import {
  getDateStr,
  convertToPercentage,
  formatTimeSeries,
} from "../components/Helpers";
import DateSingler from "../components/DateSingler";
import DateRanger from "../components/DateRanger";
import TickerSelector from "../components/TickerSelector";
import PositionsTable from "../components/Positions/PositionsTable";
import SnapShotChart from "../components/Positions/SnapShotChart";
import TimeSeriesChart from "../components/Positions/TimeSeriesChart";
import PositionsGVT from "../components/Positions/PositionsGVT";
import { useEffect } from "react";

export default function Positions() {
  const [subPane, setSubPane] = useState("snapshot");
  const [graphVT, setGraphVT] = useState(1);
  const [showTable, setShowTable] = useState(false);
  const [showTimeSeries, setShowTimeSeries] = useState(false);
  const [tableData, setTableData] = useState([]);
  const [start, setStart] = useState(getDateStr(-1));
  const [end, setEnd] = useState(getDateStr(-1));

  function getApiData() {
    setShowTable(true);
    setTableData([]);

    axios.defaults.baseURL = "http://localhost:8000/";
    // FIXME - Update credentials once auth is working.
    // axios.defaults.auth = {
    //   username: "su",
    //   password: "su",
    // };

    console.log("start: ", start, " end: ", end);
    if (end < start) {
      setShowTable(false);
      setShowTimeSeries(false);
      return;
    }

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
          alert(
            "No positions exist on the date(s) selected.  Try a different selection."
          );
        }
        setTableData(response.data);
        console.log("Table Data: ", tableData);
        console.log("DataSets: ", formatTimeSeries(tableData, start, end));
      })
      .catch((error) => {
        console.log(error);
        alert("Error: Failed to load positions data.", error);
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
      const weekFromYesterday = getDateStr(-8);
      setStart(weekFromYesterday);
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
              {showTable && <PositionsTable tableData={tableData} />}
            </div>
            <div className="right-col">
              <PositionsGVT onGraphVTChange={(value) => setGraphVT(value)} />
              {showTable && graphVT === 1 && (
                <SnapShotChart
                  tickerData={tableData.map(({ ticker }) => ticker)}
                  valuesData={tableData.map(
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
                  tickerData={tableData.map(({ ticker }) => ticker)}
                  valuesData={convertToPercentage(
                    tableData.map(({ position_value }) => position_value)
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
                itemType="Positions"
                start={start}
                end={end}
                onStartChange={(value) => setStart(value)}
                onEndChange={(value) => setEnd(value)}
              />
            </div>
            <div className="small-box d-inline-block ml-4">
              <TickerSelector tableData={tableData} />
            </div>
            <hr />
            <div style={{ backgroundColor: "#FFFF" }}>
              {showTimeSeries && (
                <TimeSeriesChart
                  data={formatTimeSeries(tableData, start, end)}
                />
              )}
            </div>

            <br />
            {showTable && <PositionsTable tableData={tableData} />}
          </>
        )}
      </div>
    </>
  );
}
