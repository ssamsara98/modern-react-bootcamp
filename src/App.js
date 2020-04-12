import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import PaletteList from "./components/PaletteList";
import Palette from "./components/Palette";
import SingleColorPalette from "./components/SingleColorPalette";

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
        render={(routeProps) => {
          return <PaletteList palettes={seedColors} {...routeProps} />;
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
      <Route
        exact
        path="/palette/:paletteId/:colorId"
        render={() => <SingleColorPalette />}
      />
    </Switch>

    // <div className="App">
    //   <Palette palette={generatePalette(seedColors[4])} />
    // </div>
  );
}

export default App;
