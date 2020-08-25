import React, { useState } from "react";
import axios from "axios";

import sfLogo from "../images/sf-logo.png";
import ErrorMsg from "../components/ErrorMsg";
import SuccessMsg from "../components/SuccessMsg";
import ChangePassword from "../components/Home/ChangePassword";

export default function Home(props) {
  const [errorMsg, setErrorMsg] = useState(null);
  const [successMsg, setSuccessMsg] = useState(null);

  return (
    <>
      <ErrorMsg errorMsg={errorMsg} />
      <SuccessMsg successMsg={successMsg} />
      <div className="content">
        <div className="left-col">
          <h3>{props.username}, Welcome to the Silver Fund Web App!</h3>
          <p className="intro-info">
            Click the tabs above to navigate between panes. <br />
            See the buttons with links below to learn more about how to use the
            app.
          </p>
          <a
            className="btn"
            href="https://byu.sharepoint.com/sites/silverfund-wiki"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
          <ChangePassword
            username={props.username}
            password={props.password}
            setChangePwdError={(value) => setErrorMsg(value)}
            setChangePwdSuccess={(value) => setSuccessMsg(value)}
          />
        </div>
        <img
          src={sfLogo}
          className="home-logo"
          alt=""
          style={{ width: "600px" }}
        />
      </div>
    </>
  );
}
