import React from "react";
import AppHeader from "./AppHeader";
import PathFindingOptions from "./PathFindingOptions";
import PathFindingGrid from "./PathFindingGrid";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { startTile: null, endTile: null, selectedTileType: "Start" };
  }

  render() {
    return (
      <div className="container-fluid">
        <AppHeader />
        <main className="container-fluid">
          <PathFindingOptions
            startTile={this.state.startTile}
            endTile={this.state.endTile}
            onTileTypeChangedCallback={this.onTileTypeChanged}
          />
          <PathFindingGrid onTileClickCallback={this.onTileClick} />
        </main>
      </div>
    );
  }

  onTileTypeChanged = (selectedTileType) =>
    this.setState((prevState, props) => ({
      selectedTileType: selectedTileType,
    }));

  onTileClick = (tile) =>
    this.setState((prevState, props) => {
      tile.state = this.state.selectedTileType;

      if (this.state.selectedTileType === "Start") {
        if (prevState.startTile && tile !== prevState.startTile) prevState.startTile.state = "Default";
        return {
          startTile: tile,
          endTile: tile === prevState.endTile ? null : prevState.endTile,
        };
      }

      if (this.state.selectedTileType === "End") {
        if (prevState.endTile && tile !== prevState.endTile) prevState.endTile.state = "Default";
        return { endTile: tile, startTile: tile === prevState.startTile ? null : prevState.startTile };
      }

      return {
        startTile: tile === prevState.startTile ? null : prevState.startTile,
        endTile: tile === prevState.endTile ? null : prevState.endTile,
      };
    });
}

export default App;
