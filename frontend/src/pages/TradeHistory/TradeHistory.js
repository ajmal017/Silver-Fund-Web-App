import React, { useState, useEffect } from "react";
import axios from "axios";

import { getDateStr, apiBackendUrl } from "../../helpers";
import ErrorMsg from "../components/ErrorMsg";
import DateRanger from "../components/DateRanger";
import TickerSelector from "../components/TickerSelector";
import THTable from "./components/THTable";

export default function TradeHistory() {
  const [errorMsg, setErrorMsg] = useState(null);
  const [start, setStart] = useState("2020-01-01");
  const [end, setEnd] = useState(getDateStr(-1));
  const [apiData, setApiData] = useState([]);
  const [currData, setCurrData] = useState([]);
  const [showTable, setShowTable] = useState(false);

  function addTickers(values) {
    var i;
    for (i = 0; i < values.length; ++i) {
      values[i].ticker = values[i].asset_id;
    }
    return values;
  }

  function getApiData() {
    setShowTable(true);
    setApiData([]);
    setErrorMsg(null);

    if (end < start) {
      setShowTable(false);
      setErrorMsg("Warning: Start date isn't before end date.");
      return;
    }

    axios.defaults.baseURL = apiBackendUrl;
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
        setCurrData(response.data);
      })
      .catch((error) => {
        console.log(error);
        setShowTable(false);
        setErrorMsg(
          "Uh oh! Something went wrong on our end (failed to load trades data).  If this error persists, contact support."
        );
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
        <div className="d-inline-block">
          <DateRanger
            start={start}
            end={end}
            onStartChange={(value) => setStart(value)}
            onEndChange={(value) => setEnd(value)}
          />
        </div>
        <div className="ticker-selector d-inline-block ml-4">
          <TickerSelector
            apiData={addTickers(apiData)}
            onSubmit={(newValue) => setCurrData(newValue)}
          />
        </div>
        <hr />
        {showTable && <THTable data={currData} />}
      </div>
    </>
  );
}
