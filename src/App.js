import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Palette from "./components/Palette";
import seedColors from "./seedColors";
import { generatePalette } from "./colorHelpers";

const findPalette = (id) => {
  return seedColors.find(function (palette) {
    return palette.id === id;
  });
};

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
        render={(routeProps) => {
          const palette = findPalette(routeProps.match.params.id);
          return palette ? (
            <Palette palette={generatePalette(palette)} />
          ) : (
            <Redirect to="/" />
          );
        }}
      />
    </Switch>

    // <div className="App">
    //   <Palette palette={generatePalette(seedColors[4])} />
    // </div>
  );
}

export default App;
