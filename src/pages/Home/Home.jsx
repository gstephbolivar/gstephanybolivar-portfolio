import React from "react";
import { Typography, Avatar, Grid, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import avatar from "../../images/stephany2.png";
import Typed from "react-typed";
import "../Home/home.css";

// CSS Styles
const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin: theme.spacing(1),
  },
  title: {
    color: "burgundy",
    fontWeight: "bold"
  },
  subtitle: {
    color: "black",
    marginBottom: "3rem",
  },
  typedContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100vw",
    textAlign: "center",
    zIndex: 1,
  },
}));

const Home = () => {
  const classes = useStyles();
  return (
    <Box className={classes.typedContainer}>
      <Grid container justify="center">
        <Avatar
          className={classes.avatar}
          src={avatar}
          alt="Stephany Bolivar head shot"
        />
      </Grid>
      <Typography className={classes.title} variant="h4">
        <Typed strings={["Stephany Bolivar"]} typeSpeed={40} />
      </Typography>
      <br />
      <Typography className={classes.subtitle} variant="h5">
        <Typed
          strings={[
            "Software Developer",
            "Outdoor enthusiast",
            "Coffee fanatic",
          ]}
          typeSpeed={40}
          backspeed={60}
          loop
        />
      </Typography>
    </Box>
  );
};

export default Home;
