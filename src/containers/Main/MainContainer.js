import  { connect }           from 'react-redux';
import    Main                from '../../components/Main/Main';
import  { withRouter }        from 'react-router'


const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export const ProppedMain = withRouter(connect(null, null)(Main));
