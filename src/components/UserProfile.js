import React, { Component } from 'react';

class UserProfile extends Component {
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
      Profile here
      </div>
    );
  }
}

export default UserProfile;
