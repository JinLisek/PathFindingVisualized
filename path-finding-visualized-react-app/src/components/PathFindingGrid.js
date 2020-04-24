import React from "react";
import GridTile from "./GridTile";
import Tile from "../logic/Tile";

class PathFindingGrid extends React.Component {
  constructor() {
    super();
    let tileGrid = [];
    const width = 50;
    const height = 15;

    for (let vertical = 0; vertical <= height; ++vertical) {
      let rowTiles = [];
      for (let horizontal = 0; horizontal <= width; ++horizontal) {
        rowTiles.push(new Tile(vertical, horizontal));
      }
      tileGrid.push(rowTiles);
    }

    for (let vertical = 0; vertical < tileGrid.length; ++vertical) {
      for (let horizontal = 0; horizontal < tileGrid[vertical].length; ++horizontal) {
        let tile = tileGrid[vertical][horizontal];
        if (horizontal - 1 >= 0) tile.left = tileGrid[vertical][horizontal - 1];
        if (horizontal + 1 <= width) tile.right = tileGrid[vertical][horizontal + 1];
        if (vertical - 1 >= 0) tile.top = tileGrid[vertical - 1][horizontal];
        if (vertical + 1 <= height) tile.bottom = tileGrid[vertical + 1][horizontal];
      }
    }

    this.state = { width, height, tileGrid };
  }

  render() {
    return <div className="container-fluid">{this.createGrid()}</div>;
  }

  createGrid() {
    return this.state.tileGrid.map((row) => (
      <div className="container-fluid" style={{ fontSize: 0 }} key={"Row:" + row[0].vertical}>
        {row.map((tile) => (
          <GridTile key={"Tile:" + tile.vertical + "#" + tile.horizontal} tile={tile} />
        ))}
      </div>
    ));
  }
}

export default PathFindingGrid;
