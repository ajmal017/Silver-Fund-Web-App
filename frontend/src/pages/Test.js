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
        <div className="dropdown">
          <button
            className="btn dropdown-toggle dropdown-btn"
            type="button"
            data-toggle="dropdown"
          >
            Primary View Type
          </button>
          <div className="dropdown-menu dropdown-menu-right">
            <span
              className="dropdown-item"
              onClick={() => this.onDropdownClick(1)}
            >
              By Date (Point-in-Time Snapshot)
            </span>
            <span
              className="dropdown-item"
              onClick={() => this.onDropdownClick(2)}
            >
              History by Stock (Time Series View)
            </span>
            <span
              className="dropdown-item"
              onClick={() => this.onDropdownClick(3)}
            >
              History by Industry (Time Series View)
            </span>
          </div>
        </div>
        <hr />
        {this.state.positionViewType === 1 ? (
          <h1>OPTION 1</h1>
        ) : this.state.positionViewType === 2 ? (
          <h1>OPTION 2</h1>
        ) : this.state.positionViewType === 3 ? (
          <h1>OPTION 3</h1>
        ) : (
          <h1>CHOOSE AN OPTION FROM ABOVE</h1>
        )}
      </div>
    );
  }
}

export default Test;
