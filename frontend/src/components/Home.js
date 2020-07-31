import React from "react";

import tradingImg from "../images/trading-trans-white.png";

function Home() {
  return (
    <>
      <main role="main" className="inner cover">
        <img src={tradingImg} alt="" />
        <h1 className="cover-heading">Silver Fund Web App</h1>
        <p className="lead">
          An institutional-quality web app created for use by Silver Fund, The
          Marriott Business School's student-run investment fund. This app aims
          to support investment research, trading, risk management, and
          portfolio analysis.
        </p>
        <p className="lead-button">
          <a
            href="https://marriottschool.byu.edu/mba/about/accelerated-learning/silver-fund/"
            className="btn btn-lg btn-secondary"
          >
            Learn More
          </a>
        </p>
      </main>
    </>
  );
}

export default Home;
