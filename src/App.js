import React, { useState } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>

          </Route>
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