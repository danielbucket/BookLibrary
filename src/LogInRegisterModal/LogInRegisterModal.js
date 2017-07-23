import    React              from 'react';
import  { Route } from 'react-router-dom';

import  { manageCurrentUser } from './LogInRegisterUserHelper';
import  { modalStyle,
          backdropStyle }    from './LogInRegisterModalCSS';
import    LogInUser          from './LogInUser/LogInUser';
import    RegisterNewUser    from './RegisterNewUser/RegisterNewUser';

const LogInRegisterModal = ({ modalState, registeredUsers, userState, logInUser, registerNewUser, renderLogin }) => {


  if (!modalState) {
    return null
  }

  return (
    <section>
      <div style={ modalStyle }>
          <LogInUser logInUser={ logInUser } />
      </div>
      <div style={ backdropStyle }></div>
    </section>
  )
}

export default LogInRegisterModal
