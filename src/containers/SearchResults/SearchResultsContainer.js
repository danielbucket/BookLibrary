import  { connect }           from 'react-redux';
import    SearchResults       from '../../components/SearchResults/SearchResults';
import  { aquireSingleBook }  from '../../actions/actions';
import  { withRouter }        from 'react-router';

const mapStateToProps = state => {
  return {
    books: state.booksReducer
  }
}

const mapDispatchToProps = dispatch => {
  return {
    // aquireBook: bookData => dispatch(aquireSingleBook(bookData))
  }
}

export const ProppedSearchResults = withRouter(connect(mapStateToProps, null)(SearchResults));
