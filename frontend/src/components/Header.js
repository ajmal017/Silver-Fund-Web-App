import React from "react";

function Header() {
  return (
    <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
      <header className="masthead mb-auto">
        <h3 className="masthead-brand">BYU Silver Fund</h3>
        <nav className="nav nav-masthead justify-content-center">
          <a className="nav-link active" href="#">
            Home
          </a>
          <a className="nav-link" href="#">
            Features
          </a>
          <a className="nav-link" href="#">
            Contact
          </a>
        </nav>
      </header>
    </div>
  );
}

export default Header;
