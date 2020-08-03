import React from "react";

import passwordIcon from "../images/lock.png";
import usernameIcon from "../images/user.png";

function Signup() {
  return (
    <div className="card" id="signup-box">
      <h4 className="card-title">Create Account</h4>
      <p>Fill out the fields below</p>
      <form>
        {/* First Name */}
        <input
          type="text"
          className="form-control"
          placeholder="Enter first name"
          id="firstname-field"
        />
        {/* Last Name */}
        <input
          type="text"
          className="form-control"
          placeholder="Enter last name"
          id="lastname-field"
        />
        {/* Email */}
        <input
          type="email"
          className="form-control"
          placeholder="Enter email"
          id="email-field"
        />
        <br />
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
        {/* Sign Up */}
        <button type="submit" className="btn btn-dark" id="signup-btn">
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default Signup;
