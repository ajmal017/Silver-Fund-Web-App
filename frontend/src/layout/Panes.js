import React from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

import Home from "../pages/Home/Home";
import Positions from "../pages/Positions/Positions";
import TradeHistory from "../pages/TradeHistory/TradeHistory";
import RiskAnalytics from "../pages/RiskAnalytics/RiskAnalytics";
import Performance from "../pages/Performance/Performance";
import PortfolioConstruction from "../pages/PortfolioConstruction/PortfolioConstruction";

export default function Panes(props) {
  return (
    <Tabs className="pane" defaultActiveKey="home" transition={false}>
      <Tab eventKey="home" title="Home">
        <Home
          username={props.username}
          password={props.password}
          updatePassword={props.updatePassword}
        />
      </Tab>
      <Tab eventKey="positions" title="Positions">
        <Positions />
      </Tab>
      <Tab eventKey="tradehistory" title="Trade History">
        <TradeHistory />
      </Tab>
      <Tab eventKey="riskanalytics" title="Risk Analytics">
        <RiskAnalytics />
      </Tab>
      <Tab eventKey="performance" title="Performance">
        <Performance />
      </Tab>
      <Tab eventKey="portfolioconstruction" title="Portfolio Construction">
        <PortfolioConstruction />
      </Tab>
    </Tabs>
  );
}
