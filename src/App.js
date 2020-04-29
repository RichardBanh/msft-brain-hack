import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Processcards from "./Components/Processcards";

import "./Styles/main.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="header">
          <Link to="/" className="header__left"></Link>
          <div className="header__right">
            <Link to="" className="header__right-link">
              <h3 className="header__right-item">Explore</h3>
            </Link>
            <Link to="" className="header__right-link">
              <h3 className="header__right-item">My Challenges</h3>
            </Link>
            <Link to="" className="header__right-link">
              <h3 className="header__right-item">My Profile</h3>
            </Link>
            <Link to="" className="header__right-link">
              <h3 className="header__right-item">Sign Out</h3>
            </Link>
          </div>
        </div>
        <Processcards />
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

//code snippet for writing data
//sorting function?
//write await?
// fs.readFile
