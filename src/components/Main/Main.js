import    React, { Component }    from 'react';
import    SearchResultsContainer  from '../../containers/SearchResults/SearchResultsContainer';
import    OneBookContainer        from '../../containers/OneBook/OneBookContainer';
import  { Route,
          Switch,
          NavLink }               from 'react-router-dom';

import                                 './Main.css';


export default class Main extends Component {
  render() {
    return (
      <div className='main'>
        <div className='search-results-container'>
          <Switch>
            <Route exact path='/main/searchresults'     component={SearchResultsContainer} />
            <Route       path='/main/searchresults/:number' component={OneBookContainer}       />
          </Switch>
        </div>
      </div>
    )
  }
}
