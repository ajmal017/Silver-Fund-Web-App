import React from "react";

import usernameIcon from "../../../images/user.png";
import passwordIcon from "../../../images/lock.png";

export default function SigninBox(props) {
  return (
    <div className="card signin-box">
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
          className="btn signin-btn w-100"
          onClick={props.signinPress}
        >
          Sign In
        </button>
        <h5 className="pt-4">Need an account?</h5>
        <p>Or simply can't sign in?</p>
        <a
          className="btn contactus-btn w-100"
          href="mailto:silverfundsupport@byu.edu" // FIXME - Add valid email address
        >
          Contact Us
        </a>
      </form>
    </div>
  );
}
