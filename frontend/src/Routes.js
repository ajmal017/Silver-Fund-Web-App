import React from "react";
import { Route } from "react-router-dom";

import HomeSignin from "./pages/HomeSignin";
import Signup from "./pages/Signup";
import Positions from "./pages/PositionsClass";
import Trades from "./pages/Trades";
import TransactionHistory from "./pages/TransactionHistory";
import Test from "./pages/Test";
import PosHooks from "./pages/PosHooks";

function Routes() {
  return (
    <div className="content">
      <Route exact path="/" component={HomeSignin} />
      <Route exact path="/signup/" component={Signup} />
      <Route exact path="/positions/" component={Positions} />
      <Route exact path="/trades/" component={Trades} />
      <Route exact path="/transactionhistory/" component={TransactionHistory} />
      <Route exact path="/test/" component={Test} />
      <Route exact path="/poshooks/" component={PosHooks} />
    </div>
  );
}

export default Routes;
