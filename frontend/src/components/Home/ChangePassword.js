import React, { useState } from "react";
import axios from "axios";

import passwordIcon from "../../images/lock.png";

export default function ChangePassword(props) {
  const [oldPwd, setOldPwd] = useState("");
  const [newPwd, setNewPwd] = useState("");

  function changePassword() {
    props.setChangePwdError(null);
    props.setChangePwdSuccess(null);

    if (oldPwd === "") {
      props.setChangePwdError("Old password is blank.");
      return;
    }

    if (newPwd === "") {
      props.setChangePwdError("New password is blank.");
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
        props.setChangePwdSuccess(
          "Success!  Make sure to sign in with your new password in the future."
        );
      })
      .catch((error) => {
        console.log(error);
        props.setChangePwdError("Uh oh!  Try again.  (" + error + ")");
      });

    setOldPwd("");
    setNewPwd("");
  }

  return (
    <div
      className="mt-5"
      style={{
        maxWidth: "450px",
      }}
    >
      <h5>Change Your Password</h5>
      <p>
        Make sure to secure your account by changing your password from the
        default one you first received.
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
  );
}
