import React from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Home from "../../pages/Home";
import Positions from "../../pages/Positions";
import TransactionHistory from "../../pages/TransactionHistory";
import RiskAnalytics from "../../pages/RiskAnalytics";

export default function Panes() {
  return (
    <Tabs className="pane" defaultActiveKey="home">
      <Tab eventKey="home" title="Home">
        <Home />
      </Tab>
      <Tab eventKey="positions" title="Positions">
        <Positions />
      </Tab>
      <Tab eventKey="transactionhistory" title="Transaction History">
        <TransactionHistory />
      </Tab>
      <Tab eventKey="riskanalytics" title="Risk Analytics">
        <RiskAnalytics />
      </Tab>
    </Tabs>
  );
}
