import  { connect }           from 'react-redux';
import    Main                from '../../components/Main/Main';
import  { aquireSingleBook }  from '../../actions/actions';
import  { withRouter }        from 'react-router'


const mapStateToProps = (state) => {
  return {
    books: state.booksReducer
    // book:  state.viewSingleBookReducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export const ProppedMain = withRouter(connect(mapStateToProps, null)(Main));
