import    React, { Component }    from 'react';
import  { ProppedSearchResults }  from '../../containers/SearchResults/SearchResultsContainer';
import  { ProppedOneBook }        from '../../containers/OneBook/OneBookContainer';
import  { Route,
          Switch }                from 'react-router-dom';
import                                 './Main.css';


export default class Main extends Component {

  render() {
    const { books, book } = this.props
    return (
      <div className='main'>
        <div className='search-results-container'>
          <Switch>

            <Route exact path='/main/searchresults/:id' component={ProppedOneBook} />

            <Route exact path='/main/searchresults' render={
              (books) => <ProppedSearchResults book={books}/>
            } />

          </Switch>
        </div>
      </div>
    )
  }
}
