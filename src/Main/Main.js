import    React, { Component }  from 'react';
import    SearchResults         from '../SearchResults/SearchResults';
import    OneBook               from '../OneBook/OneBook';
import  { Route, Switch }       from 'react-router-dom';
import  { hackeyStub }          from '../assets/stubs';
import                               './Main.css';


export default class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      bookData: hackeyStub,
      registeredUsers: props.registeredUsers
    }
    this.lookAtBook = this.lookAtBook.bind(this)
    this.saveBook = this.saveBook.bind(this)
  }

  lookAtBook(book) {
    this.setState({
      bookData: book
    })
  }

  saveBook(book,type) {
    this.setState({
      [type]: book
    })
  }

  render() {
    return (
      <div className='main'>
        <div className='search-results-container'>
          <Switch>

            <Route exact path='/main/searchresults' render={ ({ match }) =>
              <SearchResults searchResults={ this.props.searchResults }
                                lookAtBook={ this.lookAtBook }/> } />

            <Route path='/main/:id' render={() =>
              <OneBook bookData={ this.state.bookData }
                       saveBook={ this.saveBook }
                     logInState={ this.props.logInState }
                      userState={ this.props.userState } /> }/>

          </Switch>
        </div>
      </div>
    )
  }
}
