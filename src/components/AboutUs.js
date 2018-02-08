import React, { Component } from 'react';
import PropTypes from 'prop-types';
import UserResults from './UserResults'

class AboutUs extends Component {
  constructor(props) {
    super(props);
    const stuff  = this.props.userCount;
    var people = [];
    this.state = ({
      loading: true,
      gender: "",
      name: "",
      email: "",
      img_url: "",
      amount: stuff
    });
  }
  componentDidMount() {
    setTimeout(() => this.setState({ loading: false }), 15);
    const url = 'https://randomuser.me/api/?results=' + this.props.userCount;

    fetch(url) // Call the fetch function passing the url of the API as a parameter
  .then(response => response.json())
  .then(data => {
    console.log("someData" + data);
    this.setState({
      gender: data.results[0].gender,
      name: data.results[0].name.first + data.results[0].name.last,
      email: data.results[0].email,
      img_url: data.results[0].picture.thumbnail
    });

  })
  .catch((error) => {
    console.log("There was an error", error);
  });
}
  render() {
    var userMap = ['dog', 'cat', 'dude'];
    var userList = userMap.map((value, index) => {
      return (
        <li key={index}>{value}</li>
      );
    });
    const { loading } = this.state;
    if(loading) { // if your component doesn't have to wait for an async action, remove this block 
      return null; // render null when app is not ready
    }
    return (
      <div id='fetch-me'>
        <p>Count: {this.props.userCount}</p>
        {/*I am about us loading: this is:
        <p>Gender: {this.state.gender}</p>
        <p>Name: {this.state.name}</p>
        <p>Email: {this.state.email}</p>
        <p><img src={this.state.img_url}/></p>*/}
        <ul>{userList} </ul>
        <UserResults mapper={this.userMap} />
      </div>
    );
  }
}

this.propTypes = {
  userCount: PropTypes.number
};

export default AboutUs;
