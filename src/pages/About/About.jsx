import React from "react";
import {
  Box,
  Grid,
  // Typography,
  Container,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import EmojiPeopleIcon from "@material-ui/icons/EmojiPeople";
import LocalCafeIcon from '@material-ui/icons/LocalCafe';
import LaptopIcon from '@material-ui/icons/Laptop';

const useStyles = makeStyles({
  aboutContainer: {
    margin: "3rem",
    opacity: "0.5",
    color: "black",
    background: "white",
    fontWeight: "bold",
    fontSize: "large",
  },
  icons: {
      textAlign: "center"
  }
});

const About = () => {
  const classes = useStyles();
  return (
    <Box className={classes.aboutContainer} component="div">
      <Grid container justify="center">
        <Grid item xs={12} sm={8} md={6}>
          <Container>
            <p>
              <EmojiPeopleIcon />
              Hi, I'm Stephany!
              <br />
              <br />
              In my previous life, I coached CrossFit and personal trained. I
              worked with hundreds of clients, listening to their wants and
              needs then writing a program to better their health, wellness, and
              be able to explore the world around them. Now, I've decided to
              take that same passion and drive into the world of technology.
              <br />
              <br />
              Receiving a Full Stack Web Development certificate from The
              Georgia Institute of Technology (Go Jackets!) and previously
              receiving a Bachelor's of Arts from Agnes Scott College, I plan to
              combine all this knowledge and experience to the technology field.
              The drive to learn daily and push through challenges excites me.
              <br />
              <br />
              Powered by VSCode and coffee, I turn concepts into websites.
            </p>
            <Box className={classes.icons}>
            <LocalCafeIcon/>
            <LaptopIcon/>
            </Box>
          </Container>
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
