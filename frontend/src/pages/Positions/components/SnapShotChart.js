import React from "react";
import { HorizontalBar } from "react-chartjs-2";
import Spinner from "react-bootstrap/Spinner";

import { addThousandsComma } from "../../../helpers";

function FindMin(data) {
  if (!data) {
    return data;
  }
  if (Math.min(...data) > 0) {
    return 0;
  } else {
    return Math.round(Math.min(...data) - 10);
  }
}

export default function SnapShotChart(props) {
  return (
    <>
      {props.tickerData && props.tickerData.length > 0 ? (
        <div
          style={{
            backgroundColor: "#f2f2f2",
            paddingRight: "35px",
            paddingBottom: "10px",
            border: "3px solid #002e5d",
            outline: "2px solid #ffffff",
            border: "5px solid #cfcfcf",
            outline: "4px solid #ffffff",
          }}
          className="m-2"
        >
          <HorizontalBar
            data={{
              labels: props.tickerData,
              datasets: [
                {
                  label: props.tool_tip_label,
                  data: props.valuesData,
                  backgroundColor: "#3f5f80",
                  barPercentage: 0.5,
                  hoverBackgroundColor: "#002e5d",
                },
              ],
            }}
            width={50}
            height={30 + props.tickerData.length / 4}
            options={{
              title: {
                display: true,
                fontsize: 40,
                fontColor: "#000000",
              },
              legend: {
                display: false,
                position: "right",
                labels: {
                  fontColor: "#000000",
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
                      min: FindMin(props.valuesData),
                      max: Math.round(
                        Math.max(...props.valuesData) + props.buffer
                      ),
                      fontColor: "#000000",
                    },
                    stacked: true,
                    scaleLabel: {
                      display: true,
                      labelString: props.x_label,
                      fontSize: 20,
                      fontColor: "#000000",
                    },
                  },
                ],
                yAxes: [
                  {
                    ticks: {
                      fontColor: "#000000",
                      fontSize: 14,
                    },
                  },
                ],
              },
              animation: {
                onComplete: function () {
                  var ctx = this.chart.ctx;
                  // ctx.font = Chart.helpers.fontString(Chart.defaults.global.defaultFontFamily, 'normal', Chart.defaults.global.defaultFontFamily);
                  ctx.fillStyle = "#000000";
                  // ctx.textAlign = 'center';
                  // ctx.textBaseline = 'bottom';

                  this.data.datasets.forEach(function (dataset) {
                    for (var i = 0; i < dataset.data.length; i++) {
                      for (var key in dataset._meta) {
                        var model = dataset._meta[key].data[i]._model;
                        ctx.fillText(
                          props.dollar +
                            addThousandsComma(dataset.data[i]) +
                            props.percent,
                          model.x + 5,
                          model.y
                        );
                      }
                    }
                  });
                },
              },
            }}
          />
        </div>
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
