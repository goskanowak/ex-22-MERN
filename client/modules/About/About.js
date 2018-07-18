import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Import Style
import styles from './About.css';

class About extends Component {
  render() {
    return (
      <div>
        <h2>About Us</h2>
        <p>Lorem ipsum </p>
      </div>
    );
  }
}

export default About;
