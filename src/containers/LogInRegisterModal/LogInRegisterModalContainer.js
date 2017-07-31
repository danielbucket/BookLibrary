import  { connect }           from 'react-redux';
import    LogInRegisterModal  from '../../components/LogInRegisterModal/LogInRegisterModal';
import  { withRouter }        from 'react-router'
// import  { fetchRegisteredUsers } from '../actions/actions';


const mapStateToProps = state => {
  return {
    recievedUserData: state.logInRegisteredUserReducer
  }
}

const mapDispatchToProps = dispatch => {
  return {
    // getUser: userData => dispatch(fetchRegisteredUsers(userData))
  }
}

export const ProppedLogInRegisterModal = withRouter(connect(mapStateToProps, null)(LogInRegisterModal));
