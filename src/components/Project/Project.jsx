import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Grid,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles({
  cardContainer: {
    maxWidth: 500,
    margin: "3rem auto",
  },
});

const Project = (props) => {
  const classes = useStyles();
  return (
    <Box component="div">
      <Grid container justify="center">
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt={props.title}
                height="auto"
                image={process.env.PUBLIC_URL + props.image}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  {props.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {props.description}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary" href={props.repo}>
                GitHub
              </Button>
              <Button size="small" color="primary" href={props.deploy}>
                Live
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Project;
