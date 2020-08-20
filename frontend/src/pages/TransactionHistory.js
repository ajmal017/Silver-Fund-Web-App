import React, { useState, useEffect } from "react";
import axios from "axios";

import DateRanger from "../components/DateRanger";
import THTable from "../components/TransactionHistory/THTable";
import { getDateStr } from "../components/Helpers";

export default function TransactionHistory() {
  const [showTable, setShowTable] = useState(false);
  const [tableData, setTableData] = useState([]);
  const [start, setStart] = useState("2020-01-01");
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
      return;
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
          alert(
            "No transactions exist on the date(s) selected.  Try a different selection."
          );
        }
        setTableData(response.data);
        console.log("tableData: ", tableData);
      })
      .catch((error) => {
        console.log(error);
        alert("Error: Failed to load transactions data.", error);
      });
  }

  /* Calls the API to fetch data at first, and whenever start or end date change. */
  useEffect(() => {
    getApiData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [start, end]);

  return (
    <div className="content">
      <div className="small-box d-inline-block ml-4">
        <DateRanger
          start={start}
          end={end}
          onStartChange={(value) => setStart(value)}
          onEndChange={(value) => setEnd(value)}
        />
      </div>
      <hr />
      {showTable && <THTable data={tableData} />}
    </div>
  );
}
