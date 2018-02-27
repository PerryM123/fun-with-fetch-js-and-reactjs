import React, { Component } from 'react';
import PropTypes from 'prop-types';
import UserResults from './UserResults';
import './../css/AboutUs.css';

class AboutUs extends Component {
  constructor(props) {
    console.log("constructor!!!");
    super(props);
    const peopleCount  = this.props.userCount;
    this.state = ({
      names: [],
      people: [],
      item: "",
      peopleCount: peopleCount
    });
  }
  componentDidMount() {
    console.log("componentDidMount!!!");
    const url = 'https://randomuser.me/api/?results=' + this.state.peopleCount;
    fetch(url)
    .then(response => response.json())
    .then(data => {
      var peopleArray = this.state.people;
      var name = "";
      var email = "";
      var phone = "";
      var thumbnail = "";

      for (var x = 0; x < this.props.userCount; x++) {
        name = data.results[x].name.first + data.results[x].name.last;
        email = data.results[x].email;
        phone = data.results[x].phone;
        thumbnail = data.results[x].picture.thumbnail;
        var personObj = {
          name: name,
          email: email,
          phone: phone,
          thumbnail: thumbnail
        }
        peopleArray.push(personObj);
      }
      var arrayvar = this.state.people.slice();
      this.setState({ people: arrayvar });
    })
    .catch((error) => {
      console.log("There was an error", error);
    });
  }
  render() {
    const data = this.state.people;
    const listItems = data.map((dataItem, index) =>
      <li key={index}>
        <p>{dataItem.name}</p>
        <p><a href={dataItem.email}>{dataItem.email}</a></p>
        <p>{dataItem.phone}</p>
        <p><img src={dataItem.thumbnail}/></p>
      </li>
    );

    return (
      <div>
      <ol className="unordered-list">
      {listItems }
      </ol>
      </div>
    );
  }
}

this.propTypes = {
  userCount: PropTypes.number
};

export default AboutUs;
