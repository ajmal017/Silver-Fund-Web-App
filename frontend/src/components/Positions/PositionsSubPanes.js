import React from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

export default function PositionsSubPanes(props) {
  return (
    <Tabs
      className="sub-pane"
      defaultActiveKey="snapshot"
      activeKey={props.subPane}
      onSelect={props.onSubPaneSwitch}
    >
      <Tab eventKey="snapshot" title="Snapshot (Bar Chart View)"></Tab>
      <Tab
        eventKey="historybystock"
        title="History by Stock (Time Series View)"
      ></Tab>
      <Tab
        eventKey="historybyindustry"
        title="History by Industry (Time Series View)"
        disabled
      ></Tab>
    </Tabs>
  );
}
