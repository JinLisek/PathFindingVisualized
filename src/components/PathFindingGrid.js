import React from "react";
import GridTile from "./GridTile";
import Tile from "../logic/Tile";

class PathFindingGrid extends React.Component {
  constructor(props) {
    super(props);

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
        if (horizontal - 1 >= 0) tile.addNeighbour(tileGrid[vertical][horizontal - 1]);
        if (horizontal + 1 <= width) tile.addNeighbour(tileGrid[vertical][horizontal + 1]);
        if (vertical - 1 >= 0) tile.addNeighbour(tileGrid[vertical - 1][horizontal]);
        if (vertical + 1 <= height) tile.addNeighbour(tileGrid[vertical + 1][horizontal]);
      }
    }

    this.state = { width, height, tileGrid };
  }

  render() {
    return <div className="container-fluid">{this.createGrid()}</div>;
  }

  onTileClick = (tile) => this.props.onTileClickCallback(tile);

  createGrid() {
    return this.state.tileGrid.map((row) => (
      <div className="container-fluid" style={{ fontSize: 0 }} key={"Row:" + row[0].vertical}>
        {row.map((tile) => (
          <GridTile
            key={"Tile:" + tile.vertical + "#" + tile.horizontal}
            tile={tile}
            onTileClickCallback={this.onTileClick}
          />
        ))}
      </div>
    ));
  }
}

export default PathFindingGrid;
