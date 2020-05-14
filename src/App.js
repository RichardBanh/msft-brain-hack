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
      token: null,
    };
  }
  componentDidMount() {
    this.setState({ token: !!localStorage.getItem("token") });
  }
  setUsername(username) {
    this.setState({ username: username });
  }
  setToken(trueorfalse) {
    this.setState({ token: trueorfalse });
  }
  render() {
    if (!this.state.token) {
      return (
        <LoginPage
          setUsername={this.setUsername.bind(this)}
          setToken={this.setToken.bind(this)}
        />
      );
    } else {
      return (
        <BrowserRouter>
          <div className="App">
            <Header setToken={this.setToken.bind(this)} />
            <Switch>
              <Route
                exact
                path="/"
                render={(props) => (
                  <Homepage {...props} username={this.state.username} />
                )}
              />
              <Route path="/ChallengeDetails">
                <ChallengeDetails />
              </Route>
              <Route
                path="/PersonalPage"
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
