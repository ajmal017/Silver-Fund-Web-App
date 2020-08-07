import React from "react";
import { Route } from "react-router-dom";

import HomeSignin from "./pages/HomeSignin";
import Signup from "./pages/Signup";
import CPTable from "./components/CPTable";
import CurrentPositions from "./pages/CurrentPositions";
import Trades from "./pages/Trades";

function Routes() {
  return (
    <div className="content">
      <Route exact path="/" component={HomeSignin} />
      <Route exact path="/signup/" component={Signup} />
      <Route exact path="/ibpositions/" component={CPTable} />
      <Route exact path="/dbpositions/" component={CurrentPositions} />
      <Route exact path="/dbtrades/" component={Trades} />
    </div>
  );
}

export default Routes;
