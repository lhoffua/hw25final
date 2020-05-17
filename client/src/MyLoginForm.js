import React, { Component } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import { Redirect } from 'react-router-dom';

class MyLoginForm extends Component {
 
    constructor(props) {
        super(props);
        this.state = { 
            username: 'User',
            password: '' };
      }

      myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({ [nam]: val });
      }

      mySubmitHandler = (event) => {
        event.preventDefault();
        const user = {
          username: this.state.username,
          password: this.state.password
        }
        axios.post('http://localhost:9000/users/login', {
          username: user.username,
          password: user.password
        })
        .then(function (response) {
          if (response==true) {
            
          }
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
      }

      nameHandler = (event) => {
        this.setState({username: event.target.value});
      }
      pwdHandler = (event) => {
        this.setState({password: event.target.value});
      }

      

      render() {
        return (
          <form onSubmit={this.mySubmitHandler}>
              <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  name="username"
                  id="firstNumber"
                  className="form-control"
                  onChange={this.myChangeHandler}

                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  id="firstNumber"
                  className="form-control"
                  onChange={this.myChangeHandler}
                />
              </div>
              <button
                type="submit"
                className="btn btn-lg btn-primary btn-block"
              >
                Sign in
              </button>
            </form>
        );
      }
    }

//ReactDOM.render(<MyLoginForm />, document.getElementById('loginform'));
export default MyLoginForm;