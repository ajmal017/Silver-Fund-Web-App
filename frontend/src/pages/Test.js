import React from "react";
import TableDB from "../components/TableDB";
import { Button } from "react-bootstrap";

function Test() {
  return (
    <div className="dropdown">
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        id="dropdownMenuButton"
        data-toggle="dropdown"
      >
        Positions Table Viewer
      </button>
      <div className="dropdown-menu dropdown-menu-right">
        <a className="dropdown-item" href="http://www.fixme.com/">
          Current Positions
        </a>
        <a className="dropdown-item" href="http://www.fixme.com/">
          All Positions
        </a>
        <button onClick{() => {
          <TableDB url={"http://localhost:8000/all_positions/"}
        }}>
          TEST
        </button>
      </div>
    </div>
    // <div>
    //   All Positions
    //   <TableDB url={"http://localhost:8000/all_positions/"} />
    //   Current Positions
    //   <TableDB url={"http://localhost:8000/current_positions/"} />
    // </div>
  );
}

export default Test;
