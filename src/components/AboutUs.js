import React, { Component } from 'react';
import PropTypes from 'prop-types';
import UserResults from './UserResults'

class AboutUs extends Component {
  constructor(props) {
    console.log("constructor!!!");
    super(props);
    const stuff  = this.props.userCount;
    this.state = ({
      peoples: ""
    });
  }
  componentDidMount() {
    console.log("componentDidMount!!!");
    setTimeout(() => this.setState({ loading: false }), 15);
    const url = 'https://randomuser.me/api/?results=' + this.props.userCount;

    fetch(url) // Call the fetch function passing the url of the API as a parameter
  .then(response => response.json())
  .then(data => {
    var peoplesArray = [];
    var person = "";
    for (var x = 0; x < this.props.userCount; x++) {
      var person = {
        gender: data.results[x].gender,
        name: data.results[x].name.first + data.results[x].name.last,
        email: data.results[x].email,
        img_url: data.results[x].picture.thumbnail
      };
      console.log(x + ") person's name: " + person.name);
      peoplesArray.push(person);
    }


    let people => peoplesArray.map(value, index) {
      <li key="index">{value}</li>
    }
    this.setState({
      peoplesMap: peoplesArray
    });

  })
  .catch((error) => {
    console.log("There was an error", error);
  });
}
  render() {
    console.log("Render!!!");

    // About Map iterator parameters
    // 1st parameter will always be the value of the index
    // 2nd parameter will always be the value's index
    // var userList = tempArray.map((value, index) => {
    //   return (
    //     <li key={index}>{value}</li>
    //   );
    // });
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
        <ul>___{tempArray[0].name}___</ul>
        <UserResults mapper={this.userMap} />
      </div>
    );
  }
}

this.propTypes = {
  userCount: PropTypes.number
};

export default AboutUs;
