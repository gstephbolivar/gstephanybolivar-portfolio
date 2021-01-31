import React, { Component } from "react";
import projects from "../../projects.json";
import Project from "../../components/Project/Project";
import {
    Box,
    Grid,
    Typography
} from "@material-ui/core"

class Portfolio extends Component {
  state = {
    projects,
  };
  render() {
    return (
      <>
        <Box component="div">
          <Grid container justify="center">
            <Typography variant="h1">Portfolio</Typography>
          </Grid>
        </Box>
        {this.state.projects.map((projects) => (
          <Project
            key={projects.id}
            title={projects.title}
            image={projects.image}
            repo={projects.repository}
            deploy={projects.deployedSite}
            description={projects.description}
          />
        ))}
      </>
    );
  }
}

export default Portfolio;
