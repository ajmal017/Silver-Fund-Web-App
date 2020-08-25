import React from "react";

import sfLogo from "../../images/sf-logo.png";
import byuLogoText from "../../images/byu-logo-text.png";

export default function Header(props) {
  return (
    <div
      className="d-flex w-100 p-2 pt-3 mx-auto flex-column"
      style={{ maxWidth: "60em" }}
    >
      <header>
        <h3 className="float-left">
          <img
            src={byuLogoText}
            alt=""
            style={{
              height: "29px",
              paddingBottom: "6px",
              paddingRight: "8px",
            }}
            id="byu-text"
          />
          Silver Fund
          <img
            src={sfLogo}
            alt=""
            style={{ height: "25px", paddingLeft: "20px", marginTop: "-7px" }}
            id="sf-alpha"
          />
        </h3>
        <nav className="nav float-right">
          {props.token && (
            <button
              type="button"
              className="btn signout-btn"
              onClick={props.signOut}
            >
              Sign Out
            </button>
          )}
        </nav>
      </header>
    </div>
  );
}
