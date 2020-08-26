import React from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

export default function RASubPanes(props) {
  return (
    <Tabs
      className="sub-pane"
      defaultActiveKey="current"
      activeKey={props.subPane}
      onSelect={props.onSubPaneSwitch}
    >
      <Tab eventKey="current" title="Current Portfolio Risk"></Tab>
      <Tab eventKey="throughtime" title="Portfolio Risk Through Time"></Tab>
      <Tab eventKey="whatif" title="What-If Analysis"></Tab>
    </Tabs>
  );
}
