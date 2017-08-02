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
    this.registerUser = this.registerUser.bind(this)
  }

  onChange(e, type) {
    this.setState({
      [type]: e.target.value
    })
  }

  loginUser() {
    const loginData = {
      email: this.state.email,
      password: this.state.password
    }

    this.props.login(loginData)
  }

  registerUser() {
    const registerData = {
      email: this.state.email,
      username: this.state.username,
      password: this.state.password
    }

// need to send this package to the server
    this.setState({
      email: '',
      ysername: '',
      password: ''
    })
  }


  render() {
    const { modalState, logInType, loggedInStatus } = this.props
    let renderStyle;

    if (!modalState) {
      return null
    }


    const loginRender = (
      <div>
        <h4>Email:<input  type='email'
                          value={this.state.email}
                          onChange={e => this.onChange(e,'email')}/></h4>
        <h4>Password:<input type='password'
                            value={this.state.password}
                            onChange={e => this.onChange(e,'password')}/></h4>

        <button onClick={() => {this.loginUser()} //WRONG!!

                            }>Log In</button>
      </div>
    )

    // const registerRender = (
    //   <div>
    //     <div>
    //       <h4>Email:<input  type='email'
    //                         value={this.state.email}
    //                         onChange={e => this.onChange(e,'email')}/></h4>
    //       <h4>Password:<input type='password'
    //                           value={this.state.password}
    //                           onChange={e => this.onChange(e,'password')}/></h4>
    //       <h4>User Name:<input  type='username'
    //                             value={this.state.username}
    //                             onChange={e => this.onChange(e, 'username')/></h4>
    //       <button onClick={() => {  this.loginUser()
    //                               }
    //                           }>Log In</button>
    //     </div>
    //   </div>
    // )


    return (
      <section>
        <div style={modalStyle}>
          {loginRender}
        </div>
        <div style={backdropStyle}></div>
      </section>
    )
  }
}
