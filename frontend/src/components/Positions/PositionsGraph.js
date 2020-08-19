import React from "react"; // { Component, useState }
import { HorizontalBar } from "react-chartjs-2"; // Bar, Line, Pie,
import Spinner from "react-bootstrap/Spinner";

export default function PositionsGraph(props) {
  // console.log("ticker", props.data.map(({ticker}) => ticker))
  // console.log("sam", props.valuesData);
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
      {props.tickerData && props.tickerData.length > 0 ? (
        <HorizontalBar
          data={{
            labels: props.tickerData,
            datasets: [
              {
                label: props.tool_tip_label,
                data: props.valuesData,
                backgroundColor: "#3F5F80",
                barPercentage: 0.5,
                borderWidth: 1,
                borderColor: "#fff",
                hoverBackgroundColor: "#002e5d",
              },
            ],
          }}
          width={50}
          height={50}
          options={{
            title: {
              display: true,
              text: "Positions",
              fontsize: 40,
              fontColor: "#000",
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
                  ticks: {
                    min: 0,
                    max: Math.round(Math.max(...props.valuesData) + 10),
                    fontColor: "#000",
                  },
                  stacked: true,
                  scaleLabel: {
                    display: true,
                    labelString: props.x_label,
                    fontSize: 20,
                    fontColor: "#000",
                  },
                },
              ],
              yAxes: [
                {
                  ticks: {
                    fontColor: "#000",
                    fontSize: 14,
                  },
                },
              ],
            },
            // animation: {
            //   duration: 1,
            //   onComplete: function () {
            //     var chartInstance = this.chart,
            //       ctx = chartInstance.ctx;

            //     ctx.textAlign = "left";
            //     ctx.textBaseline = "bottom";

            //     this.data.datasets.forEach(function (dataset, i) {
            //       var meta = chartInstance.controller.getDatasetMeta(i);
            //       meta.data.forEach(function (bar, index) {
            //         var data = dataset.data[index].toString(2) + "%";
            //         ctx.fillText(data, bar._model.x + 5, bar._model.y);
            //       });
            //     });
            //   },
            // },
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
    </>
  );
}
