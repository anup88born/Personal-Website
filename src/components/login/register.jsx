import React from "react";
//import loginImg from "../../login.svg";
import laptop_login from './laptop_login.jpg';

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

export class Register extends React.Component {
  constructor(props) {
		super(props)
		this.state = {
			username: null,
			email: null,
			password: null,
      formErrors: {
        username: '',
        email: '',
        password: ''
      },
      submitError: '',
      successMsg: ''
		}
  }
  
  handleChange = e => {
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };
    let submitErrors = { ...this.state.submitError };
    switch (name) {
      case "username":
         formErrors.username = value.length < 11 ? "" : "Username exceeding 10 characters";
        break;
      case "email":
         formErrors.email = emailRegex.test(value)
          ? ""
          : "invalid email address";
          this.setState({submitErrors, submitError: ''})
        break;
      case "password":
         formErrors.password =
           value.length < 6 ? "minimum 6 characaters required" : "";
        break;
      default:
        break;
    }
    this.setState({ formErrors, [name]: value }, () => console.log('Register state: ',this.state));
  };

  handleSubmit = () => {
    let submitErrors = { ...this.state.submitError };
    let successMsg = { ...this.state.successMsg };
    const errorMsg = 'Error! Please enter all the fields'
    const doneMsg = 'Welcome! You are now a registered user. Kindly login for viewing portfolio'

    if (formValid(this.state)) {
      this.onSubmitRegister()
      this.setState({successMsg, successMsg: doneMsg}, () => console.log('Success! Registration is done!'))
    } else {
      this.setState({submitErrors, submitError: errorMsg}, () => console.log('Failed FORM VALIDATION! Form Submission Error! Fill all fields'))
    }
  }


	// onNameChange = e => {
	// 	this.setState({regname: e.target.value})
	// }

	// onEmailChange = e => {
	// 	this.setState({regemail: e.target.value})
	// }

	// onPasswordChange = e => {
	// 	this.setState({regpassword: e.target.value})
	// }

	onSubmitRegister = () => {
		fetch('http://localhost:3000/register', {
			method: 'post',
			headers: {'Content-Type':'application/json'},
			body: JSON.stringify({
				name: this.state.username,
				email: this.state.email,
				password: this.state.password
			})
		}) 
		.then(response => response.json())
		.then(user => {
      console.log('Server Response: ', user)
			if (user.id) {
        this.props.loadUser(user)	
      }
		})
	}

  render() {
    const { formErrors, submitError, successMsg } = this.state
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Register</div>
        <div className="content">
          <div className="image">
            <img src={laptop_login} style={{width: '75%', margin: 'auto'}} />
          </div>
          <div className="form" onSubmit={this.handleSubmit} noValidate>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input 
                className = {formErrors.username.length > 0 ? "error" : null}
                type="text" 
                name="username" 
                placeholder="username" 
                onChange={this.handleChange}
              />
              {formErrors.username.length > 0 && (
                <div class="alert alert-warning" role="alert">
                        {formErrors.username}
                </div>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input 
                className = {formErrors.email.length > 0 ? "error" : null}
                type="email" 
                name="email" 
                placeholder="email" 
                onChange={this.handleChange}
              />
              {formErrors.email.length > 0 && (
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
                onChange={this.handleChange}
              />
              {formErrors.password.length > 0 && (
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
            Register
          </button>
          {   (submitError.length > 0) ? (
                <div className="alert alert-danger alert-dismissable fade show" role="alert">
                    {submitError}
                </div> 
              )  : ((successMsg.length > 0) ?
                        (
                          <div className="alert alert-success alert-dismissable fade show" role="alert">
                            {successMsg}
                          </div>
                        ) :
                        (
                            <p></p>
                        )
                    )
          }
        </div>
      </div>
    );
  }
}
