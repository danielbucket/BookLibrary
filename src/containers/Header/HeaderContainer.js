import { connect } from 'react-redux';
import Header from '../../components/Header/Header';
import { fetchBook } from '../../actions/actions'

const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getBooks: (query) => {
      dispatch(fetchBook(query))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
