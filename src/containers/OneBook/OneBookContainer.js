import  { connect }     from 'react-redux';
import    OneBook       from '../../components/OneBook/OneBook';
import  { withRouter }  from 'react-router'

const mapStateToProps = (state) => {
  return {
    book: state.booksReducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export const ProppedOneBook = withRouter(connect(mapStateToProps, null)(OneBook))
