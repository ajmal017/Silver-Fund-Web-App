import React, { useState, useEffect } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";

export default function TickerSelector(props) {
  const [tickerFilter, setTickerFilter] = useState([]);
  var tickerOptions = props.apiData.map(({ ticker }) => ticker);
  tickerOptions = [...new Set(tickerOptions)];

  tickerOptions = tickerOptions.map((item) => ({
    value: item,
    label: item,
  }));

function filterApiData() {
    if(!tickerFilter){
      props.onSubmit(props.apiData);
      return(props.apiData)
    }
    const tickers = tickerFilter.map(({ value }) => value);
    var newData = [];
    var i;
    for (i = 0; i < tickers.length; ++i) {
      var filterData = props.apiData.filter(function (item) {
        return item.ticker === tickers[i];
      });
      newData.push.apply(newData, filterData);
    }

    if (newData.length !== 0) {
      props.onSubmit(newData);
      return newData;
    } else {
      props.onSubmit(props.apiData);
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
            noOptionsMessage={() => "All tickers have been selected."}
            placeholder="Select Tickers To View ..."
            onChange={setTickerFilter}
            isMulti
            isSearchable
          />
        </>
      ) : (
        <Select isDisabled placeholder="Select date(s) before tickers." />
      )}
    </>
  );
}
