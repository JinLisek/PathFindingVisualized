import React from "react";
import breadthFirstSearch from "../logic/BreadthFirstSearchAlgorithm";

class AlgorithmBeginButton extends React.Component {
  render() {
    return (
      <button className="btn-secondary" onClick={this.onBegin}>
        Begin
      </button>
    );
  }

  onBegin = () => {
    if (this.props.startTile) breadthFirstSearch(this.props.startTile);
  };
}

export default AlgorithmBeginButton;
