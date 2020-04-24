import React from "react";
import AppHeader from "./AppHeader";
import PathFindingOptions from "./PathFindingOptions";
import PathFindingGrid from "./PathFindingGrid";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { startTile: null, selectedTileType: "Start" };
  }

  render() {
    return (
      <div className="container-fluid">
        <AppHeader />
        <main className="container-fluid">
          <PathFindingOptions startTile={this.state.startTile} />
          <PathFindingGrid onTileClickCallback={this.onTileClick} />
        </main>
      </div>
    );
  }

  onTileClick = (tile) =>
    this.setState((prevState, props) => {
      if (prevState.startTile) prevState.startTile.state = "Default";
      tile.state = this.state.selectedTileType;
      return {
        startTile: tile,
      };
    });
}

export default App;
