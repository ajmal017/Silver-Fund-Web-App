import React from "react";
import { Route } from "react-router-dom";

import Home from "./components/Home";
import SignIn from "./components/SignIn";

const BaseRouter = () => (
  <div>
    <Route exact path="/" component={Home} />
    <Route exact path="/signin/" component={SignIn} />
  </div>
);

export default BaseRouter;
