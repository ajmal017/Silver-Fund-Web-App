import React from "react";

import tradingImg from "../../../images/trading-trans-white.png";

export default function Intro() {
  return (
    <div className="sf-intro mx-4">
      <img src={tradingImg} alt="" className="trading-img w-50 pt-3" />
      <h1 style={{ color: "#002e5d" }}>Silver Fund Web App</h1>
      <p className="intro-info">
        An institutional-quality web app created for use by Silver Fund, The
        Marriott Business School's student-run investment fund. This app aims to
        support investment research, trading, risk management, and portfolio
        analysis.
      </p>
      <a
        className="btn px-4"
        href="https://www.thesilverfund.org/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn More
      </a>
    </div>
  );
}
