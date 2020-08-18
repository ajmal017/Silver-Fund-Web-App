import React from "react";

import passwordIcon from "../images/lock.png";
import usernameIcon from "../images/user.png";

function SigninBox() {
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
            id="username-field"
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
            id="password-field"
          />
        </div>
        {/* Sign In */}
        <button type="submit" className="btn signin-btn">
          Sign In
        </button>
        <p className="text-right">
          <a className="forgot-password" href="http://www.fixme.com/">
            Forgot password?
          </a>
        </p>
        <h5>Need an account?</h5>
        <a
          className="btn signup-link-btn"
          href="mailto:silverfund@byu?subject=Account Creation Request" // FIXME - Add valid email address
          role="button"
        >
          Contact Us
        </a>
      </form>
    </div>
  );
}

export default SigninBox;
