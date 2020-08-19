import React, { useState } from "react";
import axios from "axios";

import PositionsSubPanes from "../components/Positions/PositionsSubPanes";
import { getDateToday, convertToPercentage } from "../components/Helpers";
import DateSingler from "../components/DateSingler";
import DateRanger from "../components/DateRanger";
import TickerSelector from "../components/TickerSelector";
import PositionsTable from "../components/Positions/PositionsTable";
import PositionsGraph from "../components/Positions/PositionsGraph";
import PositionsGVT from "../components/Positions/PositionsGVT";

export default function Positions() {
  const [subPane, setSubPane] = useState("none");
  const [graphVT, setGraphVT] = useState(1);
  const [showTableNow, setShowTableNow] = useState(false);
  const [showGraphNow, setShowGraphNow] = useState(false);

  const [tableData, setTableData] = useState([]);
  const [tickerData, setTickerData] = useState([]);
  const [weightsData, setWeightsData] = useState([]);
  const [positionsData, setPositionsData] = useState([]);

  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");

  function getApiData(callType) {
    setShowTableNow(true);
    setShowGraphNow(true);
    setTableData([]);
    setTickerData([]);

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
            showTableNow(false);
            showGraphNow(false);
            alert("No positions exist.");
          }
          setTableData(response.data);
          setTickerData(response.data.map(({ ticker }) => ticker));
          // setNumHoldingsData(s
          //   response.data.map(({ num_of_shares }) => num_of_shares)
          // );

          console.log("TickerData", tickerData);
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
            setShowTableNow(false);
            setShowGraphNow(false);
            alert("No current positions exist.");
          }
          setTableData(response.data);
          setTickerData(response.data.map(({ ticker }) => ticker));
          setPositionsData(
            response.data.map(({ position_value }) => position_value)
          );
          setWeightsData(
            convertToPercentage(
              response.data.map(({ position_value }) => position_value)
            )
          );

          console.log("Tdata", positionsData);
          // console.log("tableData: ", tableData);
        })
        .catch((error) => {
          console.log(error);
          alert("Error: Failed to load current positions.", error);
        });
    }

    if (callType === "custom") {
      console.log("start: ", start, " end: ", end);
      if (start === "" || end === "") {
        setShowTableNow(false);
        setShowGraphNow(false);
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
            setShowTableNow(false);
            setShowGraphNow(false);
            alert("No positions exist in that date range.");
          }
          setTableData(response.data);
          setTickerData(response.data.map(({ ticker }) => ticker));
          setPositionsData(
            response.data.map(({ position_value }) => position_value)
          );
          setWeightsData(
            convertToPercentage(
              response.data.map(({ position_value }) => position_value)
            )
          );
          console.log("tableData: ", tableData);
        })
        .catch((error) => {
          console.log(error);
          alert("Error: Failed to load positions for that date range.", error);
        });
    }
  }

  function onSubPaneSwitch(newSubPane) {
    if (newSubPane === "snapshot") {
      getApiData("current");
    }
    if (newSubPane === "historybystock") {
      getApiData("all");
    }
    setSubPane(newSubPane);
  }

  return (
    <>
      <PositionsSubPanes onSubPaneSwitch={onSubPaneSwitch} />
      <div className="content pane-split-container pt-4">
        <div className="left-col">
          {subPane === "none" && (
            <p>Select a positions view from above to begin.</p>
          )}
          {subPane === "snapshot" && (
            <>
              <div className="small-box d-inline-block ml-4">
                <DateSingler
                  onDateChange={(value) => {
                    setStart(value);
                    setEnd(value);
                  }}
                  onSubmit={() => getApiData("custom")}
                />
              </div>
              <div className="small-box d-inline-block ml-4">
                <TickerSelector tableData={tableData} />
              </div>
            </>
          )}
          {subPane === "historybystock" && (
            <>
              <div className="small-box d-inline-block ml-4">
                <DateRanger
                  onStartChange={(value) => setStart(value)}
                  onEndChange={(value) => setEnd(value)}
                  onSubmit={() => getApiData("custom")}
                />
              </div>
              <div className="small-box d-inline-block ml-4">
                <TickerSelector tableData={tableData} />
              </div>
            </>
          )}
          <hr />
          {showTableNow && <PositionsTable tableData={tableData} />}
        </div>
        <div className="right-col chart">
          {subPane === "snapshot" && (
            <PositionsGVT onGraphVTChange={(value) => setGraphVT(value)} />
          )}
          {showTableNow && graphVT === 1 && (
            <PositionsGraph
              tickerData={tickerData}
              valuesData={positionsData}
            />
          )}
          {showTableNow && graphVT === 2 && (
            <PositionsGraph tickerData={tickerData} valuesData={weightsData} />
          )}
        </div>
      </div>
    </>
  );
}
