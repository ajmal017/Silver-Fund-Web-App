import React from "react";

export default function SuccessMsg(props) {
  return (
    <>
      {props.successMsg && (
        <div
          style={{
            backgroundColor: "#0fb56d",
            paddingLeft: "20px",
            minHeight: "25px",
          }}
        >
          {props.successMsg}
        </div>
      )}
    </>
  );
}
