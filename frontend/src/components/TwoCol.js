import React from "react";

import tradingImg from "../images/trading-trans-white.png";

function Home() {
  return (
    <div className="homepage-container">
      {/* LEFT SIDE / BTM - HOME */}
      <div className="sf-learn-more">
        <img src={tradingImg} alt="" className="sf-img" />
        <h1 className="cover-heading">Silver Fund Web App</h1>
        <p className="sf-info">
          An institutional-quality web app created for use by Silver Fund, The
          Marriott Business School's student-run investment fund. This app aims
          to support investment research, trading, risk management, and
          portfolio analysis.
        </p>
        <a
          class="btn btn-dark"
          href="https://marriottschool.byu.edu/mba/about/accelerated-learning/silver-fund/"
          role="button"
          id="learn-more-btn"
        >
          Learn More
        </a>
      </div>
      {/* RIGHT SIDE / TOP - SIGN-IN BOX */}
      <div className="card" id="signin-box">
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
          <button type="submit" className="btn btn-dark" id="signin-btn">
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
    </div>
  );
}

export default Home;
