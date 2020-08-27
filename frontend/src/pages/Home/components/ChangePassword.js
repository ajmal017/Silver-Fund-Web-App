import React, { useState } from "react";
import axios from "axios";

import passwordIcon from "../../../images/lock.png";

export default function ChangePassword(props) {
  const [oldPwd, setOldPwd] = useState("");
  const [newPwd, setNewPwd] = useState("");

  function changePassword() {
    props.setChangePwdError(null);
    props.setChangePwdSuccess(null);

    if (newPwd === oldPwd) {
      props.setChangePwdError(
        "New password cannot be the same as old password."
      );
      setNewPwd("");
      return;
    }

    if (newPwd.length < 8) {
      props.setChangePwdError(
        "New password must be at least 8 characters long."
      );
      setNewPwd("");
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
        console.log(response, response.data);
        props.setChangePwdSuccess(
          "Success!  Make sure to sign in with your new password in the future."
        );
        props.updatePassword(newPwd);
      })
      .catch((error) => {
        console.log(error);
        props.setChangePwdError(
          "Uh oh! Failed to changed password.  Refresh and try again.  If this error persists, contact support."
        );
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
      <p style={{ color: "#000000" }}>
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
          maxLength="50"
          value={newPwd}
          onChange={(event) => setNewPwd(event.target.value)}
        />
      </div>
      <button
        className="btn"
        style={{ width: "100%" }}
        onClick={() => changePassword()}
        disabled={(!oldPwd, !newPwd)}
      >
        Change Password
      </button>
    </div>
  );
}
