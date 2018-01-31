import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      stuff: "hi"
    });
  }
  componentWillMount() {
    /* Database prep ? Fetch stuff? */
  }

  render() {
    return (
      <div className="login">
        <h2>Login</h2>
        <p>Name: <input type="text" /></p>
        <p>Password: <input type="password" /></p>
        <p><input type="button" value="Login" /></p>
      </div>
    );
  }
}

export default Login;
