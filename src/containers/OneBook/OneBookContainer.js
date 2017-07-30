import { connect } from 'react-redux';
import OneBook from '../../components/OneBook/OneBook';

const mapStateToProps = (state) => {
  return {
    book: state.viewSingleBookReducer,

    // this needs all of the books
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(OneBook)
