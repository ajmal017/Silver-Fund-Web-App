import React, { useState } from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Positions from "./Positions";
import TransactionHistory from "./TransactionHistory";
import Dashboard from "./Dashboard";

function Test() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      {isLoggedIn && (
        <Tabs defaultActiveKey="home">
          <Tab eventKey="home" title="Home">
            <Dashboard />
          </Tab>
          <Tab eventKey="profile" title="Positions">
            <Positions />
          </Tab>
          <Tab eventKey="contact" title="Transaction History">
            <TransactionHistory />
          </Tab>
        </Tabs>
      )}
      <button onClick={() => setIsLoggedIn(true)}>LOG ME IN</button>
    </>
  );
}

// import Select from "react-select";

// const tickers = [
//   { value: "AAPL", label: "AAPL  (Apple)" },
//   { value: "FB", label: "FB  (Facebook)" },
//   { value: "33L", label: "33L  (Lulu)" },
//   { value: "TSLA", label: "TSLA  (Tesla)" },
// ];

// function Test(props) {
//   const [tickersFilter, setTickersFilter] = useState([0, 2, 3]);

//   var test = 1;

//   return (
//     <>
//       <Select
//         isMulti
//         // name="colors"
//         options={tickers}
//         className="basic-multi-select"
//         classNamePrefix="select"
//         // onChange={() => setTickersFilter([0, 3, 6])}
//         // onChange=
//         // onChange={(event) => console.log("event ", event.label)}
//       />
//       <span onClick={() => setTickersFilter([test, 3, 6])}>CLICKME</span>
//       {tickersFilter}
//       Numbers:
//       <ul>
//         {tickersFilter.map((ticker, i) => {
//           return <li key={i}>{ticker}</li>;
//         })}
//       </ul>
//     </>
//   );
// }

// import DateRangePicker from "@wojtekmaj/react-daterange-picker";

// function Test() {
//   const [value, onChange] = useState([new Date(), new Date()]);

//   return (
//     <div>
//       <DateRangePicker
//         value={value}
//         showLeadingZeros={true}
//         rangeDivider=" -  to  - "
//         onChange={onChange}
//       />
//     </div>
//   );
// }

export default Test;
