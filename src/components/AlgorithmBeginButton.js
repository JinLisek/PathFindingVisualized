import React from "react";
import { connect } from "react-redux";
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
    if (this.props.startTile) breadthFirstSearch(this.props.startTile, this.props.endTile);
  };
}

function mapStateToProps(state) {
  const { startTile, endTile } = state;
  return { startTile, endTile };
}

export default connect(mapStateToProps, {})(AlgorithmBeginButton);
