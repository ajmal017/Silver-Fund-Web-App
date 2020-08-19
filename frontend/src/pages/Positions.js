import React, { useState } from "react";
import axios from "axios";

import DateRanger from "../components/DateRanger";
import DateSingler from "../components/DateSingler";
import PositionsTable from "../components/PositionsTable";
import PositionsGraph from "../components/PositionsGraph";
import TickerSelector from "../components/TickerSelector";
import { getDateToday } from "../components/Helpers";
import { convertToPrecentage } from "../components/Helpers";

export default function Positions() {
  const [primaryVT, setPrimaryVT] = useState(0);
  const [secondaryVT, setSecondaryVT] = useState(1);
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
            convertToPrecentage(
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
            convertToPrecentage(
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

  return (
    <div className="content pane-split-container">
      <div className="left-col">
        <div className="pane-top">
          <h3 className="pane-header">Positions</h3>
          <div className="dropdown">
            <button
              className="btn dropdown-toggle dropdown-btn"
              type="button"
              data-toggle="dropdown"
            >
              Primary View Type
            </button>
            <div className="dropdown-menu dropdown-menu-right">
              <span
                className="dropdown-item"
                onClick={() => {
                  getApiData("current");
                  setPrimaryVT(1);
                }}
              >
                Snapshot (Bar Chart View)
              </span>
              <span
                className="dropdown-item"
                onClick={() => {
                  getApiData("all");
                  setPrimaryVT(2);
                }}
              >
                History by Stock (Time Series View)
              </span>
              <span className="dropdown-item" onClick={() => setPrimaryVT(3)}>
                History by Industry (Time Series View)
              </span>
            </div>
          </div>
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
            >
              Secondary View Type
            </button>
            <div className="dropdown-menu dropdown-menu-right">
              <span className="dropdown-item" onClick={() => setSecondaryVT(1)}>
                $ Positions by Stock
              </span>
              <span className="dropdown-item" onClick={() => setSecondaryVT(2)}>
                % Positions by Stock
              </span>
              <span className="dropdown-item" href="http://www.fixme.com/">
                $ Positions vs. Benchmark by Stock
              </span>
              <span className="dropdown-item" href="http://www.fixme.com/">
                % Positions vs. Benchmark by Stock
              </span>
              <span className="dropdown-item" href="http://www.fixme.com/">
                $ Positions by Industry
              </span>
              <span className="dropdown-item" href="http://www.fixme.com/">
                % Positions by Industry
              </span>
              <span className="dropdown-item" href="http://www.fixme.com/">
                $ Positions vs. Benchmark by Industry
              </span>
              <span className="dropdown-item" href="http://www.fixme.com/">
                % Positions vs. Benchmark by Industry
              </span>
            </div>
          </div>
        </div>

        {primaryVT === 1 && (
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
        {primaryVT === 2 && (
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
        {showTableNow && secondaryVT === 1 && (
          <PositionsGraph 
          tickerData={tableData.map(({ ticker }) => ticker)} 
          valuesData={tableData.map(({ position_value }) => position_value)}
          x_label={"Position Value (USD)"}
          tool_tip_label= {"Value"}
           />
        )}
        {showTableNow && secondaryVT === 2 && (
          <PositionsGraph 
          tickerData={tableData.map(({ ticker }) => ticker)} 
          valuesData={convertToPrecentage(tableData.map(({ position_value }) => position_value))} 
          x_label={"Precent of Portfolio"}
          tool_tip_label= {"Precent"}/>
        )}
      </div>
    </div>
  );
}
