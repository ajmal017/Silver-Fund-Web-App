import React from "react";

import sfLogo from "../images/sf-logo-notext.png";

function Header() {
  return (
    <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
      <header className="masthead mb-auto">
        <h3 className="masthead-brand">
          BYU Silver Fund
          <img
            src={sfLogo}
            alt=""
            style={{ height: "30px", paddingLeft: "20px", marginTop: "-7px" }}
          />
        </h3>
        <nav className="nav nav-masthead justify-content-center">
          <a className="nav-link active" href="/">
            Home
          </a>
          <a className="nav-link" href="/signup/">
            Sign Up
          </a>
          <a
            className="nav-link"
            target="_blank"
            rel="noopener noreferrer"
            href="http://www.fixme.com/"
            // FIXME - Change href to internal wiki/SharePoint site that has all documentation
          >
            Documentation
          </a>
        </nav>
      </header>
    </div>
  );
}

export default Header;
