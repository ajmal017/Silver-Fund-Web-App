import React, { useState } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";

export default function TickerSelector(props) {
  const [tickerFilter, setTickerFilter] = useState([]);

  const tickerOptions = props.tableData.map((item) => ({
    value: item.ticker,
    label: item.ticker,
  }));
  //console.log("tickerOptions: ", tickerOptions);

  function filterTableData() {
    const filteredTableData = props.tableData.filter(
      (item) => item === tickerFilter
    );
    console.log("filtered: ", filteredTableData);
    props.onSubmit(filteredTableData);
  }

  return (
    <>
      {props.tableData && props.tableData.length > 0 ? (
        <>
          <Select
            components={makeAnimated()}
            options={tickerOptions}
            noOptionsMessage={() =>
              "No tickers exist in that range, or all have been selected."
            }
            placeholder="Select Tickers To View ..."
            onChange={setTickerFilter}
            isMulti
            isSearchable
          />
          <button className="btn date-btn" onClick={() => filterTableData()}>
            Filter by Ticker
          </button>
        </>
      ) : (
        <Select isDisabled placeholder="Select date(s) before tickers." />
      )}
    </>
  );
}
