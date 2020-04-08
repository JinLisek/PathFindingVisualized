import React from "react";
import GridTile from "./GridTile";

class PathFindingGrid extends React.Component {
  constructor() {
    super();
    this.state = { width: 60, height: 15 };
  }

  render() {
    return <div className="container-fluid">{this.createGrid()}</div>;
  }

  createGrid() {
    let grid = [];
    for (let vertical = 0; vertical < this.state.height; ++vertical) {
      let rowTiles = [];
      for (let horizontal = 0; horizontal < this.state.width; ++horizontal) {
        rowTiles.push(<GridTile />);
      }
      grid.push(
        <div className="container-fluid" style={{ fontSize: 0 }}>
          {rowTiles}
        </div>
      );
    }
    return grid;
  }
}

export default PathFindingGrid;
