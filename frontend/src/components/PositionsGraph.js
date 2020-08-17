import React, { Component, useState } from "react";
import { Bar, Line, Pie, HorizontalBar } from "react-chartjs-2";
import Spinner from "react-bootstrap/Spinner";

function PositionsGraph(props) {
  
  // console.log("ticker", props.data.map(({ticker}) => ticker))
  console.log("sam", props.data)
  // const [chartData, setChartData] = useState({
  //   labels: props.data,
  //   datasets: [
  //     {
  //       label: "Percent",
  //       data: [30, 20, 30, 10, 30],
  //       backgroundColor: [
  //         "rgba(55,99,232,0.5)",
  //         "rgba(55,99,232,0.5)",
  //         "rgba(55,99,232,0.5)",
  //         "rgba(55,99,232,0.5)",
  //         "rgba(55,99,232,0.5)",
  //       ],
  //     },
  //   ],
  // });
  return (
    <>
      {props.tickerData.length > 0 ? (
        <HorizontalBar
          data={
            {
              labels: props.tickerData,
              datasets: [
                {
                  label: "Percent",
                  data: props.numHoldingsData,
                  backgroundColor: [
                    "rgba(55,99,232,0.5)",
                    "rgba(55,99,232,0.5)",
                    "rgba(55,99,232,0.5)",
                    "rgba(55,99,232,0.5)",
                    "rgba(55,99,232,0.5)",
                  ],
                },
              ],
            }
          }
          width={50}
          height={50}
          options={{
            title: {
              display: true,
              text: "Positions",
              fontsize: 25,
            },
            legend: {
              display: false,
              position: "right",
              labels: {
                fontColor: "#000",
              },
            },
            layout: {
              padding: {
                left: 50,
                right: 0,
                bottom: 0,
                top: 0,
              },
            },
            tooltips: {
              enabled: true,
            },
            scales: {
              xAxes: [
                {
                  // ticks: {
                  //   min: 0,
                  //   max: 50,
                  // },
                  stacked: true,
                  scaleLabel: {
                    display: true,
                    labelString: "Percent of Portfolio",
                    fontSize: 16,
                  },
                },
              ],
            },
          }}
        />
        ):(
          <div>
          <Spinner
            animation="border"
            variant="dark"
            className="loading-spinner"
          />
        </div>
        )}
    </>
  );
}

export default PositionsGraph;
