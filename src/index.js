import React    from 'react';
import ReactDOM from 'react-dom';
import App      from './App';
import               './index.css';
import createBrowserHistory from 'history/createBrowserHistory';


import  { createStore,
          applyMiddleware } from 'redux';
import  { Provider }        from 'react-redux';
import  { ConnectedRouter } from 'react-router-redux';
import  { Route }           from 'react-router-dom';
import thunk                from 'redux-thunk';

const middleWare = [routerConnected, thunk];

const history = createBrowserHistory();
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(rootReducer,
                          devTools,
                          applyMiddleware());








ReactDOM.render(
  <Provider store={ store }>
    <ConnectedRouter>
      <Route path='/' render={ () => <App /> } />
    </ConnectedRouter>
  </Provider>
  , document.getElementById('root'))
