import React, { Component } from "react";
import ColorBox from "./ColorBox";

import "./Palette.css";

export default class Palette extends Component {
  render() {
    const colorBoxes = this.props.colors.map((color, index) => {
      return (
        <ColorBox background={color.color} name={color.name} key={index} />
      );
    });
    return (
      <div className="Palette">
        {/* Navbar goes here */}
        <div className="Palette-colors">{/* bunch of color boxes */}</div>
        {/* footer eventually */}
        {colorBoxes}
      </div>
    );
  }
}
