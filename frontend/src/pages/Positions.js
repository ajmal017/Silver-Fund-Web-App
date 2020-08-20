import React, { useState } from "react";
import axios from "axios";

import PositionsSubPanes from "../components/Positions/PositionsSubPanes";
import {
  getDateToday,
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
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");

  function updateTableData(newData){
    setTableData(newData)
  }

  function getApiData(callType) {
    setShowTable(true);
    setTableData([]);

    axios.defaults.baseURL = "http://localhost:8000/";
    // axios.defaults.auth = {
    //   username: "su",
    //   password: "su",
    // };

    if (callType === "all") {
      axios
        .get("all_positions/")
        .then((response) => {
          if (response.data.length === 0) {
            showTable(false);
            alert("No positions exist.");
          }
          setTableData(response.data);
        })
        .catch((error) => {
          console.log(error);
          alert("Error: Failed to load all positions.", error);
        });
    }

    if (callType === "current") {
      axios
        .get("api/positions/filter/date/", {
          params: {
            start: getDateToday(),
            end: getDateToday(),
          },
        })
        .then((response) => {
          if (response.data.length === 0) {
            setShowTable(false);
            alert("No current positions exist.");
          }
          setTableData(response.data);
        })
        .catch((error) => {
          console.log(error);
          alert("Error: Failed to load current positions.", error);
        });
    }

    if (callType === "custom") {
      console.log("start: ", start, " end: ", end);
      if (start === "" || end === "") {
        setShowTable(false);
        return alert("Please select both a start date and end date.");
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
            alert("No positions exist in that date range.");
          }
          setTableData(response.data);
          console.log("Table Data", tableData);
          console.log("DataSets", formatTimeSeries(tableData, start, end));
        })
        .catch((error) => {
          console.log(error);
          alert("Error: Failed to load positions for that date range.", error);
        });
    }
  }

  function onSubPaneSwitch(newSubPane) {
    if (newSubPane === "snapshot") {
      const today = getDateToday();
      setStart(today);
      setEnd(today);
      getApiData("current");
      setShowTimeSeries(false);
    }
    if (newSubPane === "historybystock") {
      setStart("2020-08-13");
      setEnd("2020-08-20");
      getApiData("all");
      setShowTimeSeries(true);
    }
    setSubPane(newSubPane);
  }

  useEffect(() => {
    getApiData("current");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
                  onDateChange={(value) => {
                    setStart(value);
                    setEnd(value);
                  }}
                  onSubmit={() => getApiData("custom")}
                />
              </div>
              <div className="small-box d-inline-block ml-4">
                {subPane === "historybystock" && (<TickerSelector 
                  tableData={tableData} 
                  onTableChange={(value) => {
                    setTableData(value);
                  }} 
                />)}
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
                onStartChange={(value) => setStart(value)}
                onEndChange={(value) => setEnd(value)}
                onSubmit={() => getApiData("custom")}
              />
            </div>
            <div className="small-box d-inline-block ml-4">
              <TickerSelector tableData={tableData} />
            </div>
            <hr />
            {showTimeSeries && (
              <TimeSeriesChart data={formatTimeSeries(tableData, start, end)} />
            )}
            <br />
            {showTable && <PositionsTable tableData={tableData} />}
          </>
        )}
      </div>
    </>
  );
}
