import React, { useState } from "react";
import axios from "axios";

import passwordIcon from "../../../images/lock.png";

export default function ChangePassword(props) {
  const [oldPwd, setOldPwd] = useState("");
  const [newPwd, setNewPwd] = useState("");
  const [newPwdConfirm, setNewPwdConfirm] = useState("");
  const [canChangePwd, setCanChangePwd] = useState(true);

  function changePassword() {
    props.setChangePwdError(null);
    props.setChangePwdSuccess(null);

    if (newPwd === oldPwd) {
      props.setChangePwdError(
        "New password cannot be the same as old password."
      );
      setNewPwd("");
      setNewPwdConfirm("");
      return;
    }

    if (newPwd.length < 8) {
      props.setChangePwdError(
        "New password must be at least 8 characters long."
      );
      setNewPwd("");
      setNewPwdConfirm("");
      return;
    }

    if (newPwd !== newPwdConfirm) {
      props.setChangePwdError(
        "You did not re-enter the new password correctly.  Try again."
      );
      setNewPwd("");
      setNewPwdConfirm("");
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
        setCanChangePwd(false);
      })
      .catch((error) => {
        console.log(error);
        props.setChangePwdError(
          "Uh oh! Failed to changed password.  Refresh and try again.  If this error persists, contact support."
        );
      });

    setOldPwd("");
    setNewPwd("");
    setNewPwdConfirm("");
  }

  return (
    <div
      className="mt-5"
      style={{
        maxWidth: "450px",
      }}
    >
      <h5>Change Your Password</h5>
      {canChangePwd ? (
        <>
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
            <input
              type="password"
              className="form-control"
              placeholder="Re-enter new password"
              maxLength="50"
              value={newPwdConfirm}
              onChange={(event) => setNewPwdConfirm(event.target.value)}
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
        </>
      ) : (
        <p style={{ color: "#000000" }}>
          You must sign out and sign back in with your new password before you
          can change it again.
        </p>
      )}
    </div>
  );
}
