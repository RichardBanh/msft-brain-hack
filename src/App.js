import React, { useState, setState, useEffect, Component } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Homepage from "./Components/Pages/Homepage";
import ChallengeDetails from "./Components/Pages/ChallengeDetails";
import PersonalPage from "./Components/Pages/PersonalPage";
import Header from "./Components/Header";
import "./Styles/main.css";
import axios from "axios";
import { API, password, email } from "./Config/config";

import randomWhole from "./HelperFunction/helper";

// function App() {
//   //calling data here
//   const [userd, setuserdata] = useState(null);
//   const [username, setUsername] = useState();
//   //set user
//   //setUsername({username:"janice12"});
//   useEffect(() => {
//     setUsername("janice12");
//     setuserdata(userdata.username);
//   });
//   //data call
//   if (!userd) {
//     return <div>Loading!</div>;
//   } else {
//     return (
//       <BrowserRouter>
//         <div className="App">
//           <Header />
//           <Switch>
//             <Route
//               exact
//               path="/"
//               render={(props) => (
//                 <Homepage {...props} userdata={userd} username={username} />
//               )}
//             />
//             <Route path="/ChallengeDetails">
//               <ChallengeDetails />
//             </Route>
//             <Route
//               path="/PersonalPage"
//               render={(props) => <PersonalPage {...props} />}
//             />
//           </Switch>
//         </div>
//       </BrowserRouter>
//     );
//   }
// }

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userdata: "",
      username: null,
    };
  }
  componentDidMount() {
    axios({
      method: "POST",
      url: API + "/login",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
        "Accept": "Token",
        "Access-Control-Allow-Origin": "*",
      },
      data: {
        email: email,
        password: password,
      },
    }).then((res) => {
      console.log(res);
    });

    this.setState({ userdata: "", username: "" });
  }

  render() {
    if (!this.state.userdata) {
      return <div>Loading!</div>;
    } else {
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
                    userdata={this.state.userdata}
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
