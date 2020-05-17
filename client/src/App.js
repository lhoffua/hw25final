import React, { Component } from "react";
import logo from "./logo.svg";
import EditProfile from "./EditProfile";
import NavBar from "./NavBar";
import MyLoginForm from "./MyLoginForm";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import "./App.css";
import MyProfile from "./MyProfile";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { user: "" };
    }


    /*
    callAPI() {
        fetch("http://localhost:9000/user")
            .then(res => res.text())
            .then(res => this.setState({ apiResponse: res }))
            .catch(err => err);
    }

    componentDidMount() {
        this.callAPI();
    }*/

    render() {
        return ( /*
            <div className="App">
                <header id="root">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">{this.state.apiResponse}</p>
            </div>*/
    <Router>
        <div className="App">
          <NavBar />
          <Route exact path="/index" component={MyProfile} />
          <div className="container">
            <Route exact path="/login" component={MyLoginForm} />
            <Route exact path="/profile" component={MyProfile} />
            <Route exact path="/editprofile" component={EditProfile} />
            
          </div>
        </div>
      </Router>
        );
    }
}

export default App;