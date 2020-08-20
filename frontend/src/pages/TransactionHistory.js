import React, { useState, useEffect } from "react";
import axios from "axios";

import DateRanger from "../components/DateRanger";
import THTable from "../components/TransactionHistory/THTable";

export default function TransactionHistory() {
  const [showTable, setShowTable] = useState(false);
  const [tableData, setTableData] = useState([]);
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");

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
        .get("trades/")
        .then((response) => {
          if (response.data.length === 0) {
            showTable(false);
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

    if (callType === "custom") {
      console.log("start: ", start, " end: ", end);
      if (start === "" || end === "") {
        setShowTable(false);
        return alert("Please select both a start date and end date.");
      }

      axios
        .get("api/trades/filter/date/", {
          params: {
            start: start + "@00:00:00",
            end: end + "@23:59:59",
          },
        })
        .then((response) => {
          if (response.data.length === 0) {
            setShowTable(false);
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

  useEffect(() => {
    getApiData("all");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="content">
      <div className="small-box d-inline-block ml-4">
        <DateRanger
          itemType="Transactions"
          onStartChange={(value) => setStart(value)}
          onEndChange={(value) => setEnd(value)}
          onSubmit={() => getApiData("custom")}
        />
      </div>
      <hr />
      {showTable && <THTable data={tableData} />}
    </div>
  );
}
