import    React                 from 'react';
import    ReactDOM              from 'react-dom';
import    AppContainer                   from './containers/App/AppContainer';
import    rootReducer           from './reducers/rootReducer';
import                               './index.css';


import  { Provider }            from 'react-redux';
import  { createStore,
          applyMiddleware,
          compose }             from 'redux';
import    thunk                 from 'redux-thunk';
// import  { routerMiddleware }    from 'react-router-redux';

import createHistory            from 'history/createBrowserHistory'
import { Route, browserHistory } from 'react-router-dom'
import { ConnectedRouter,
         routerMiddleware,
         push }                  from 'react-router-redux'
import { fetchBook }             from './actions/actions'

const devTools        = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const history         = createHistory()
const middleware      = routerMiddleware(history)
const enhancers       = compose(applyMiddleware(thunk, middleware), devTools)
const store           = createStore(rootReducer, {}, enhancers)


ReactDOM.render(

  <Provider store={store} >
    <ConnectedRouter history={history}>
      <Route  path='/' render={ () => <AppContainer /> } />
    </ConnectedRouter>
  </Provider>


  , document.getElementById('root'))
