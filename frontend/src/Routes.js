import React from "react";
import { Route } from "react-router-dom";

import HomeSignin from "./pages/HomeSignin";
import Signup from "./pages/Signup";
import PositionsTable from "./components/PositionsTable";
import Trades from "./pages/Trades";
import CurrentPositions from "./pages/CurrentPositions";
import PositionHistory from "./pages/PositionHistory";
import TransactionHistory from "./pages/TransactionHistory";
import TableToggleBtns from "./pages/TableToggleBtns";

function Routes() {
  return (
    <div className="content">
      <Route exact path="/" component={HomeSignin} />
      <Route exact path="/signup/" component={Signup} />
      <Route exact path="/positionstable/" component={PositionsTable} />
      <Route exact path="/dbtrades/" component={Trades} />
      <Route exact path="/currentpositions/" component={CurrentPositions} />
      <Route exact path="/positionhistory/" component={PositionHistory} />
      <Route exact path="/transactionhistory/" component={TransactionHistory} />
      <Route exact path="/tabletogglebtns/" component={TableToggleBtns} />
    </div>
  );
}

export default Routes;
