import React, { Component } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
class MyProfile extends Component {
 
    constructor(props) {
        super(props);
        var myprof = this

        axios.get('http://localhost:9000/users/profile')
        .then(function (response) {
          console.log(response);
          myprof.setState(response.data)
        }).catch(function (error) {
          // handle error
          console.log(error);
        
        })}
/*
      mySubmitHandler = (event) => {
        event.preventDefault();
        axios.get('/profile', {
          params: {
            username: "lexihoff"
          }
        })
        .then(function (response) {
          console.log(response);
          this.setState(response);
        });  
        
    }
*/
      myChangeHandler = (event) => {
        this.setState({username: event.target.value});
      }
      

      render() {
        return (
          <div className="container">
          <div className="jumbotron mt-5">
            <div className="col-sm-8 mx-auto">
              <h1 className="text-center">PROFILE</h1>
            </div>
            <table className="table col-md-6 mx-auto">
              <tbody>
              <img src={this?.state?.pfp} alt="Girl in a jacket"></img>
                <tr>
                  <td>{this?.state?.username}</td>
                </tr>
                <p>{this?.state?.description}</p>
              </tbody>
            </table>
          </div>
        </div>
        );
      }
    }

export default MyProfile;