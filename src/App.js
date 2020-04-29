import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Homepage from "./Components/Pages/Homepage";

import Header from "./Components/Header"
import "./Styles/main.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        
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
