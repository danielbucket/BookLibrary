import  { combineReducers }        from 'redux';
import  { routerReducer }          from 'react-router-redux';
import  { booksReducer }           from './booksReducer';
import  { viewSingleBookReducer }  from './viewSingleBookReducer';


const rootReducer = combineReducers({
  booksReducer,
  viewSingleBookReducer,

  router: routerReducer
})

export default rootReducer;
