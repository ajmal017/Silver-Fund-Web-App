import React, { Component, useState } from "react";
import { Bar, Line, Pie, HorizontalBar } from "react-chartjs-2";

function PositionsGraph(props) {
  const [chartData, setChartData] = useState({
    labels: ["FB", "TSLA", "LULU", "AAPL", "IBM"],
    datasets: [
      {
        label: "Percent",
        data: [30, 20, 30, 10, 30],
        backgroundColor: [
          "rgba(55,99,232,0.5)",
          "rgba(55,99,232,0.5)",
          "rgba(55,99,232,0.5)",
          "rgba(55,99,232,0.5)",
          "rgba(55,99,232,0.5)",
        ],
      },
    ],
  });
  return (
    <div className="chart">
      <HorizontalBar
        data={chartData}
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
                ticks: {
                  min: 0,
                  max: 50,
                },
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
    </div>
  );
}

// class PositionsGraph extends Component{

//   constructor(props){
//     super(props);
//     this.state = {
//       chartData:{
//         labels:['FB', 'TSLA', 'LULU', 'AAPL', 'IBM'],
//         datasets: [
//           {
//             label: 'Precent',
//             data: [
//               30,
//               20,
//               30,
//               10,
//               30
//             ],
//             backgroundColor: [
//               'rgba(55,99,232,0.5)',
//               'rgba(55,99,232,0.5)',
//               'rgba(55,99,232,0.5)',
//               'rgba(55,99,232,0.5)',
//               'rgba(55,99,232,0.5)'
//             ]
//           }
//         ]
//       }
//     }
//   }
//   render(){
//     return(
//       <div className="chart">
//         <HorizontalBar
//           data={this.state.chartData}
//           width={50}
//           height={50}
//           options={{
//               title:{
//                   display:true,
//                   text: 'Positions',
//                   fontsize: 25
//               },
//               legend:{
//                   display:false,
//                   position:'right',
//                   labels:{
//                       fontColor:'#000'
//                   }
//               },
//               layout:{
//                   padding:{
//                       left:50,
//                       right:0,
//                       bottom:0,
//                       top:0
//                   }
//               },
//               tooltips:{
//                   enabled:true,
//               },
//               scales: {
//                 xAxes: [{
//                     ticks: {
//                     min: 0,
//                     max: 50
//                     },
//                     stacked: true,
//                     scaleLabel: {
//                     display: true,
//                     labelString: 'Precent of Portfolio',
//                     fontSize: 16
//                     }
//                 }]
//             }
//           }}
//         />
//       </div>

//     )
//   }
// }
export default PositionsGraph;
