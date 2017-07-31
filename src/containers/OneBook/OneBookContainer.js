import  { connect }     from 'react-redux';
import    OneBook       from '../../components/OneBook/OneBook';
import  { withRouter }  from 'react-router';
import  { modalState,
          saveBookToWantedLibrary,
          saveBookToReadLibrary,
          saveBookToOwnedLibrary }  from '../../actions/actions';

const mapStateToProps = state => {
  return {
    book:           state.viewSingleBookReducer,
    user:           state.userStatusReducer,
    wantedLibrary:  state.wantedLibraryReducer,
    readLibrary:    state.readLibraryReducer,
    ownedLibrary:   state.ownedLibraryReducer
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeModalState:       value => dispatch(modalState(value)),
    addBookToWantedLibrary: (library, book)  => dispatch(saveBookToWantedLibrary(library, book)),
    addBookToReadLibrary:   (library, book)  => dispatch(saveBookToReadLibrary(library, book)),
    addBookToOwnedLibrary:  (library, book)  => dispatch(saveBookToOwnedLibrary(library, book))
  }
}

export const ProppedOneBook = withRouter(connect(mapStateToProps, mapDispatchToProps)(OneBook))
