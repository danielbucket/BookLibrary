import  { combineReducers }       from 'redux';
import  { routerReducer }         from 'react-router-redux';
import  { booksReducer }          from './booksReducer';
import  { viewSingleBookReducer } from './viewSingleBookReducer';
import  { newFieldValueReducer }  from './newFieldValueReducer';
import  { userStatusReducer }     from './userStatusReducer';
import  { wantedLibraryReducer,
          readLibraryReducer,
          ownedLibraryReducer }   from './libraryReducer';


const rootReducer = combineReducers({
  booksReducer,
  viewSingleBookReducer,
  newFieldValueReducer,
  userStatusReducer,
  wantedLibraryReducer,
  readLibraryReducer,
  ownedLibraryReducer,

  routerReducer
})

export default rootReducer;
