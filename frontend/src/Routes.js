import React from "react";
import { Route } from "react-router-dom";

import HomeSignin from "./components/HomeSignin";

const BaseRouter = () => (
  <div>
    <Route exact path="/" component={HomeSignin} />
  </div>
);

export default BaseRouter;
