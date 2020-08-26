import React from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

export default function PortfolioSubPanes(props) {
  return (
    <Tabs
      className="sub-pane"
      defaultActiveKey="construction"
      activeKey={props.subPane}
      onSelect={props.onSubPaneSwitch}
    >
      <Tab eventKey="construction" title="Construction"></Tab>
      <Tab eventKey="attribution" title="Attribution"></Tab>
    </Tabs>
  );
}
