import React from "react";
import TableDB from "../components/TableDB";

class Test extends React.Component {
  state = {
    showCurrent: false,
    currentCount: 0,
    showAll: false,
    allCount: 0,
  };

  incrementCount() {
    this.setState({ count: this.state.count + 1 });
  }

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
          <TableDB url="http://localhost:8000/current_positions/" />
        ) : null}
        <button onClick={this.onClickAll}>Show All Positions</button>
        {this.state.showAll ? (
          <TableDB url="http://localhost:8000/all_positions/" />
        ) : null}
      </div>
    );
  }
}

export default Test;
