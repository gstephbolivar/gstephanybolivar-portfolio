import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Typography
} from "@material-ui/core";

// CSS Styles
const useStyles = makeStyles((theme) => ({
  footerContainer: {
    backgroundColor: "#222",
    color: "tan",
    width: "100%",
    position: "sticky",
    bottom: 0,
    textAlign: "center",
  },
}));
const Footer = () => {
  const classes = useStyles();

  return (
    <Box component="footer" className={classes.footerContainer}>
      <Typography>&copy;Copyright 2021 G. Stephany Bolivar</Typography>
    </Box>
  );
};

export default Footer;
