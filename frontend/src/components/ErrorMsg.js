import React from "react";

export default function ErrorMsg(props) {
  return (
    <>
      {props.errorMsg && (
        <div
          style={{
            backgroundColor: "#ef5350",
            textIndent: "20px",
            height: "25px",
          }}
        >
          {props.errorMsg}
        </div>
      )}
    </>
  );
}
