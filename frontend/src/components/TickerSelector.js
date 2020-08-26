import React, { useState, useEffect } from "react";
import Select, { components } from "react-select";
import makeAnimated from "react-select/animated";

export default function TickerSelector(props) {
  const [tickerFilter, setTickerFilter] = useState([])
  var tickerOptions = props.apiData.map(({ ticker }) => ticker);
  tickerOptions = [...new Set(tickerOptions)];

  tickerOptions = tickerOptions.map((item) => ({
    value: item,
    label: item,
  }));

  function filterApiData() {
    const tickers = tickerFilter.map(({ value }) => value);
    var newData = [];
    var i;
    for (i = 0; i < tickers.length; ++i) {
      var filterData = props.apiData.filter(function (item) {
        return item.ticker === tickers[i];
      });
      newData.push.apply(newData, filterData);
    }
    
    if(newData.length != 0){
      console.log("filtered: ", newData);
      props.onSubmit(newData)
      return newData;
    }
    else{
      console.log("filtered: ", props.apiData);
      props.onSubmit(props.apiData)
      return props.apiData;
    }
    
  }

  useEffect(() => {
    filterApiData();
  }, [tickerFilter]);

  return (
    <>
      {props.apiData && props.apiData.length > 0 ? (
        <>
          <Select
            components={makeAnimated()}
            options={tickerOptions}
            clearValue={() => {console.log("CLEAR")}}
            noOptionsMessage={() =>
              "No tickers exist in that range, or all have been selected."
            }
            placeholder="Select Tickers To View ..."
            onChange={setTickerFilter}
            isMulti
            isSearchable
          />

          
          {/* <button className="btn date-btn" onClick={() => props.onSubmit(filterapiData())}> */}
          {/* <button
            type="button"
            className="btn date-btn"
            // onClick={() => {
            //   let newData = filterApiData();
            //   props.onSubmit(newData);
            // }}
          >
            Filter by Ticker
          </button> */}
        </>
      ) : (
        <Select isDisabled placeholder="Select date(s) before tickers." />
      )}
    </>
  );
}
