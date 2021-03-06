import    React, { Component }  from 'react';
import  { modalStyle }          from './LogInRegisterModalStyle';
import    LogInUser             from '../LogInUser/LogInUser';
import    RegisterNewUser       from '../RegisterNewUser/RegisterNewUser';


export default class LogInRegisterModal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      username: '',
      password: ''
      }
    this.onChange = this.onChange.bind(this)
    this.loginUser = this.loginUser.bind(this)
    this.registerUser = this.registerUser.bind(this)
    this.clearState = this.clearState.bind(this)
  }

  onChange(e, type) {
    this.setState({
      [type]: e.target.value
    })
  }

  clearState() {
    this.setState({
      email:'',
      username:'',
      password: ''
    })
  }

  loginUser() {
    const loginData = {
      email: this.state.email,
      password: this.state.password
    }
    this.props.login(loginData)
    this.props.modalStateSwitch(false)
    this.clearState()
  }

  registerUser() {
    // const registerData = {
    //   email: this.state.email,
    //   username: this.state.username,
    //   password: this.state.password
    // }

// need to send this package to the server
    // this.props.register(registerData)
    // this.props.loginStatus(false)
    this.clearState()
  }


  render() {
    if (!this.props.modalState) {
      return null
    }

    const {
      modalState, logInType,
      loggedInStatus
    } = this.props

    const {
      modalContainer, backdropStyle,
      loginBox, buttonBox, top,
      buttonContainer, closeModalBtnBox,
      closeModalBtn, modalInput, loginButton
    } = modalStyle

    let usernameInput = null
    let scrambledEggs = "Log In"

    if (logInType === 'register') {
      scrambledEggs = "Register"
      usernameInput = (
        <input  type='username'
                placeholder='enter desired username'
                value={this.state.username}
                onChange={e => this.onChange(e, 'username')}/>
      )
    }

    return (
      <section>
        <div style={modalContainer}>
          <div style={loginBox}>
            <div style={top}>
              <div style={buttonBox}>
                <input  type='email'
                        style={modalInput}
                        placeholder='enter email'
                        value={this.state.email}
                        onChange={e => this.onChange(e,'email')}/>
                <input  type='password'
                        style={modalInput}
                        placeholder='enter password'
                        value={this.state.password}
                        onChange={e => this.onChange(e,'password')}/>
                        {usernameInput}
                <button style={loginButton}
                        onClick={() => {
                          logInType === 'login' ? this.loginUser() : this.registerUser()
                        }}>{scrambledEggs}</button>
              </div>
              <div style={closeModalBtnBox}>
                <button style={closeModalBtn}
                        onClick={
                          () => this.props.modalStateSwitch(false)
                        }>X</button>
              </div>
            </div>
          </div>
        </div>
        <div style={backdropStyle}></div>
      </section>
    )
  }
}
