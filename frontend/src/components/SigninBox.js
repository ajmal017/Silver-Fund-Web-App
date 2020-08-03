import React from "react";

function SigninBox() {
  return (
    <div className="card" id="signin-box">
      <h3 className="card-title">Welcome Back!</h3>
      <form>
        {/* Username */}
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">
              @
            </span>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="Username"
            aria-label="Username"
            aria-describedby="basic-addon1"
          ></input>
        </div>
        {/* Password */}
        <div className="form-group">
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>
        {/* Sign In */}
        <button type="submit" className="btn btn-dark" id="signin-btn">
          Sign In
        </button>
        <p className="forgot-password text-right">
          <a href="#">Forgot password?</a>
        </p>
        <h5>Need an account?</h5>
        <a class="btn btn-dark" href="#" role="button" id="signup-btn">
          Sign Up
        </a>
      </form>
    </div>
  );
}

export default SigninBox;
