import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Grid, Card, CardContent, Typography } from "@material-ui/core";
import EmailIcon from "@material-ui/icons/Email";
import SmartphoneIcon from "@material-ui/icons/Smartphone";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FormatAlignJustifyIcon from '@material-ui/icons/FormatAlignJustify';

const useStyles = makeStyles({
  cardContainer: {
    opacity: "0.5",
    color: "red",
    marginBottom: "3rem"
  },
});
const ContactBox = () => {
  const classes = useStyles();
  return (
    <Box component="div">
      <Grid container justify="center">
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardContent>
              <Typography variant="h4"><EmailIcon/>Email:</Typography>
              <Typography variant="h5">  <a href="mailto: g.stephanybolivar@gmail.com"> g.stephanybolivar@gmail.com</a></Typography>
              <br />
              <Typography variant="h4"><SmartphoneIcon/>Phone Number:</Typography>
              <Typography variant="h5"><a href="tel:770-789-3209">770-789-3209</a></Typography>
              <br />
              <Typography variant="h4"><GitHubIcon/>GitHub:</Typography>
              <Typography variant="h5"><a href="https://github.com/gstephbolivar"> @gstephbolivar </a></Typography>
              <br />
              <Typography variant="h4"><LinkedInIcon/>LinkedIn:</Typography>
              <Typography variant="h5"><a href="https://www.linkedin.com/in/gstephanybolivar/">G. Stephany Bolivar</a></Typography>
              <br />
              <Typography variant="h4"><FormatAlignJustifyIcon/>Resume:</Typography>
              <Typography variant="h5"><a href={process.env.Public_URL +"/assets/Resume/G.StephanyBolivar.resume.pdf"} download="G. Stephany Bolivar Resume">View/Download</a></Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactBox;
