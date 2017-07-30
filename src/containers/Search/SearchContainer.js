import  { connect } from 'react-redux';
import    Search    from '../../components/Search/Search';
import  { newFieldValue,
          fetchBook,
          resetFieldValue } from '../../actions/actions';

const mapStateToProps = state => {
  return {
    oldFieldValue: state.newFieldValueReducer,
    routerReducer: state.routerReducer
  }
}

const mapDispatchToProps = dispatch => {
  return {
    newFieldValue:    e         => dispatch(newFieldValue(e)),
    resetFieldValue:  newValue  => dispatch(resetFieldValue(newValue)),
    fetchBooks:       query     => dispatch(fetchBook(newFieldValue(query)))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)
