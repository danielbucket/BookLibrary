import React, { Component } from 'react';
import { logInStyle } from './LogInCSS';

export default class LogInUser extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userName: '',
      email: '',

    }
    this.onChange = this.onChange.bind(this)
    this.onClick  = this.logInClick.bind(this)

  }

  onChange(e, toChange) {
    this.setState({
      [toChange]: e.target.value
    })
  }

  logInClick() {
    this.props.logInUser()
  }

  render() {
    return (
      <div>
        <section>
          <div>UserName:</div>
          <input  type='text'
                  value={ this.state.userName }
                  onChange={ e => { this.onChange(e, 'userName') } } />
        </section>
        <section>
          <div>Email:</div>
          <input  type='email'
                  value={ this.state.email }
                  onChange={ e => { this.onChange(e, 'email') } } />
        </section>
        <button onClick={ () => {this.logInClick()} }>Log In</button>
        <button onClick={ () => { } }>New User</button>
      </div>
    )
  }
}
