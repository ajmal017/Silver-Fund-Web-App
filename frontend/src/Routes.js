import React from "react";
import { Route } from "react-router-dom";

import Home from "./components/Home";
import SignIn from "./components/SignIn";
import TwoCol from "./components/TwoCol";

const BaseRouter = () => (
  <div>
    <Route exact path="/" component={Home} />
    <Route exact path="/signin/" component={SignIn} />
    <Route exact path="/twocol/" component={TwoCol} />
  </div>
);

export default BaseRouter;
