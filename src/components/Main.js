import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Login from './Login'
import Home from './Home'
import AboutUs from './AboutUs'
import UserProfile from './UserProfile'
class Main extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/' component={Home}/>
          <Route exact path='/profile' component={UserProfile}/>
          <Route exact path='/about' component={() => <AboutUs userCount={25} />}/>
        </Switch>
      </main>
    );
  }
}

export default Main;
