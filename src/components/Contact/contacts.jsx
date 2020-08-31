import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import Anup_Pic from './Anup_Pic.jpg';
import Contact_Description from './contact_description';
import './contacts.scss';

class Contact extends Component {
  render() {
    return(
      <div >
        <Grid>
          <Cell  className="resume-right-col" col={12}>
            <div>
              <img
                src={Anup_Pic}
                alt="avatar"
                style={{height: '250px'}}
               />
            </div>
            <Contact_Description 
              label="Mobile"
              description="+91-9483595451"
            />
            <Contact_Description 
              label="Landline"
              description="080-26721822"
            />
            <Contact_Description 
              label="Email"
              description="anuppadakandla064@gmail.com"
            />
            <Contact_Description 
              label="Wesite URL"
              description="[yet to be hosted live]"
            />
          </Cell>
          
        </Grid>
      </div>
    )
  }
}

export default Contact;
