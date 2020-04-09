import React from "react";

function TileTypeSelector() {
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
          ></input>
          Obstacle
        </label>
      </div>
    </div>
  );
}

export default TileTypeSelector;
