import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Homepage from "./Components/Pages/Homepage";
import ChallengeDetails from "./Components/Pages/ChallengeDetails";
import PersonalPage from "./Components/Pages/PersonalPage";
import Header from "./Components/Header";
import "./Styles/main.css";
import userdata from "./Data/user";
import randomWhole from "./HelperFunction/helper";

function App() {
  //calling data here
  
  if(!userdata){
    return <div>Loading!</div>
  } else {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => <Homepage {...props} userdata={userdata} />}
          />
          <Route path="/ChallengeDetails">
            <ChallengeDetails />
          </Route>
          <Route path="/PersonalPage" render={(props) => <PersonalPage />} />
        </Switch>
      </div>
    </BrowserRouter>
  );}
}

export default App;

//code snippet for writing data
//sorting function?
//write await?
// fs.readFile
//calls user data

//useparams
