import React from "react";
import { Route } from "react-router-dom";

import Panes from "./components/layout/Panes";
import Signin from "./pages/Signin";
import Test from "./pages/Test";

export default function Routes() {
  return (
    <>
      <Route exact path="/" component={Panes} />
      <Route exact path="/signin/" component={Signin} />
      <Route exact path="/test/" component={Test} />
    </>
  );
}
