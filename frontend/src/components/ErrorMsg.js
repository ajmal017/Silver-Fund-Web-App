import React from "react";

export default function ErrorMsg(props) {
  return (
    <>
      {props.errorMsg && (
        <div
          style={{
            backgroundColor: "#e53935",
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
