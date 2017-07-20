import    React, { Component }  from 'react';
import    SearchResults         from '../SearchResults/SearchResults';
import    OneBook               from '../OneBook/OneBook';
import                               './Main.css';
import  { Route, Switch }       from 'react-router-dom';

export default class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      bookData: {}
    }
    this.lookAtBook = this.lookAtBook.bind(this)
  }

  lookAtBook(book) {
    this.setState({
      bookData: book
    })
  }

  render() {
    return (
      <div className='search-results-container'>
        <Switch>
          <Route path='/main/searchresults' render={ ({ match }) =>
            <SearchResults searchResults={ this.props.searchResults }
                              lookAtBook={this.lookAtBook}/> } />
          <Route path='/main/:id' render={({ match }) =>
            <OneBook bookData={ this.state.bookData } /> } />
        </Switch>
      </div>
    )
  }
}
