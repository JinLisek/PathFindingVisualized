import React from "react";

class GridTile extends React.Component {
  constructor(props) {
    super(props);

    this.state = { colour: this.props.defaultColour };
    this.props.tile.registerOnStateChangeObserver(this.onStateChange);
  }

  render() {
    return (
      <div
        className={"border d-inline-block " + this.state.colour}
        style={{ width: "30px", height: "30px", fontSize: 10 }}
        onClick={this.onTileClick}
      ></div>
    );
  }

  onTileClick = () => this.props.onTileClickCallback(this.props.tile);

  onStateChange = (newState) => {
    if (newState === "Default") this.changeTileColour(this.props.defaultColour);
    else if (newState === "Start") this.changeTileColour("bg-success");
    else if (newState === "Visited") this.changeTileColour("bg-warning");
  };

  changeTileColour = (newColour) =>
    this.setState((prevState, props) => ({
      colour: newColour,
    }));
  changeTileState = (newState) => (this.props.tile.state = newState);
}

GridTile.defaultProps = {
  defaultColour: "bg-white",
};

export default GridTile;
