import  { connect } from 'react-redux';
// import  { fetchRegisteredUsers } from '../actions/actions';
import LogInRegisterModal from '../../components/LogInRegisterModal/LogInRegisterModal';


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

export default connect(mapStateToProps, mapDispatchToProps)(LogInRegisterModal)
