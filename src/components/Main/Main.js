import    React, { Component }    from 'react';
import  { ProppedSearchResults }  from '../../containers/SearchResults/SearchResultsContainer';
import  { ProppedOneBook }        from '../../containers/OneBook/OneBookContainer';
import  { Route,
          Switch }                from 'react-router-dom';
import                                 './Main.css';


export default class Main extends Component {

  render() {
    return (
      <div className='main'>
        <div className='search-results-container'>
          <Switch>
            <Route path='/main/searchresults/:id' component={ProppedOneBook} />
            <Route exact path='/main/searchresults' component={ProppedSearchResults} />
          </Switch>
        </div>
      </div>
    )
  }
}
