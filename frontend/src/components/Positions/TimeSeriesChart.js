import React from "react"; // { Component, useState }
import { Line } from "react-chartjs-2"; // Bar, Line, Pie,
// import Spinner from "react-bootstrap/Spinner";

export default function TimeSeriesChart(props) {
  return (
    <>
      <Line
        data={{
          labels: props.data[0],
          datasets: props.data[1],
        }}
        width={50}
        height={25}
        options={{
          responsive: true,
          title: {
            display: true,
            text: "",
          },
          tooltips: {
            multiKeyBackground: "#000",
            mode: "index",
            intersect: false,
          },
          hover: {
            mode: "nearest",
            intersect: true,
          },
          scales: {
            x: {
              display: true,
              scaleLabel: {
                display: true,
                labelString: "Month",
              },
            },
            y: {
              display: true,
              scaleLabel: {
                display: true,
                labelString: "Value",
              },
            },
          },
        }}
      />
    </>
  );
}
