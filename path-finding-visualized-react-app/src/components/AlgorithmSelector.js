import React from "react";

function AlgorithmSelector() {
  return (
    <div className="container">
      <label>Selected algorithm: </label>
      <select>
        <option>BTS</option>
        <option>Djikstra</option>
        <option>A*</option>
      </select>
    </div>
  );
}

export default AlgorithmSelector;
