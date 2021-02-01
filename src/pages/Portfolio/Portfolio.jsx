import React, { Component } from "react";
import projects from "../../projects.json";
import Project from "../../components/Project/Project";
import { Box, Grid, Typography, Card, CardContent } from "@material-ui/core";
import "../Portfolio/Portfolio.css";

class Portfolio extends Component {
  state = {
    projects,
  };
  render() {
    return (
      <>
        <Box component="div">
          <Grid className="container" container justify="center" >
            <Grid item xs={12} sm={8} md={6}>
              <Card>
                <CardContent>
                  <Typography variant="h2">Portfolio</Typography>
                </CardContent>
              </Card>
            </Grid>
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
