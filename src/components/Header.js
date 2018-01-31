import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className="main-header">
      <ul>
        <li><a href="login/"> Login </a></li>
        <li><a href="/"> Home </a></li>
        <li><a href="/profile"> User Profile </a></li>
        <li><a href="/about"> Sch </a></li>
      </ul>
      </div>
    );
  }
}

export default Header;
