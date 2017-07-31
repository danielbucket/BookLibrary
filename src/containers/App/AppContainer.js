import  { connect }     from 'react-redux';
import    App           from '../../components/App/App';
import  { withRouter }  from 'react-router';

const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export const ProppedApp = withRouter(connect(null, null)(App));
