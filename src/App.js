import React, { useState } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Categories from "./Components/Categories";

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
        <Categories />
        <Switch>
          <Route exact path="/"></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

//code snippet for writing data
//sorting function?
//write await?
// fs.readFile
