import React, { useState } from "react";
import axios from "axios";

import sfLogo from "../images/sf-logo.png";
import passwordIcon from "../images/lock.png";
import ErrorMsg from "../components/ErrorMsg";
import SuccessMsg from "../components/SuccessMsg";

export default function Home(props) {
  const [oldPwd, setOldPwd] = useState("");
  const [newPwd, setNewPwd] = useState("");
  const [changePwdError, setChangePwdError] = useState(null);
  const [changePwdSuccess, setChangePwdSuccess] = useState(null);

  function changePassword() {
    setChangePwdError(null);
    setChangePwdSuccess(null);

    if (oldPwd === "") {
      setChangePwdError("Old password is blank.");
      return;
    }

    if (newPwd === "") {
      setChangePwdError("New password is blank.");
      return;
    }

    axios.defaults.baseURL = "http://localhost:8000/";
    axios.defaults.auth = {
      username: props.username,
      password: props.password,
    };
    axios
      .put("api/change-password/", {
        old_password: oldPwd,
        new_password: newPwd,
      })
      .then((response) => {
        // console.log("Token: ", response.data.token);
        // setToken(response.data.token);
        console.log(response, response.data);
        setChangePwdSuccess(
          "Success!  Make sure to sign in with your new password in the future."
        );
      })
      .catch((error) => {
        console.log(error);
        setChangePwdError("Uh oh!  Try again.  (" + error + ")");
      });

    setOldPwd("");
    setNewPwd("");
  }

  return (
    <>
      <ErrorMsg errorMsg={changePwdError} />
      <SuccessMsg successMsg={changePwdSuccess} />
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
          <div
            className="mt-5"
            style={{
              maxWidth: "450px",
            }}
          >
            <h5>Change Your Password</h5>
            <p>
              Make sure to secure your account by changing your password from
              the default one you first received.
            </p>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <img
                  className="input-group-text"
                  src={passwordIcon}
                  alt=""
                  style={{ width: "50px" }}
                />
              </div>
              <input
                type="password"
                className="form-control"
                placeholder="Enter old password"
                value={oldPwd}
                onChange={(event) => setOldPwd(event.target.value)}
              />
            </div>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <img
                  className="input-group-text"
                  src={passwordIcon}
                  alt=""
                  style={{ width: "50px" }}
                />
              </div>
              <input
                type="password"
                className="form-control"
                placeholder="Enter new password"
                value={newPwd}
                onChange={(event) => setNewPwd(event.target.value)}
              />
            </div>
            <button
              className="btn"
              style={{ width: "100%" }}
              onClick={() => changePassword()}
            >
              Change Password
            </button>
          </div>
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
