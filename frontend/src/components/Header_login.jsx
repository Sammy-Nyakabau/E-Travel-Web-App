import React, { Component } from "react";
import Login from "./Login";

class Header_login extends Component {
  constructor() {
    super();
    this.state = {
      showMe: false,
    };
  }
  operation() {
    this.setState({
      showMe: !this.state.showMe,
    });
  }
  render() {
    return (
      <div>
        {this.state.showMe ? <Login /> : null}
        <p style={{ cursor: "pointer" }} onClick={() => this.operation()}>
          Login
        </p>
      </div>
    );
  }
}
export default Header_login;
