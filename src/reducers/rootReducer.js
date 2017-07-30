import  { combineReducers }          from 'redux';
import  { routerReducer }            from 'react-router-redux';
import  { booksReducer }             from './booksReducer';
import  { viewSingleBookReducer }    from './viewSingleBookReducer';
import  { newFieldValueReducer }     from './newFieldValueReducer';
// import  { logInRegisterUserReducer } from './logInRegisterUserReducer';


const rootReducer = combineReducers({
  booksReducer,
  viewSingleBookReducer,
  newFieldValueReducer,
  // logInRegisterUserReducer,

  routerReducer
})

export default rootReducer;
