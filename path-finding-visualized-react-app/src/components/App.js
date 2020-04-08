import React from "react";
import AppHeader from "./AppHeader";
import PathFindingOptions from "./PathFindingOptions";
import PathFindingGrid from "./PathFindingGrid";

function App() {
  return (
    <div className="container-fluid">
      <AppHeader />
      <main className="container-fluid">
        <PathFindingOptions />
        <PathFindingGrid />
      </main>
    </div>
  );
}

export default App;
