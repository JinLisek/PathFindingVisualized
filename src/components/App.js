import React from "react";
import { connect } from "react-redux";
import { setStartTile, setEndTile } from "../redux/actions";
import AppHeader from "./AppHeader";
import PathFindingOptions from "./PathFindingOptions";
import PathFindingGrid from "./PathFindingGrid";

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <AppHeader />
        <main className="container-fluid">
          <PathFindingOptions />
          <PathFindingGrid onTileClickCallback={this.onTileClick} />
        </main>
      </div>
    );
  }

  onTileClick = (tile) => {
    tile.state = this.props.selectedTileType;

    if (this.props.selectedTileType === "Start") {
      if (this.props.startTile && tile !== this.props.startTile) this.props.startTile.state = "Default";
      this.props.setStartTile(tile);
      if (tile === this.props.endTile) this.props.setEndTile(null);
    } else if (this.props.selectedTileType === "End") {
      if (this.props.endTile && tile !== this.props.endTile) this.props.endTile.state = "Default";
      this.props.setEndTile(tile);
      if (tile === this.props.startTile) this.props.setStartTile(null);
    } else if (this.props.selectedTileType === "Obstacle") {
      if (tile === this.props.startTile) this.props.setStartTile(null);
      if (tile === this.props.endTile) this.props.setEndTile(null);
    }
  };
}

function mapStateToProps(state) {
  const { startTile, endTile, selectedTileType } = state;
  return { startTile, endTile, selectedTileType };
}

export default connect(mapStateToProps, { setStartTile, setEndTile })(App);
