import React from "react";
import { Route } from "react-router-dom";

import HomeSignin from "./pages/HomeSignin";
import Signup from "./components/Signup";

const ContentRouter = () => (
  <div className="content">
    <Route exact path="/" component={HomeSignin} />
    <Route exact path="/signup/" component={Signup} />
  </div>
);

export default ContentRouter;
