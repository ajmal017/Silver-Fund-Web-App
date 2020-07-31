import React from "react";
import "../styling/main.css";

class Layout extends React.Component {
  render() {
    return (
      <>
        {/* HEADER */}
        <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
          <header className="masthead mb-auto">
            <div className="inner">
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
            </div>
          </header>
        </div>

        {/* CONTENT */}
        <div className="content">{this.props.children}</div>

        {/* FOOTER */}
        <footer>
          <div className="inner">
            <p>&copy; Silver Fund | All Rights Reserved</p>
          </div>
        </footer>
      </>
    );
  }
}

export default Layout;
