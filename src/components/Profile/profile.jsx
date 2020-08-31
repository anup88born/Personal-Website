import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import About from './about';
import Anup_Pic from './Anup_Pic.jpg';
import './profile';


class Profile extends Component {
  render() {
    return(
      <div> 
        <Grid>
          <Cell className="resume-right-col" col={6}>
            <div style={{textAlign: 'center'}}>
              <img
                src={Anup_Pic}
                alt="avatar"
                style={{height: '250px', width: '250px'}}
                 />
            </div>

              <About
                 label="First Name" 
                 description="Anup"  
              />
              <About 
                 label="Last Name"
                 description="Padakandla"  
              />
              <About 
                 label="Role"
                 description="Web Developer"  
              />
              <About 
                 label="Brief"
                 description="Full Stack Web Developer specializing in Javascript based ReactJs NodeJS"  
              />
              <About 
                 label="Address"
                 description="239/I, 2nd D Cross, 2nd B Main, Girinagar I Phase Bangalore-560085"  
              />
              <About 
                 label="Nationality"
                 description="Indian"  
              />
              <About 
                 label="Spoken Languages"
                 description="English Hindi Telugu Kannada"  
              />
               
          </Cell>
          
          <Cell className="resume-right-col" col={6}>
            <h2>Education</h2>
            <Education
              startYear={1992}
              endYear={2004}
              schoolName="Carmel School"
              schoolDescription="Carmel Schoool Padmanabhanagar is ICSE syllabus based"
               />

               <Education
                 startYear={2012}
                 endYear={2015}
                 schoolName="RNSIT"
                 schoolDescription="RNSIT is VTU Belgaum affiliated college"
                  />
                <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>Experience</h2>

            <Experience
              startYear={2015}
              endYear={2019}
              jobName="First Job"
              jobDescription="Ex-JK Technosoft Pvt Ltd employee"
              />

              <Experience
                startYear={2019}
                endYear={2020}
                jobName="Second Job"
                jobDescription="###[Description pending]"
                />
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                skill="javascript"
                progress={90}
                />
                <Skills
                  skill="HTML/CSS"
                  progress={95}
                  />
                  <Skills
                    skill="NodeJS"
                    progress={60}
                    />
                    <Skills
                      skill="React"
                      progress={70}
                      />
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Profile;
