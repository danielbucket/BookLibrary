import  { combineReducers }       from 'redux';
import  { routerReducer }         from 'react-router-redux';
import  { booksReducer }          from './booksReducer';
import  { viewSingleBookReducer } from './viewSingleBookReducer';
import  { userStatusReducer }     from './userStatusReducer';
import  { wantedLibraryReducer,
          readLibraryReducer,
          ownedLibraryReducer }   from './libraryReducer';
import  { loggedInStatus }        from './loggedInStatusReducer';
import  { modalState }            from './modalStateReducer';
import  {logInTypeReducer }       from './logInTypeReducer';


const rootReducer = combineReducers({
  booksReducer,
  viewSingleBookReducer,
  userStatusReducer,
  wantedLibraryReducer,
  readLibraryReducer,
  ownedLibraryReducer,
  loggedInStatus,
  modalState,
  logInTypeReducer,

  routerReducer
})

export default rootReducer;
