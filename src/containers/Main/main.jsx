import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from '../../components/HomePage/homepage';
import AboutMe from '../../components/AboutMe/aboutme';
import Contact from '../../components/Contact/contacts';
import Projects from '../../components/Project/projects';
import Profile from '../../components/Profile/profile';
import Home from '../../components/Home/home';
import LoginEntry from '../../components/login/LoginEntry';



const Main = () => (
  <Switch>
    <Route exact path="/homepage" component={HomePage} />
    <Route path="/aboutme" component={AboutMe} />
    <Route path="/contact" component={Contact} /> 
    <Route path="/projects" component={Projects} />
    <Route path="/profile" component={Profile} />
  </Switch>
)

export default Main;
