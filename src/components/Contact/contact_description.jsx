import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Contact_Description extends Component {
  render() {
    return(
      <Grid>
        <Cell col={6}>
          <p>{this.props.label}</p>
        </Cell>
        <Cell col={6}>
          <p>{this.props.description}</p>
        </Cell>
      </Grid>
    )
  }
}

export default Contact_Description;
