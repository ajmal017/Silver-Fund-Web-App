import React from "react";
import { Route } from "react-router-dom";

import HomeSignin from "./pages/HomeSignin";
import Signup from "./pages/Signup";
import PositionsTable from "./components/PositionsTable";
import Trades from "./pages/Trades";
import CurrentPositions from "./pages/CurrentPositions";
import Positions from "./pages/Positions";
import TransactionHistory from "./pages/TransactionHistory";
import TableToggleBtns from "./pages/TableToggleBtns";
import Test from "./pages/Test";

function Routes() {
  return (
    <div className="content">
      <Route exact path="/" component={HomeSignin} />
      <Route exact path="/signup/" component={Signup} />
      <Route exact path="/positionstable/" component={PositionsTable} />
      <Route exact path="/dbtrades/" component={Trades} />
      <Route exact path="/currentpositions/" component={CurrentPositions} />
      <Route exact path="/positions/" component={Positions} />
      <Route exact path="/transactionhistory/" component={TransactionHistory} />
      <Route exact path="/tabletogglebtns/" component={TableToggleBtns} />
      <Route exact path="/tabletogglebtns/" component={TableToggleBtns} />
      <Route exact path="/test/" component={Test} />
    </div>
  );
}

export default Routes;
