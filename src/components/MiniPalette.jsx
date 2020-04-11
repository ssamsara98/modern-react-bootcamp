import React from "react";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  main: {
    backgroundColor: "purple",
    border: "3px solid teal",
  },
  secondary: {
    backgroundColor: "pink",
    "& h1": {
      color: "white",
      "& span": {
        backgroundColor: "yellow",
      },
    },
  },
};

function MiniPalette(props) {
  const { classes } = props;
  console.log(classes.main);
  return (
    <div className={classes.main}>
      <h1>Mini Palette</h1>
      <section className={classes.secondary}>
        <h1>
          Mini Palette
          <span>a;sdfl</span>
        </h1>
        <span>asdfl</span>
      </section>
    </div>
  );
}

export default withStyles(styles)(MiniPalette);
