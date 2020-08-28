import React from "react";
import { Line } from "react-chartjs-2";
import Spinner from "react-bootstrap/Spinner";

import { addThousandsComma } from "../../../helpers";

export default function TimeSeriesChart(props) {
  console.log(props.data[1])
  return (
    <div
      style={{
        padding: "40px",
        border: "4px solid #cfcfcf",
      }}
    >
      {props.data && props.data.length > 0 && !(props.data[1].length > 1 && props.data[1].every( v => v.backgroundColor === props.data[1][0].backgroundColor )) ? (
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
              callbacks: {
                label: function(tooltipItems, data) {
                    return props.dollar + tooltipItems.yLabel.toString() + props.percent;
                }
              }
            },
            hover: {
              mode: "nearest",
              intersect: true,
            },
            scales: {
              xAxes: [{
                display: true,
              }],
              yAxes: [{
                ticks: {
                  callback: function(value, index, values) {
                      return props.dollar + value + props.percent;
                  }
                },
                display: true,
              }],
            },
          }}
        />
        ) : (
          <div>
            <Spinner
              animation="border"
              variant="dark"
              className="loading-spinner"
            />
          </div>
        )}
    </div>
  );
}
