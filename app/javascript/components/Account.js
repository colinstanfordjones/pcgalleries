import React from "react"
import PropTypes from "prop-types"

import { Button } from '@material-ui/core';

class Account extends React.Component {
  render () {
    return (
      <React.Fragment>
        First Name: {this.props.firstName}
        Last Name: {this.props.lastName}
        Phone Number: {this.props.phoneNumber}
        Email: {this.props.email}
        Address1: {this.props.address1}
        Address2: {this.props.address2}
        City: {this.props.city}
        State: {this.props.state}
        Zip Code: {this.props.zipCode}
      </React.Fragment>
    );
  }
}

Account.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  phoneNumber: PropTypes.string,
  email: PropTypes.string,
  address1: PropTypes.string,
  address2: PropTypes.string,
  city: PropTypes.string,
  state: PropTypes.string,
  zipCode: PropTypes.string
};
export default Account
