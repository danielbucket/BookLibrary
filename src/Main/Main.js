import React, { Component } from 'react';
import Search               from './Search/Search';
import SearchResults        from './SearchResults/SearchResults';
import { getByISBN, getGoogleBooksAPI }        from '../fetches/fetchCalls';
import                           './Main.css';


export default class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: this.props.mainText,
      isbn: '',
      searchResults: []
    }
    this.onClick = this.onClick.bind(this)
    this.getGoogleBooksAPI = getGoogleBooksAPI.bind(this)
  }

  onClick(book) {
    this.setState({
      isbn: book
    })
    this.getGoogleBooksAPI(book, this)
  }

  render() {
    return (
      <div>
        { this.state.text }
        <Search submitQuery={ this.onClick }/>

        <SearchResults books={ this.state.searchResults }/>
      </div>
    )
  }
}
