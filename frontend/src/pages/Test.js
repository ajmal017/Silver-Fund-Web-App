import React from "react";

class Test extends React.Component {
  state = {
    positionViewType: 0,
  };

  onDropdownClick = (viewTypeNumber) => {
    this.setState({ positionViewType: viewTypeNumber });
  };

  render() {
    return (
      <div>
        <h1 onClick={() => this.onDropdownClick(1)}>TEST 1</h1>
        <h1 onClick={() => this.onDropdownClick(2)}>TEST 2</h1>
        <hr />
        {this.state.positionViewType === 1 ? (
          <h1>OPTION 1</h1>
        ) : this.state.positionViewType === 2 ? (
          <h1>OPTION 2</h1>
        ) : (
          <h1>OTHER OPTION</h1>
        )}
      </div>
    );
  }
}

export default Test;
