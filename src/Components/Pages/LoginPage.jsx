import React, { Component, setState } from "react";
import { dataCall } from "../../HelperFunction/helper";
//create login page
//on submit

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "", message: "" };
  }
  Login = async (e) => {
    e.preventDefault();
    console.log(this.state.email, this.state.password);
    const report = { success: null, error: null, data: null };
    const data = {
      email: this.state.email,
      password: this.state.password,
    };
    await dataCall("POST", "/login", data, report);
    if (report.success === true) {
      this.props.setUsername(this.state.email);
      localStorage.setItem("token", report.data.token);
      this.props.setToken(true);
    } else {
      this.setState({ message: report.error });
    }
  };

  Change = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <div className="Modal">
        <div className="messageofSubmit">{this.state.message}</div>
        <div>
          <input type="text" name="email" id="" onChange={this.Change} />
          <input type="password" name="password" id="" onChange={this.Change} />
          <button onClick={this.Login}>Submit</button>
        </div>
      </div>
    );
  }
}

export default LoginPage;
