import React, { useState, useEffect } from "react";
import axios from "axios";

import ErrorMsg from "../components/ErrorMsg";
import DateRanger from "../components/DateRanger";
import THTable from "../components/TradeHistory/THTable";
import { getDateStr } from "../components/Helpers";
import TickerSelector from "../components/TickerSelector";

export default function TradeHistory() {
  const [errorMsg, setErrorMsg] = useState(null);
  const [start, setStart] = useState("2020-01-01");
  const [end, setEnd] = useState(getDateStr(-1));
  const [apiData, setApiData] = useState([]);
  const [currData, setCurrData] = useState([]);
  const [showTable, setShowTable] = useState(false);

  function getApiData() {
    setShowTable(true);
    setApiData([]);
    setErrorMsg(null);

    console.log("start: ", start, " end: ", end);
    if (end < start) {
      setShowTable(false);
      setErrorMsg("Warning: Start date isn't before end date.");
      return;
    }

    axios.defaults.baseURL = "http://localhost:8000/";
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
          setErrorMsg(
            "No trades exist on the date(s) selected.  Try a different selection."
          );
        }
        setApiData(response.data);
        console.log("apiData: ", apiData);
      })
      .catch((error) => {
        console.log(error);
        setShowTable(false);
        setErrorMsg("Uh oh! Failed to load trades data.  (" + error + ")");
      });
  }

  /* Calls the API to fetch data at first, and whenever start or end date change. */
  useEffect(() => {
    getApiData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [start, end]);

  return (
    <>
      <ErrorMsg errorMsg={errorMsg} />
      <div className="content">
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
            onSubmit={(newValue) => setCurrData(newValue)}
          />
        </div>
        <hr />
        {showTable && <THTable data={apiData} />}
      </div>
    </>
  );
}
