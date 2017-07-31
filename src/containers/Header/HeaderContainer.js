import  { connect }     from 'react-redux';
import    Header        from '../../components/Header/Header';
import  { withRouter }  from 'react-router'

const mapStateToProps = (state) => {
  return {
    wantedLibrary:  state.wantedLibraryReducer,
    readLibrary:    state.readLibraryReducer,
    ownedLibrary:   state.ownedLibraryReducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export const ProppedHeader = withRouter(connect(mapStateToProps, null)(Header));
