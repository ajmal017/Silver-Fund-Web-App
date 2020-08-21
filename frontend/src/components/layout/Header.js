import React from "react";

import sfLogo from "../../images/sf-logo.png";
import byuLogoText from "../../images/byu-logo-text.png";

export default function Header() {
  return (
    <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
      <header className="masthead mb-auto">
        <h3 className="masthead-brand">
          <img
            src={byuLogoText}
            alt=""
            style={{
              height: "29px",
              paddingBottom: "6px",
              paddingRight: "8px",
            }}
          />
          Silver Fund
          <img
            src={sfLogo}
            alt=""
            style={{ height: "25px", paddingLeft: "20px", marginTop: "-7px" }}
          />
        </h3>
        <nav className="nav nav-masthead justify-content-center">
          {/* FIXME - Add logic so it isn't visible when user is signed in. */}
          <a className="nav-link active" href="/">
            Home
          </a>
          <a className="nav-link" href="/signin/">
            Sign Out
          </a>
        </nav>
      </header>
    </div>
  );
}
