import React from "react";
import { Line } from "react-chartjs-2";

import { addThousandsComma } from "../../../helpers";

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
          animation: {
            onComplete: function () {
              var ctx = this.chart.ctx;
              // ctx.font = Chart.helpers.fontString(Chart.defaults.global.defaultFontFamily, 'normal', Chart.defaults.global.defaultFontFamily);
              ctx.fillStyle = "#000000";
              ctx.textAlign = "right";
              // ctx.textBaseline = 'bottom';

              this.data.datasets.forEach(function (dataset) {
                for (var i = 0; i < dataset.data.length; i++) {
                  for (var key in dataset._meta) {
                    var model = dataset._meta[key].data[i]._model;
                    ctx.fillText(
                      props.dollar +
                        addThousandsComma(dataset.data[i]) +
                        props.percent,
                      model.x - 5,
                      model.y
                    );
                  }
                }
              });
            },
          },
        }}
      />
    </>
  );
}
