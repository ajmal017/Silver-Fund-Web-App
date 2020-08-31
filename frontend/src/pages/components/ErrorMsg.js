import React from "react";

export default function ErrorMsg(props) {
  return (
    <>
      {props.errorMsg && (
        <div
          style={{
            backgroundColor: "#e53935",
            paddingLeft: "20px",
            minHeight: "25px",
          }}
        >
          {props.errorMsg}
        </div>
      )}
    </>
  );
}
