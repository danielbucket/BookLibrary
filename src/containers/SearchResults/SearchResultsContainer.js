import  { connect }           from 'react-redux';
import    SearchResults       from '../../components/SearchResults/SearchResults';
import  { aquireSingleBook }  from '../../actions/actions'


const mapStateToProps = (state) => {
  return {
    books: state.booksReducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    aquireBook: (bookData) => { dispatch(aquireSingleBook(bookData)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
