import React from "react";

class GridTile extends React.Component {
  constructor(props) {
    super(props);
    this.state = { colour: this.props.defaultColour };
  }

  render() {
    return (
      <div
        className={"border d-inline-block " + this.state.colour}
        style={{ width: "30px", height: "30px", fontSize: 10 }}
        onMouseEnter={this.onHoverStart}
        onMouseLeave={this.onHoverEnd}
      ></div>
    );
  }

  onHoverStart = () => this.setState({ colour: "bg-secondary" });

  onHoverEnd = () => this.setState({ colour: this.props.defaultColour });
}

GridTile.defaultProps = {
  defaultColour: "bg-white",
};

export default GridTile;
