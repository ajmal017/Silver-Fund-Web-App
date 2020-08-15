import React, { useState } from "react";
import Select from "react-select";

const tickers = [
  { value: "AAPL", label: "AAPL  (Apple)" },
  { value: "FB", label: "FB  (Facebook)" },
  { value: "33L", label: "33L  (Lulu)" },
  { value: "TSLA", label: "TSLA  (Tesla)" },
];

function Test(props) {
  const [tickersFilter, setTickersFilter] = useState([0, 2, 3]);

  var test = 1;

  return (
    <>
      <Select
        isMulti
        // name="colors"
        options={tickers}
        className="basic-multi-select"
        classNamePrefix="select"
        // onChange={() => setTickersFilter([0, 3, 6])}
        // onChange=
        // onChange={(event) => console.log("event ", event.label)}
      />
      <span onClick={() => setTickersFilter([test, 3, 6])}>CLICKME</span>
      {tickersFilter}
      Numbers:
      <ul>
        {tickersFilter.map((ticker, i) => {
          return <li key={i}>{ticker}</li>;
        })}
      </ul>
    </>
  );
}

export default Test;
