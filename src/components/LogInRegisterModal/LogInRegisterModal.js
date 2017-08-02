import    React, { Component }  from 'react';
import  { Route }               from 'react-router-dom';
import  { modalStyle }          from './LogInRegisterModalStyle';
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
    const { modalState, logInType, loggedInStatus, modalStateSwitch } = this.props
    const { modalContainer, backdropStyle,
            loginBox, buttonBox, top,
            buttonContainer, closeModalBtnBox,
            closeModalBtn, modalInput, loginButton } = modalStyle
    let renderStyle;

    if (!modalState) {
      return null
    }


    const loginRender = (
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
            <button style={loginButton}
                    onClick={() => {this.loginUser()}}>Log In</button>
          </div>
        <div style={closeModalBtnBox}>
          <button  style={closeModalBtn}
                  onClick={() => modalStateSwitch(false)}>X</button>
        </div>
      </div>
      <div>
      </div>
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
        <div style={modalContainer}>
          {loginRender}
        </div>
        <div style={backdropStyle}></div>
      </section>
    )
  }
}
