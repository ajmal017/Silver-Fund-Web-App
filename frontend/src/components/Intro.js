import React from "react";

import tradingImg from "../images/trading-trans-white.png";

function Intro() {
  return (
    <div className="sf-intro">
      <img src={tradingImg} alt="" className="trading-img" />
      <h1 className="intro-name">Silver Fund Web App</h1>
      <p className="intro-info">
        An institutional-quality web app created for use by Silver Fund, The
        Marriott Business School's student-run investment fund. This app aims to
        support investment research, trading, risk management, and portfolio
        analysis.
      </p>
      <a
        className="btn btn-dark"
        href="https://marriottschool.byu.edu/mba/about/accelerated-learning/silver-fund/"
        role="button"
        id="learn-more-btn"
      >
        Learn More
      </a>
    </div>
  );
}

export default Intro;
