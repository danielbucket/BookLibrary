import React, { Component } from 'react';
// import { createNewUser } from '../fetches/fetchCalls';
const uuidv4 = require('uuid/v4')


export default class RegisterNewUser extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      email: '',
      password: ''
    }
    this.onChange = this.onChange.bind(this)
    this.submit = this.submit.bind(this)
  }



  onChange(e, toChange) {
    this.setState({
      [toChange]: e.target.value
    })
  }

  submit() {
    this.props.logInNewUser(this.state)
  }

  render() {
    return (
      <div>
        <h3>Register New User</h3>
        <div>
          <h4>Name</h4>
          <input  type='text'
                  value={ this.state.username }
                  onChange={ e => this.onChange(e, 'username') } /></div>
        <div>
          <h4>Email</h4>
          <input  type='text'
                  value={ this.state.email }
                  onChange={ e => this.onChange(e, 'email') } /></div>
        <div>
          <h4>Password</h4>
          <input  type='text'
                  value={ this.state.password }
                  onChange={ e => this.onChange(e, 'password') } /></div>
        <button onClick={ () => this.submit(this.state) }>Submit</button>
      </div>
    )
  }
}
