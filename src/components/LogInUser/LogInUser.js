import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { logInStyle } from './LogInCSS';

export default class LogInUser extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userName: '',
      email: '',
      registeredUsers: this.props.registeredUsers
    }
    this.onChange   = this.onChange.bind(this)
    this.logInClick = this.logInClick.bind(this)
  }

  onChange(e, toChange) {
    this.setState({
      [toChange]: e.target.value
    })
  }

  logInClick() {
    console.log(this.props);
    this.props.logInUserConnector()
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
        <Link to='/register'>
          <button>New To This Shit? Yeah, me too.</button>
        </Link>
      </div>
    )
  }
}
