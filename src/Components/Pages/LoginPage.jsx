import React, { Component, setState } from "react";
import { dataCall } from "../../HelperFunction/helper";
//create login page
//on submit

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "" };
  }
  Login = (e) => {
    e.preventDefault();
    console.log(this.state.email, this.state.password);
    const data = {
      email: this.state.email,
      password: this.state.password,
    }
    console.log(data);
    dataCall("POST", "/login", data);
  };

  Change = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <div className='Modal'>
        <div className='messageofSubmit'></div>
        <div>
          <input type='text' name='email' id='' onChange={this.Change} />
          <input type='password' name='password' id='' onChange={this.Change} />
          <button onClick={this.Login}>Submit</button>
        </div>
      </div>
    );
  }
}

export default LoginPage;
