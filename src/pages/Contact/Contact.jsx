import React from "react";
import { Box, Grid, Card, Typography, CardContent } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ContactBox from "../../components/ContactBox/ContactBox";

const useStyles = makeStyles({
    titleContainer: {
        opacity: "0.5",
        marginTop: "3rem",
        marginBottom: "3rem"
    },
    titleFont: {
        fontWeight: "bold",
        textAlign: "center"
    }
})
const Contact = () => {
    const classes= useStyles();
  return (
      <>
    <Box component="div">
      <Grid container justify="center">
        <Grid item xs={12} sm={8} md={6} >
          <Card className={classes.titleContainer}>
            <CardContent>
              <Typography className={classes.titleFont} variant="h2">Let's Create Something</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
    <Box component="div">
        <ContactBox />
    </Box>
    </>
  );
};

export default Contact;
