import  { connect }     from 'react-redux';
import    LogInUser     from '../../components/LogInUser/LogInUser';
import  { withRouter }  from 'react-router';
import  { fetchUser }   from '../../actions/actions';

const mapStateToProps = (state) => {
  return {
    
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logInUser: (userData) => dispatch(fetchUser(userData))
  }
}

export const ProppedLogInUser = withRouter(connect(mapStateToProps, mapDispatchToProps)(LogInUser))
