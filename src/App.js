import React, { useState, setState } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Homepage from "./Components/Pages/Homepage";
import ChallengeDetails from "./Components/Pages/ChallengeDetails";
import PersonalPage from "./Components/Pages/PersonalPage";
import Header from "./Components/Header";
import "./Styles/main.css";
import userdata from "./Data/user";
import randomWhole from "./HelperFunction/helper";
const username = "janice12"
function App() {
  //calling data here
  

  //set user
  //setUsername({username:"janice12"});
  const userdata2 = userdata.janice12
  //data call
  if (!username && !userdata2 ) {
    return <div>Loading!</div>;
  } else {
    console.log(username)
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => (
                <Homepage {...props} userdata={userdata2} username={username}/>
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

export default App;

//code snippet for writing data
//sorting function?
//write await?
// fs.readFile
//calls user data

//useparams
