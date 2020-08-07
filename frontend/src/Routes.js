import React from "react";
import { Route } from "react-router-dom";

import HomeSignin from "./pages/HomeSignin";
import Signup from "./pages/Signup";
import Documentation from "./pages/Documentation";
import CPTableIB from "./components/CPTableIB";
import CPTableDB from "./components/CPTableDB";
import Trades from "./pages/Trades";
import CurrentPositions from "./pages/CurrentPositions";
import PositionHistory from "./pages/PositionHistory";
import TransactionHistory from "./pages/TransactionHistory";

function Routes() {
  return (
    <div className="content">
      <Route exact path="/" component={HomeSignin} />
      <Route exact path="/signup/" component={Signup} />
      <Route exact path="/documentation/" component={Documentation} />
      <Route exact path="/ibpositions/" component={CPTableIB} />
      <Route exact path="/dbpositions/" component={CPTableDB} />
      <Route exact path="/dbtrades/" component={Trades} />
      <Route exact path="/currentpositions/" component={CurrentPositions} />
      <Route exact path="/positionhistory/" component={PositionHistory} />
      <Route exact path="/transactionhistory/" component={TransactionHistory} />
    </div>
  );
}

export default Routes;
