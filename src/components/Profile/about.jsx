import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import './profile.scss';

class About extends Component {
  render() {
    return(
      <Grid>
        <Cell col={3}>
          <p>{this.props.label}</p>
        </Cell>
        <Cell col={3}>
          <p>{this.props.description}</p>
        </Cell>
      </Grid>
    )
  }
}

export default About;
