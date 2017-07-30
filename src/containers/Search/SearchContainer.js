import  { connect } from 'react-redux';
import    Search    from '../../components/Search/Search';

const mapStateToProps = (state) => {
  return {
    books: state.booksReducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)
