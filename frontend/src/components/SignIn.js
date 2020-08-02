import React from "react";

function Home() {
  return (
    <div className="card">
      <h3 className="card-title">Sign In</h3>
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
        <button type="submit" className="btn btn-dark">
          Sign In
        </button>
        <p className="forgot-password text-right">
          Forgot <a href="#">password?</a>
        </p>
        <p>
          Don't have an account?
          <br />
          <a href="#"> Sign up here.</a>
        </p>
      </form>
    </div>
  );
}

export default Home;
