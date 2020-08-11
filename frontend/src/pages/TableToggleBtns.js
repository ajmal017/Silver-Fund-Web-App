import React from "react";
import PositionsTable from "../components/PositionsTable";

class TableToggleBtns extends React.Component {
  state = {
    showCurrent: false,
    currentCount: 0,
    showAll: false,
    allCount: 0,
  };

  onClickCurrent = () => {
    this.setState({ currentCount: this.state.currentCount + 1 });

    if (this.state.currentCount % 2) {
      this.setState({ showCurrent: false });
    } else {
      this.setState({ showCurrent: true });
    }
    console.log(this.state.currentCount);
  };

  onClickAll = () => {
    this.setState({ allCount: this.state.allCount + 1 });

    if (this.state.allCount % 2) {
      this.setState({ showAll: false });
    } else {
      this.setState({ showAll: true });
    }
    console.log(this.state.allCount);
  };

  render() {
    return (
      <div>
        <button onClick={this.onClickCurrent}>Show Current Positions</button>
        {this.state.showCurrent ? (
          <PositionsTable url="http://localhost:8000/current_positions/" />
        ) : null}
        <button onClick={this.onClickAll}>Show All Positions</button>
        {this.state.showAll ? (
          <PositionsTable url="http://localhost:8000/all_positions/" />
        ) : null}
      </div>
    );
  }
}

export default TableToggleBtns;
