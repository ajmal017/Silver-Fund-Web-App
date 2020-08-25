import React from "react";

import usernameIcon from "../../images/user.png";
import passwordIcon from "../../images/lock.png";

export default function SigninBox(props) {
  return (
    <div className="card" id="signin-box">
      <h3 className="card-title">Welcome Back!</h3>
      <form>
        {/* Username */}
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <img
              className="input-group-text"
              src={usernameIcon}
              alt=""
              style={{ width: "50px" }}
            />
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="Enter username"
            value={props.username}
            onChange={props.fillUsername}
          />
        </div>
        {/* PASSWORD */}
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
            placeholder="Enter password"
            value={props.password}
            onChange={props.fillPassword}
          />
        </div>
        {/* Sign In */}
        <button
          type="button"
          className="btn signin-btn"
          onClick={props.signinPress}
        >
          Sign In
        </button>
        <a
          className="forgot-password float-right pt-1"
          href="http://www.fixme.com/"
        >
          Forgot password?
        </a>
        <h5 className="pt-5">Need an account?</h5>
        <a
          className="btn signup-link-btn"
          href="mailto:silverfund@byu?subject=Account Creation Request" // FIXME - Add valid email address
        >
          Contact Us
        </a>
      </form>
    </div>
  );
}
