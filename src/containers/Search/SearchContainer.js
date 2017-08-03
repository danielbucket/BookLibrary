import  { connect }         from 'react-redux';
import    Search            from '../../components/Search/Search';
import  { fetchBook }       from '../../actions/actions';
import  { withRouter }      from 'react-router'

const mapStateToProps = state => {
  return {

    // routerReducer: state.routerReducer
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchBooks: query =>  dispatch(fetchBook(query))
  }
}

export const ProppedSearch = withRouter(connect(mapStateToProps, mapDispatchToProps)(Search))
