import  { connect }             from 'react-redux';
import    LogInRegisterModal    from '../../components/LogInRegisterModal/LogInRegisterModal';
import  { withRouter }          from 'react-router';
import  { fetchUser,
          modalState }          from '../../actions/actions';


const mapStateToProps = state => {
  return {
    recievedUserData: state.logInRegisteredUserReducer,
    modalState:       state.modalState,
    logInType:        state.logInTypeReducer,
    loginStatus:      state.loginStatus
  }
}

const mapDispatchToProps = dispatch => {
  return {
    modalStateSwitch: value     => dispatch(modalState(value)),
    login:            data      => dispatch(fetchUser(data)),
    register:         data      => dispatch()
  }
}

export const ProppedLogInRegisterModal = withRouter(connect(mapStateToProps, mapDispatchToProps)(LogInRegisterModal));
