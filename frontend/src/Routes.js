import React from "react";
import { Route } from "react-router-dom";

import HomeSignin from "./pages/HomeSignin";
import Signup from "./pages/Signup";

function Routes() {
  return (
    <div className="content">
      <Route exact path="/" component={HomeSignin} />
      <Route exact path="/signup/" component={Signup} />
    </div>
  );
}

export default Routes;
