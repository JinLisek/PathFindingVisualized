import React from "react";
import { connect } from "react-redux";
import { selectTileType } from "../redux/actions";

function TileTypeSelector(props) {
  return (
    <div className="container">
      <div className="form-check">
        <label>
          <input
            type="radio"
            name="tile-type"
            value="start"
            defaultChecked
            className="form-check-input"
            onClick={() => props.selectTileType("Start")}
          ></input>
          Start
        </label>
      </div>
      <div className="form-check">
        <label>
          <input
            type="radio"
            name="tile-type"
            value="end"
            className="form-check-input"
            onClick={() => props.selectTileType("End")}
          ></input>
          End
        </label>
      </div>
      <div className="form-check">
        <label>
          <input
            type="radio"
            name="tile-type"
            value="obstacle"
            className="form-check-input"
            onClick={() => props.selectTileType("Obstacle")}
          ></input>
          Obstacle
        </label>
      </div>
    </div>
  );
}

export default connect(null, { selectTileType })(TileTypeSelector);
