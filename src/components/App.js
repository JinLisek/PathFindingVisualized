import React from "react";
import { connect } from "react-redux";
import { setStartTile, setEndTile } from "../redux/actions";
import AppHeader from "./AppHeader";
import PathFindingOptions from "./PathFindingOptions";
import PathFindingGrid from "./PathFindingGrid";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { selectedTileType: "Start" };
  }

  render() {
    return (
      <div className="container-fluid">
        <AppHeader />
        <main className="container-fluid">
          <PathFindingOptions onTileTypeChangedCallback={this.onTileTypeChanged} />
          <PathFindingGrid onTileClickCallback={this.onTileClick} />
        </main>
      </div>
    );
  }

  onTileTypeChanged = (selectedTileType) =>
    this.setState((prevState, props) => ({
      selectedTileType: selectedTileType,
    }));

  onTileClick = (tile) => {
    tile.state = this.state.selectedTileType;

    if (this.state.selectedTileType === "Start") {
      if (this.props.startTile && tile !== this.props.startTile) this.props.startTile.state = "Default";
      this.props.setStartTile(tile);
      if (tile === this.props.endTile) this.props.setEndTile(null);
    } else if (this.state.selectedTileType === "End") {
      if (this.props.endTile && tile !== this.props.endTile) this.props.endTile.state = "Default";
      this.props.setEndTile(tile);
      if (tile === this.props.startTile) this.props.setStartTile(null);
    } else if (this.state.selectedTileType === "Obstacle") {
      if (tile === this.props.startTile) this.props.setStartTile(null);
      if (tile === this.props.endTile) this.props.setEndTile(null);
    }
  };
}

function mapStateToProps(state) {
  const { startTile, endTile } = state;
  return { startTile, endTile };
}

export default connect(mapStateToProps, { setStartTile, setEndTile })(App);
