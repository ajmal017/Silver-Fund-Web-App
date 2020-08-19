import React from "react";
import { Route } from "react-router-dom";

import Panes from "./components/layout/Panes";
import Signin from "./pages/Signin";
import Positions from "./pages/Positions";
import TransactionHistory from "./pages/TransactionHistory";
import Test from "./pages/Test";

export default function Routes() {
  return (
    <>
      <Route exact path="/" component={Panes} />
      <Route exact path="/signin/" component={Signin} />
      <Route exact path="/positions/" component={Positions} />
      <Route exact path="/transactionhistory/" component={TransactionHistory} />
      <Route exact path="/test/" component={Test} />
    </>
  );
}
