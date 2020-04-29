import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Homepage from "./Components/Pages/Homepage";
import ChallengeDetails from "./Components/Pages/ChallengeDetails"
import Header from "./Components/Header"
import "./Styles/main.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />

        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route>
            
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


//useparams