import React, { useState } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";

export default function TickerSelector(props) {
  const [tickerFilter, setTickerFilter] = useState([]);

  const tickerOptions = props.tableData.map((item) => ({
    value: item.ticker,
    label: item.ticker,
  }));

  function filterTableData() {
    const tickers = tickerFilter.map(({ value }) => value)
    var newData = []
    var i;
    for(i = 0; i < tickers.length; ++i)
    {
      var filterData =  props.tableData.filter(function(item) {return ((item.ticker === tickers[i]))});
      newData.push.apply(newData, filterData);
    }
    console.log("filtered: ", newData);
    return newData;
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
          {/* <button className="btn date-btn" onClick={() => props.onSubmit(filterTableData())}> */}
          <button className="btn date-btn" onClick={() =>{
            let newData = filterTableData();
            console.log(newData);
            console.log(props.tableData)
          }}>
            Filter by Ticker
          </button>
        </>
      ) : (
        <Select isDisabled placeholder="Select date(s) before tickers." />
      )}
    </>
  );
}
