import React, { Component } from 'react';
import Home from '../../components/Home/home';
import {connect} from 'react-redux';
import * as actionCreators from '../../store/actions/index';
import LoginEntry from '../../components/login/LoginEntry';


class Entry extends Component {
  
  constructor() {
    super()
    this.state = {
      input: '',
      imageUrl: '',
      route: 'landingpage',
      user: {
        id: '',
        name: '',
        email: '',
        password: '',
        entries: '',
        joined: ''
      }
    }
  }

  route_change_handler = (route) => {
    this.setState({route: route})
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value})
  }

  onLoadUser = (data) => {
    this.setState({user: {
        id: data.id,
        name: data.name,
        email: data.email,
        entries: data.entries,
        joined: data.joined
    }})
  }

  onSignOut = () => {
    this.setState(
          {user: 
              {
                  id: '',
                  name: '',
                  email: '',
                  password: '',
                  entries: '',
                  joined: ''
              },
          }
    )
    this.setState({imageUrl:''})
  }

  // signOutHandler = () => {
	// 	this.onSignOut()
	// 	this.props.route_change_handler
	// }

  onClickDetect = () => {
    this.setState({imageUrl: this.state.input})
    fetch('http://localhost:3000/imageUrl', {
          method: 'post',
          headers: {'Content-Type':'application/json'},
          body: JSON.stringify({
              input: this.state.input
          }) 
    })
    .then(response => response.json())
    .then(response => {
        if (response) {
            fetch('http://localhost:3000/image', {
                method:'put',
                headers: {'Content-Type':'application/json'},
                body: JSON.stringify({
                  id: this.state.user.id
                })
            })
            .then(response => response.json())
            .then(count => {
                  Object.assign(this.state.user, {entries: count})
            })
        }
    })
  }

  render() {
            const { route } = this.state
              if (route === 'home') {
                    return (
                      <Home 
                          user={this.state.user} 
                          inputChange={this.onInputChange} 
                          imageUrl={this.state.imageUrl} 
                          routeChange={this.route_change_handler} 
                          detectClick={this.onClickDetect}
                        />
                    );
              } else if (route === 'landingpage') {
                return (
                <LoginEntry 
                  routeChange={this.route_change_handler} 
                  user={this.state.user} 
                  loadUser={this.onLoadUser} 
                />
                );
              }  





              // else if (route === 'signin') {
              //       return (
              //       <SignIn 
              //         user={this.state.user} 
              //         loadUser={this.onLoadUser} 
              //         routeChange={this.route_change_handler} 
              //       />
              //       );
              // } else if (route === 'register') {
              //       return ( 
              //       <Register 
              //         user={this.state.user} 
              //         loadUser={this.onLoadUser} 
              //         routeChange={this.route_change_handler} 
              //       />
              //       );
              // } 
              
        } 
}

// const mapDispatchToProps = dispatch => {
//   return {
//     route_change_handler: (route) => dispatch(actionCreators.route(route))
//   }
// }

// const mapStateToProps = state => {
//   return {
//     route: state.routeReducer.route,
//     anup: state.anupReducer.anup,
//     user: state.userReducer.user,
//     imageUrl: state.imageUrlReducer.imageUrl,
//     input: state.inputReducer.input
//   }
// }

export default Entry;
