import  { connect }     from 'react-redux';
import    Header        from '../../components/Header/Header';
import  { withRouter }  from 'react-router'

const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export const ProppedHeader = withRouter(connect(null, null)(Header));
