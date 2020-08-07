import React from "react";
import { Route } from "react-router-dom";

import HomeSignin from "./pages/HomeSignin";
import Signup from "./pages/Signup";
import Documentation from "./pages/Documentation";
import TableIB from "./components/TableIB";
import TableDB from "./components/TableDB";
import Trades from "./pages/Trades";
import CurrentPositions from "./pages/CurrentPositions";
import PositionHistory from "./pages/PositionHistory";
import TransactionHistory from "./pages/TransactionHistory";
import Test from "./pages/Test";

function Routes() {
  return (
    <div className="content">
      <Route exact path="/" component={HomeSignin} />
      <Route exact path="/signup/" component={Signup} />
      <Route exact path="/documentation/" component={Documentation} />
      <Route exact path="/tableib/" component={TableIB} />
      <Route exact path="/tabledb/" component={TableDB} />
      <Route exact path="/dbtrades/" component={Trades} />
      <Route exact path="/currentpositions/" component={CurrentPositions} />
      <Route exact path="/positionhistory/" component={PositionHistory} />
      <Route exact path="/transactionhistory/" component={TransactionHistory} />
      <Route exact path="/test/" component={Test} />
    </div>
  );
}

export default Routes;
