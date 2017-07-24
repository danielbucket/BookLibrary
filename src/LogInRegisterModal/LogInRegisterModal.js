import    React           from 'react';
import  { Route }         from 'react-router-dom';
import  { modalStyle,
          backdropStyle } from './LogInRegisterModalCSS';
import    LogInUser       from '../LogInUser/LogInUser';
import    RegisterNewUser from './RegisterNewUser/RegisterNewUser';

const LogInRegisterModal = ({ modalState, registeredUsers, userState, logInUserConnector, registerNewUser, loginState }) => {


  if (!modalState) {
    return null
  }

  return (
    <section>
      <div style={ modalStyle }>
        <Route path='/login' render={({ match }) =>
          <LogInUser logInUserConnector={ logInUserConnector }/>
        } />
        <Route path='/register' render={({ match }) =>
          <RegisterNewUser />
        } />
      </div>
      <div style={ backdropStyle }></div>
    </section>
  )
}

export default LogInRegisterModal;
