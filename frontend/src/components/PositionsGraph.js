import React, {Component} from "react";
import {Bar, Line, Pie, HorizontalBar} from 'react-chartjs-2';

class PositionsGraph extends Component{

  constructor(props){
    super(props);
    this.state = {
      chartData:props.chartData
    }
  }
  render(){
    return(
      <div className="chart">
        <HorizontalBar
          data={this.state.chartData}
          width={50}
          height={50}
          options={{
              title:{
                  display:true,
                  text: 'Positions',
                  fontsize: 25
              }, 
              legend:{
                  display:false,
                  position:'right',
                  labels:{
                      fontColor:'#000'
                  }
              }, 
              layout:{
                  padding:{
                      left:50,
                      right:0,
                      bottom:0,
                      top:0
                  }
              },
              tooltips:{
                  enabled:true,
              },
              scales: {
                xAxes: [{
                    ticks: {
                    min: 0,
                    max: 50
                    },
                    stacked: true,
                    scaleLabel: {
                    display: true,
                    labelString: 'Precent of Portfolio',
                    fontSize: 16
                    }
                }]
            }
          }}
        />
      </div>

    )
  }
}

export default PositionsGraph;