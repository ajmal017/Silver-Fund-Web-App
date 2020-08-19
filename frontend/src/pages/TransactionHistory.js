import React, { useState } from "react";
import axios from "axios";

import DateRanger from "../components/DateRanger";
import TickerSelector from "../components/TickerSelector";
import THTable from "../components/TransactionHistory/THTable";
import { getDateToday } from "../components/Helpers";

export default function TransactionHistory() {
  const [showTableNow, setShowTableNow] = useState(false);
  const [tableData, setTableData] = useState([]);
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");

  function getApiData(callType) {
    setShowTableNow(true);
    setTableData([]);

    axios.defaults.baseURL = "http://localhost:8000/";
    // axios.defaults.auth = {
    //   username: "su",
    //   password: "su",
    // };

    if (callType === "all") {
      axios
        .get("trades/")
        .then((response) => {
          if (response.data.length === 0) {
            showTableNow(false);
            alert("No transactions exist.");
          }
          setTableData(response.data);
          console.log("tableData: ", tableData);
        })
        .catch((error) => {
          console.log(error);
          alert("Error: Failed to load all transactions.", error);
        });
    }

    if (callType === "current") {
      axios
        .get("api/trades/filter/date/", {
          params: {
            start: getDateToday(),
            end: getDateToday(),
          },
        })
        .then((response) => {
          if (response.data.length === 0) {
            setShowTableNow(false);
            alert("No current transactions exist.");
          }
          setTableData(response.data);

          console.log("tableData: ", tableData);
        })
        .catch((error) => {
          console.log(error);
          alert("Error: Failed to load current transactions.", error);
        });
    }

    if (callType === "custom") {
      console.log("start: ", start, " end: ", end);
      if (start === "" || end === "") {
        setShowTableNow(false);
        return alert("Please select both a start date and end date.");
      }

      axios
        .get("api/trades/filter/date/", {
          params: {
            start: start,
            end: end,
          },
        })
        .then((response) => {
          if (response.data.length === 0) {
            setShowTableNow(false);
            alert("No transactions exist in that date range.");
          }
          setTableData(response.data);
          console.log("tableData: ", tableData);
        })
        .catch((error) => {
          console.log(error);
          alert(
            "Error: Failed to load transactions for that date range.",
            error
          );
        });
    }
  }

  return (
    <div className="content">
      {/* {viewType === 1 && ( */}
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
      {/* )} */}
      <hr />
      {showTableNow && <THTable data={tableData} />}
    </div>
  );
}
