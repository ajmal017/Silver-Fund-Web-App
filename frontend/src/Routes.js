import React from "react";
import { Route } from "react-router-dom";

import HomeSignin from "./pages/HomeSignin";
import Signup from "./pages/Signup";
import Positions from "./pages/Positions";
import CPTable from "./components/CPTable";

function Routes() {
  return (
    <div className="content">
      <Route exact path="/" component={HomeSignin} />
      <Route exact path="/signup/" component={Signup} />
      <Route exact path="/dbpositions/" component={Positions} />
      <Route exact path="/ibpositions/" component={CPTable} />
    </div>
  );
}

export default Routes;
