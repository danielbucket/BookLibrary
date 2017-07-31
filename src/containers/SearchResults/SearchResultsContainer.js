import  { connect }           from 'react-redux';
import    SearchResults       from '../../components/SearchResults/SearchResults';
import  { acquireSingleBook }  from '../../actions/actions';
import  { withRouter }        from 'react-router';

const mapStateToProps = state => {
  return {
    books: state.booksReducer
  }
}

const mapDispatchToProps = dispatch => {
  return {
    acquireBook: bookData => dispatch(acquireSingleBook(bookData))
  }
}

export const ProppedSearchResults = withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchResults));
