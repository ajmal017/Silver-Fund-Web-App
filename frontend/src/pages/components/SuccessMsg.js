import React from "react";

export default function SuccessMsg(props) {
  return (
    <>
      {props.successMsg && (
        <div
          style={{
            backgroundColor: "#0fb56d",
            textIndent: "20px",
            height: "25px",
          }}
        >
          {props.successMsg}
        </div>
      )}
    </>
  );
}
