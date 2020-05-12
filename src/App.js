import React, { useState, setState, useEffect, Component } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Homepage from "./Components/Pages/Homepage";
import ChallengeDetails from "./Components/Pages/ChallengeDetails";
import PersonalPage from "./Components/Pages/PersonalPage";
import Header from "./Components/Header";
import LoginPage from "./Components/Pages/LoginPage";
import "./Styles/main.css";


import randomWhole from "./HelperFunction/helper";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userdata: "",
      username: null,
    };
  }
  componentDidMount() {
    this.setState({ userdata: "", username: "" });
  }
  setUsername(username){
    this.setState({username:username})
  }
  render() {
    if (!this.state.username) {
      return <LoginPage setUsername={this.setUsername.bind(this)}/>;
    } else {
      console.log(document.cookie)
      return (
        <BrowserRouter>
          <div className='App'>
            <Header />
            <Switch>
              <Route
                exact
                path='/'
                render={(props) => (
                  <Homepage
                    {...props}
                    username={this.state.username}
                  />
                )}
              />
              <Route path='/ChallengeDetails'>
                <ChallengeDetails />
              </Route>
              <Route
                path='/PersonalPage'
                render={(props) => <PersonalPage {...props} />}
              />
            </Switch>
          </div>
        </BrowserRouter>
      );
    }
  }
}
export default App;

//code snippet for writing data
//sorting function?
//write await?
// fs.readFile
//calls user data

//useparams
