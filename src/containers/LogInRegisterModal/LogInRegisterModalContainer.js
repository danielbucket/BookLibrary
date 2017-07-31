import  { connect }             from 'react-redux';
import    LogInRegisterModal    from '../../components/LogInRegisterModal/LogInRegisterModal';
import  { withRouter }          from 'react-router';
import  { fetchRegisteredUsers,
          modalState }          from '../../actions/actions';


const mapStateToProps = state => {
  return {
    recievedUserData: state.logInRegisteredUserReducer
  }
}

const mapDispatchToProps = dispatch => {
  return {
    modalState: value => dispatch(modalState(value))
  }
}

export const ProppedLogInRegisterModal = withRouter(connect(mapStateToProps, null)(LogInRegisterModal));
