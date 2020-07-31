import React from "react";
import "./App.css";

function App() {
  return (
    <div className="everything">
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
      <main role="main" className="inner cover">
        <img
          src="https://v4j2f9f9.stackpathcdn.com/lakeworth/wp-content/uploads/sites/19/2017/07/white-trading-icons-lg-04.png"
          alt=""
        />
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
            Learn more
          </a>
        </p>
      </main>
      <footer>
        <div className="inner">
          <p>&copy; Silver Fund | All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
