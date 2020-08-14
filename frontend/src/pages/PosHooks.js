import React, { useState } from "react";
import axios from "axios";

import DateRanger from "../components/DateRanger";
import PosTableHooks from "../components/PosTableHooks";
import { getDateToday } from "../components/Helpers";

function Positions() {
  const [primaryVT, setPrimaryVT] = useState(0);
  const [showTableNow, setShowTableNow] = useState(false);
  const [tableData, setTableData] = useState([]);
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");

  function getApiData(callType) {
    setShowTableNow(true);
    setTableData([]);

    axios.defaults.baseURL = "http://localhost:8000/";
    axios.defaults.auth = {
      username: "su",
      password: "su",
    };

    if (callType === "all") {
      axios
        .get("all_positions/")
        .then((response) => {
          if (response.data.length === 0) {
            showTableNow(false);
            alert("No positions exist.");
          }
          setTableData(response.data);
          console.log("tableData: ", tableData);
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
            alert("No current positions exist.");
          }
          setTableData(response.data);
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
            <DateRanger
              onStartChange={(value) => setStart(value)}
              onEndChange={(value) => setEnd(value)}
              onSubmit={() => getApiData("custom")}
            />
          </div>
        )}
        <hr />
        {showTableNow && <PosTableHooks data={tableData} />}
      </div>
      {/* <div className="right-col">
          INSERT SAM'S GRAPH COMPONENT HERE
        </div> */}
    </div>
  );
}

export default Positions;
