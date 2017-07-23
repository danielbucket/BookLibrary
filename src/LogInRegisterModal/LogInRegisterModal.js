import    React              from 'react';

import { manageCurrentUser } from './LogInRegisterUserHelper';
import  { modalStyle,
          backdropStyle }    from './LogInRegisterModalCSS';
import LogInUser from './LogInUser/LogInUser';

const LogInRegisterModal = ({ modalState, registeredUsers, userState, logInUser }) => {
  let toRender = <LogInUser logInUser={ logInUser }/>

  // if (!userState.logInState) {
  //   toRender = <RegisterNewUser />
  // }

  if (!modalState) {
    return null
  }

  return (
    <section>
      <div style={ modalStyle }>
        { toRender }
      </div>
      <div style={ backdropStyle }></div>
    </section>
  )


}

export default LogInRegisterModal
