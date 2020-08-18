import React from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Dashboard from "../pages/Dashboard";
import Positions from "../pages/Positions";
import TransactionHistory from "../pages/TransactionHistory";

export default function Panes() {
  return (
    <Tabs defaultActiveKey="dashboard">
      <Tab eventKey="dashboard" title="Dashboard">
        <Dashboard />
      </Tab>
      <Tab eventKey="positions" title="Positions">
        <Positions />
      </Tab>
      <Tab eventKey="transactionhistory" title="Transaction History">
        <TransactionHistory />
      </Tab>
    </Tabs>
  );
}
