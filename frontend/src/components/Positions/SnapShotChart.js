import React from "react"; // { Component, useState }
import { HorizontalBar } from "react-chartjs-2"; // Bar, Line, Pie,
import Spinner from "react-bootstrap/Spinner";


function FindMin(data) {
  if(!data){return data}
  if(Math.min(...data) > 0) { return 0}
  else { return Math.round(Math.min(...data) - 10)}
}

export default function SnapShotChart(props) {

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
                backgroundColor: "rgba(55,99,232,0.5)",
                barPercentage: 0.5,
                borderWidth: 2,
                borderColor: "#000",
                hoverBorderWidth: 2,
                hoberBorderColor: "#000",
              },
            ],
          }}
          width={50}
          height={50 + (props.tickerData.length/2)}
          options={{
            title: {
              display: true,
              // text: "Positions",
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
                    min: FindMin(props.valuesData),
                    max: Math.round(Math.max(...props.valuesData) + props.buffer),
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
            animation: {
              onComplete: function () {
                  var ctx = this.chart.ctx;
                  // ctx.font = Chart.helpers.fontString(Chart.defaults.global.defaultFontFamily, 'normal', Chart.defaults.global.defaultFontFamily);
                  ctx.fillStyle = "black";
                  // ctx.textAlign = 'center';
                  // ctx.textBaseline = 'bottom';
          
                  this.data.datasets.forEach(function (dataset)
                  {
                      for (var i = 0; i < dataset.data.length; i++) {
                          for(var key in dataset._meta)
                          {
                              var model = dataset._meta[key].data[i]._model;
                              ctx.fillText(props.dollar + dataset.data[i] + props.precent, model.x + 5, model.y);
                          }
                      }
                  });
              }
            }
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
