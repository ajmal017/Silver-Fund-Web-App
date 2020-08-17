import React, { useState } from "react";
import axios from "axios";

import DateRanger from "../components/DateRanger";
import PositionsTable from "../components/PositionsTable";
import PositionsGraph from "../components/PositionsGraph";
import { getDateToday } from "../components/Helpers";

function Positions() {
  const [primaryVT, setPrimaryVT] = useState(0);
  const [showTableNow, setShowTableNow] = useState(false);
  const [showGraphNow, setShowGraphNow] = useState(false);

  const [tableData, setTableData] = useState([]);
  const [tickerData, setTickerData] = useState([]);
  const [numHoldingsData, setNumHoldingsData] = useState([]);

  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");

  function getApiData(callType) {
    setShowTableNow(true);
    setShowGraphNow(true);
    setTableData([]);
    setTickerData([]);

    axios.defaults.baseURL = "http://localhost:8000/";
    axios.defaults.auth = {
      username: "admin",
      password: "password",
    };

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
          setTickerData(response.data.map(({ticker}) => ticker));
          setNumHoldingsData(response.data.map(({num_of_shares}) => num_of_shares));
          
          console.log("TickerData", tickerData);
           
        })
        .catch((error) => {
          console.log(error);
          alert("Error: Failed to load all positions table.", error);
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
          setTickerData(response.data.map(({ticker}) => ticker));
          setNumHoldingsData(response.data.map(({num_of_shares}) => num_of_shares));

          console.log("TickerData", tickerData);
          console.log("tableData: ", tableData);
        })
        .catch((error) => {
          console.log(error);
          alert("Error: Failed to load current positions table.", error);
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
          console.log("tableData: ", tableData);
        })
        .catch((error) => {
          console.log(error);
          alert(
            "Error: Failed to load positions table for that date range.",
            error
          );
        });
    }
  }

  return (
    <div className="pane-split-container">
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
              <span className="dropdown-item" onClick={() => setPrimaryVT(1)}>
                By Date (Point-in-Time Snapshot)
              </span>
              <span className="dropdown-item" onClick={() => setPrimaryVT(2)}>
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
              <a className="dropdown-item" href="http://www.fixme.com/">
                $ Positions by Stock
              </a>
              <a className="dropdown-item" href="http://www.fixme.com/">
                % Positions by Stock
              </a>
              <a className="dropdown-item" href="http://www.fixme.com/">
                $ Positions vs. Benchmark by Stock
              </a>
              <a className="dropdown-item" href="http://www.fixme.com/">
                % Positions vs. Benchmark by Stock
              </a>
              <a className="dropdown-item" href="http://www.fixme.com/">
                $ Positions by Industry
              </a>
              <a className="dropdown-item" href="http://www.fixme.com/">
                % Positions by Industry
              </a>
              <a className="dropdown-item" href="http://www.fixme.com/">
                $ Positions vs. Benchmark by Industry
              </a>
              <a className="dropdown-item" href="http://www.fixme.com/">
                % Positions vs. Benchmark by Industry
              </a>
            </div>
          </div>
        </div>

        {primaryVT === 1 && (
          <div id="bydate-dropdown">
            <div className="left-col">
              <h5>Defaults</h5>
              <label>
                <input
                  type="radio"
                  className="defaults-radio"
                  name="by-date-defaults"
                  onClick={() => getApiData("all")}
                />
                Show All Positions
              </label>
              <br />
              <label>
                <input
                  type="radio"
                  className="defaults-radio"
                  name="by-date-defaults"
                  onClick={() => getApiData("current")}
                />
                Show Current Positions
              </label>
            </div>
            <div className="custom-date-box float-right">
              <DateRanger
                onStartChange={(value) => setStart(value)}
                onEndChange={(value) => setEnd(value)}
                onSubmit={() => getApiData("custom")}
              />
            </div>
          </div>
        )}
        <hr />
        {showTableNow && <PositionsTable tableData={tableData} />}
       
        
      </div>
      <div className="right-col chart" >
      {showTableNow && <PositionsGraph tickerData={tickerData} numHoldingsData={numHoldingsData}/>}
      </div>
    </div>
  );
}

export default Positions;
