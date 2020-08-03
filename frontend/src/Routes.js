import React from "react";
import { Route } from "react-router-dom";

import HomeSignin from "./components/HomeSignin";
import Signup from "./components/Signup";

const BaseRouter = () => (
  <div>
    <Route exact path="/" component={HomeSignin} />
    <Route exact path="/" component={Signup} />
  </div>
);

export default BaseRouter;
