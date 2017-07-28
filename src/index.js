import    React                 from 'react';
import    ReactDOM              from 'react-dom';
import    App                   from './containers/App/AppContainer';
import    rootReducer           from './reducers/rootReducer';
import                               './index.css';


import  { ConnectedRouter }     from 'react-router-redux';
import    createBrowserHistory  from 'history/createBrowserHistory';
// import  { Route }               from 'react-router-dom';
import  { Router,
          Route }               from 'react-router'
import  { Provider }            from 'react-redux';
import  { createStore,
          applyMiddleware,
          compose }             from 'redux';
import    thunk                 from 'redux-thunk';
import    createHistory         from 'history/createBrowserHistory';
import  { routerMiddleware }    from 'react-router-redux';



const history         = createHistory();
// const history         = createBrowserHistory()
const routerConnected = routerMiddleware(history);
const devTools        = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const middleware      = [routerConnected, thunk];
const enhancers       = compose(applyMiddleware(...middleware), devTools)
const store           = createStore(rootReducer, {}, enhancers)




ReactDOM.render(

  <Provider store={store} >
    <ConnectedRouter history={history}>
      <Route path='/' render={ () => <App /> } />
    </ConnectedRouter>
  </Provider>


  , document.getElementById('root'))
