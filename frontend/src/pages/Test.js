import React from "react";
import TableDB from "../components/TableDB";

function Test() {
  function alertMe() {
    // <TableDB url={"http://localhost:8000/all_positions/"} />;
    alert("Test");
  }

  function getTable() {
    const url = "http://localhost:8000/all_positions/";

    console.log(url);
    // <TableDB url={url} />;
    return <h1>GET TABLE</h1>;
  }

  return (
    <button
      onClick={() => {
        console.log("test");
        return <TableDB url={"http://localhost:8000/all_positions/"} />;
      }}
    >
      Test
    </button>
  );
}

export default Test;
