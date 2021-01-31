import React from "react";
import { makeStyles } from "@material-ui/core/styles";

// CSS Styles
const useStyles = makeStyles((theme) => ({
  footerContainer: {
    backgroundColor: "#222",
    color: "tan",
    width: "100%",
    position: "fixed",
    bottom: 0,
    textAlign: "center"
  },
}));
const Footer = () => {
  const classes = useStyles();

  return (
      <footer className={classes.footerContainer}>
      <h3>Copyright 2020</h3>
    </footer>
  );
};

export default Footer;
