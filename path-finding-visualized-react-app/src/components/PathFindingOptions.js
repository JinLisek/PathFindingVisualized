import React from "react";
import AlgorithmSelector from "./AlgorithmSelector";
import TileTypeSelector from "./TileTypeSelector";
import AlgorithmBeginButton from "./AlgorithmBeginButton";

function PathFindingOptions(props) {
  return (
    <div className="container">
      <AlgorithmSelector />
      <TileTypeSelector onTileTypeChangedCallback={props.onTileTypeChangedCallback} />
      <AlgorithmBeginButton startTile={props.startTile} />
    </div>
  );
}

export default PathFindingOptions;
