import React from "react";
import AlgorithmSelector from "./AlgorithmSelector";
import TileTypeSelector from "./TileTypeSelector";

function PathFindingOptions() {
  return (
    <div className="container">
      <AlgorithmSelector />
      <TileTypeSelector />
    </div>
  );
}

export default PathFindingOptions;
