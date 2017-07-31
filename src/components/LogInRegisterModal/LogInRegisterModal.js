import    React           from 'react';
import  { Route }         from 'react-router-dom';
import  { modalStyle,
          backdropStyle } from './LogInRegisterModalCSS';
import    LogInUser       from '../LogInUser/LogInUser';
import    RegisterNewUser from '../RegisterNewUser/RegisterNewUser';

const LogInRegisterModal = ({ modalState }) => {

  if (!modalState) {
    return null
  }

  return (
    <section>
      <div style={ modalStyle}>
        <Route exact path='/login' component={LogInUser} />
        <Route path='/register' component={RegisterNewUser} />
      </div>
      <div style={ backdropStyle }></div>
    </section>
  )
}

export default LogInRegisterModal;
