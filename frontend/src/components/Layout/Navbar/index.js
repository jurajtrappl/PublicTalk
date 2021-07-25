import React from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logoutUser } from '../../../actions/authActions';

import './index.css';

class Navbar extends React.Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    if (!this.props.auth.isAuthenticated) {
      return (
        <nav style={{ height: "60px", backgroundColor: "#ffd524" }} className="navbar navbar-light">
          <div className="container justify-content-center">
            <Link style={{ color: "black", textDecoration: "none" }} to="/">
              <i style={{ color: "#55185d" }} className="material-icons">question_answer</i>
            </Link>
          </div>
        </nav>
      );
    } else {
      return (
        <nav style={{ height: "60px", backgroundColor: "#ffd524" }} className="navbar navbar-light">
          <div className="container justify-content-between">
            <Link style={{ color: "black", textDecoration: "none" }} to="/dashboard">
              <i style={{ color: "#55185d" }} className="material-icons">question_answer</i>
            </Link>
            <i style={{ color: "#55185d" }} className="material-icons" onClick={this.onLogoutClick}>logout</i>
          </div>
        </nav>
      )
    }
  }
}

Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(
  mapStateToProps,
  { logoutUser }
)(Navbar);