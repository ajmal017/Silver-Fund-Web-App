import React from "react";

import sfLogo from "../images/sf-logo.png";

export default function Home() {
  return (
    <div className="content">
      <div className="left-col">
        {/* FIXME - Add their username to this line, verifies to them that they're signed in*/}
        <h3>Welcome to the Silver Fund Web App!</h3>
        <p className="intro-info">
          Click the tabs above to navigate between panes. <br />
          See the buttons with links below to learn more about how to use the
          app.
        </p>
        <a
          className="btn"
          href="https://byu.sharepoint.com/sites/silverfund-wiki"
          target="_blank"
          rel="noopener noreferrer"
        >
          Documentation
        </a>
      </div>
      <img
        src={sfLogo}
        className="home-logo"
        alt=""
        style={{ width: "600px" }}
      />
    </div>
  );
}
