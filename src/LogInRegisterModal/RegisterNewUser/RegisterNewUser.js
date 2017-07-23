import React, { Component } from 'react';

export default class RegisterNewUser extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userName: '',
      userEmail: '',
      userPassword: ''
    }
  }

  render() {
    return (
      <div>
        Register New User
      </div>
    )
  }
}
