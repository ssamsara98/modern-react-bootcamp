import React, { Component } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Link } from "react-router-dom";
import chroma from "chroma-js";

import "./ColorBox.css";

export default class ColorBox extends Component {
  constructor(props) {
    super(props);
    this.state = { copied: false };
    this.changeCopyState = this.changeCopyState.bind(this);
  }

  changeCopyState() {
    this.setState({ copied: true }, () => {
      setTimeout(() => {
        this.setState({ copied: false });
      }, 1500);
    });
  }

  render() {
    const { name, background, moreUrl, showLink } = this.props;
    const { copied } = this.state;
    const isDarkColor = chroma(background).luminance() <= 0.1;
    const isLightColor = chroma(background).luminance() >= 0.7;
    return (
      <CopyToClipboard
        text={this.props.background}
        onCopy={this.changeCopyState}
      >
        <div className="ColorBox" style={{ background: background }}>
          {/* copy overlay */}
          <div
            className={`copy-overlay ${copied && "show"}`}
            style={{ background }}
          />
          <div className={`copy-msg ${copied && "show"}`}>
            <h1>Copied!</h1>
            <p className={`${isLightColor && "dark-text"}`}>{background}</p>
          </div>
          {/* copy container */}
          <div className="copy-container">
            <div className="box-content">
              <span className={`${isDarkColor && "light-text"}`}>{name}</span>
            </div>
            <button className={`copy-button ${isLightColor && "dark-text"}`}>
              Copy
            </button>
          </div>
          {showLink && (
            <Link
              to={moreUrl}
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <span className={`see-more ${isLightColor && "dark-text"}`}>
                MORE
              </span>
            </Link>
          )}
        </div>
      </CopyToClipboard>
    );
  }
}
