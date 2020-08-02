import React from "react";
import { Route } from "react-router-dom";

import HomeSignIn from "./components/HomeSignIn";

const BaseRouter = () => (
  <div>
    <Route exact path="/" component={HomeSignIn} />
  </div>
);

export default BaseRouter;
