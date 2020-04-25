import React from "react";
import AlgorithmSelector from "./AlgorithmSelector";
import TileTypeSelector from "./TileTypeSelector";
import AlgorithmBeginButton from "./AlgorithmBeginButton";

function PathFindingOptions() {
  return (
    <div className="container">
      <AlgorithmSelector />
      <TileTypeSelector />
      <AlgorithmBeginButton />
    </div>
  );
}

export default PathFindingOptions;
