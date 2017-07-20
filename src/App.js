import React, { Component }   from 'react';
import Header                 from './Header/Header';
import Main                   from './Main/Main';
import                             './App.css';
import  { getGoogleBooksAPI } from './fetches/fetchCalls';
import  { renderMultiple,
          genericFetch }      from './assets/helpers';

class App extends Component {
  constructor() {
    super()
    this.state = {
      query: '',
      searchResults: []
    }
    this.getGoogleBooksAPI = getGoogleBooksAPI.bind(this)
    this.fetchBooks = this.fetchBooks.bind(this)
    this.renderMultiple = renderMultiple.bind(this)
    // how do I make fetch calls for images???
    this.genericFetch = genericFetch.bind(this)
  }

  fetchBooks(query) {
    this.setState({
      query: query,
    })
    this.getGoogleBooksAPI(query, this)
  }

  render() {
    return (
      <div className="App">
        <Header fetchBooks={ this.fetchBooks }/>

        <Main searchResults={ this.state.searchResults }
              />
      </div>
    )
  }
}

export default App;
