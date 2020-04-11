import React from "react";
import { Switch, Route } from "react-router-dom";

import Palette from "./components/Palette";
import seedColors from "./seedColors";
import { generatePalette } from "./colorHelpers";

function App() {
  return (
    <Switch>
      <Route
        exact
        path="/"
        render={() => {
          return <h1>PALETTE LIST GOES HERE</h1>;
        }}
      />
      <Route
        exact
        path="/palette/:id"
        render={() => {
          return <h1>INDIVIDUAL PALETTE</h1>;
        }}
      />
    </Switch>

    // <div className="App">
    //   <Palette palette={generatePalette(seedColors[4])} />
    // </div>
  );
}

export default App;
