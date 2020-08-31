import React from "react";
import loginImg from "../../login.svg";
import laptop_login from './laptop_login.jpg';
import validator from 'validator';



const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // validate form errors being empty
  Object.values(formErrors).forEach(val => {
    if (val.length > 0) {
      valid = false;
    }
  });

  // // validate the form was filled out
  Object.values(rest).forEach(val => {
    if (val === null) {
      valid = false;
    }
  });

  return valid;
};

export class Login extends React.Component {
  constructor(props) {
		super(props)
		this.state = {
			email: null,
      password: null,
      formErrors: {
        email: '',
        password: ''
      },
      submitError: ''
    };
  }

  handleSubmit = () => {
    let submitErrors = { ...this.state.submitError };
    const errorMsg='Error! Please enter all the fields'
    if (formValid(this.state)) {
      this.onSubmitSignIn()
    } else {
      this.setState({submitErrors, submitError: errorMsg}, () => console.log('Form Submission Error! Fill all fields'))
    }
  }
  
  handleChange = e => {
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };
    let submitErrors = { ...this.state.submitError };
    switch (name) {
      case "email":
         formErrors.email = emailRegex.test(value)
          ? ""
          : "invalid email address";
          this.setState({submitErrors, submitError: ''})
        break;
      case "password":
         formErrors.password =
           value.length < 2 ? "minimum 2 characaters required" : "";
        break;
      default:
        break;
    }
    this.setState({ formErrors, [name]: value }, () => console.log('Login state: ',this.state));
  };


  onSubmitSignIn = () => {
		fetch('http://localhost:3000/signin', {
			method: 'post',
			headers: {'Content-Type':'application/json'},
			body: JSON.stringify({
				email: this.state.email,
				password: this.state.password	
			})
		}) 
		.then(response => response.json())
		.then(user => {
      console.log(user)
			if (user.id) {
         this.props.loadUser(user)
         console.log('User state after loadUser function: ',this.state.user)
			}
    })
    this.props.routeChange('home')
   }

  render() {
    const { formErrors, submitError } = this.state
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Login</div>
        <div className="content">
          <div className="image">
            <img src={laptop_login} style={{width: '75%', margin: 'auto'}} />
          </div>
          <div className="form" onSubmit={this.handleSubmit} noValidate>
            <div className="form-group">
              <label htmlFor="email-address">Email</label>
              <input 
                className = {formErrors.email.length > 0 ? "error" : null}
                type="email" 
                name="email" 
                placeholder="email" 
                id="email"
                onChange= {this.handleChange}
              />
              {formErrors.email.length > 0 && (
                //<span className="errorMessage">{formErrors.email}</span>
                <div class="alert alert-warning" role="alert">
                        {formErrors.email}
                </div>
                )}
            </div>
            
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input 
                className = {formErrors.password.length > 0 ? "error" : null}
                type="password" 
                name="password" 
                placeholder="password" 
                id="password"
                onChange= {this.handleChange} 
              />
              {formErrors.password.length > 0 && (
                //<span className="errorMessage">{formErrors.password}</span>
                <div class="alert alert-warning" role="alert">
                        {formErrors.password}
                </div>
                )}
            </div>
          </div>
        </div>
        <div className="footer">
          <button 
            type="button" 
            className="btn"
            onClick={this.handleSubmit}
          >
            Login
          </button>
          {submitError.length > 0 && (
                //<span className="errorMessage">{submitError}</span>
               <div class="alert alert-danger alert-dismissable fade show" role="alert">
                   {submitError}
                </div>
          )}
        </div>
      </div>
    );
  }
}
