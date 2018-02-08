import React, { Component } from 'react';
import PropTypes from 'prop-types';

class UserResults extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    
  }
  render() {
    return (
      <div>
        <p>s</p>
        <ul>
        {this.props.mapper}
        </ul>
      </div>
    );
  }
}

this.propTypes = {
  userCount: PropTypes.number
};

export default UserResults;
