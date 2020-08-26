import React from "react";

import Intro from "./components/Intro";
import SigninBox from "./components/SigninBox";

export default function Signin(props) {
  return (
    <div className="content home-container-intro-signin">
      <Intro />
      <SigninBox
        signIn={props.signIn}
        username={props.username}
        fillUsername={props.fillUsername}
        password={props.password}
        fillPassword={props.fillPassword}
        signinPress={props.signinPress}
      />
    </div>
  );
}
