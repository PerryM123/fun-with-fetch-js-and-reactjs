import React, { Component } from 'react';

class AboutUs extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      loading: true,
      text: ""
    });
  }
  componentDidMount() {
    setTimeout(() => this.setState({ loading: false }), 15); 
    const url = 'https://randomuser.me/api/?results=2';

    fetch(url) // Call the fetch function passing the url of the API as a parameter
  .then(response => response.json())
  .then(data => {
    this.setState({text: data.results[0].gender});
  })
  .catch((error) => {
    console.log("THere was an error", error);
  });
}
  render() {
    const { loading } = this.state;
    if(loading) { // if your component doesn't have to wait for an async action, remove this block 
      return null; // render null when app is not ready
    }
    return (
      <div id='fetch-me'>
        I am about us loading: this is: 
        <p>{this.state.text}</p>
      </div>
    );
  }
}

export default AboutUs;
