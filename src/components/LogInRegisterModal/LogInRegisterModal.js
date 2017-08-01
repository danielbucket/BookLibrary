import    React, { Component }  from 'react';
import  { Route }               from 'react-router-dom';
import  { modalStyle,
          backdropStyle }       from './LogInRegisterModalCSS';
import    LogInUser             from '../LogInUser/LogInUser';
import    RegisterNewUser       from '../RegisterNewUser/RegisterNewUser';

export default class LogInRegisterModal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      username: '',
      password: ''
      }
    this.onChange = this.onChange.bind(this)
    this.loginUser = this.loginUser.bind(this)
  }

  onChange(e, type) {
    this.setState({
      [type]: e.target.value
    })
  }

  loginUser() {
    const userData = {
      email: this.state.email,
      pasword: this.state.password
    }

    this.props.login(userData)
  }


  render() {
    const { modalState, logInType, loggedInStatus } = this.props
    let renderStyle;

    if (!modalState) {
      return null
    }

    if (logInType === 'login') {
      renderStyle = (
        <div>
          <h4>Email:<input  type='email'
                            value={this.state.email}
                            onChange={e => this.onChange(e,'email')}/></h4>
          <h4>Password:<input type='password'
                              value={this.state.password}
                              onChange={e => this.onChange(e,'password')}/></h4>
          <button onClick={() => {  this.loginUser()
                                  }
                              }>Log In</button>
        </div>
      )
    }

    return (
      <section>
        <div style={modalStyle}>
          {renderStyle}
        </div>
        <div style={backdropStyle}></div>
      </section>
    )
  }
}
