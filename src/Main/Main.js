import    React, { Component }  from 'react';
import    Search                from './Search/Search';
import    SearchResults         from './SearchResults/SearchResults';
import  { getGoogleBooksAPI }   from '../fetches/fetchCalls';
import  { renderMultiple,
          genericFetch }        from '../assets/helpers';
import                               './Main.css';


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
    this.renderMultiple = renderMultiple.bind(this)
    // how do I make fetch calls for images???
    this.genericFetch = genericFetch.bind(this)
  }

  componentDidMount() {

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
        <SearchResults books={ this.state.searchResults }
              renderMultiple={ this.renderMultiple }
                genericFetch={ this.genericFetch } />
      </div>
    )
  }
}
