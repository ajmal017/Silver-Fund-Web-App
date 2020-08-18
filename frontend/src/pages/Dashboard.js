import React from "react";

function Dashboard() {
  return (
    <div className="content">
      <h3>Welcome to the Dashboard for Silver Fund Web App!</h3>
      <p className="intro-info">
        Click the tabs above to navigate between panes. <br />
        See the buttons with links below to learn more about how to use the app.
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
  );
}

export default Dashboard;
