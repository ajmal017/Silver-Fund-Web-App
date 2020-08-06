import React from "react";
import { Route } from "react-router-dom";

import HomeSignin from "./pages/HomeSignin";
import Signup from "./pages/Signup";
import Test from "./pages/Test";
import CPTable from "./components/CPTable";

function Routes() {
  return (
    <div className="content">
      <Route exact path="/" component={HomeSignin} />
      <Route exact path="/signup/" component={Signup} />
      <Route exact path="/test/" component={Test} />
      <Route exact path="/positions/" component={CPTable} />
    </div>
  );
}

export default Routes;
