import    React, { Component }  from 'react';
import    SearchResults         from '../SearchResults/SearchResults';
import    OneBook               from '../OneBook/OneBook';
import                               './Main.css';
import  { Route, Switch }       from 'react-router-dom';

const hackeyStub = {id:'', library:{read:false, want:false, own:false}, volumeInfo:{title:'', authors:['Gary', 'Billiam'], categories:[], description:'',industryIdentifiers: [], language:'', pageCount:'', printType:'', publishedDate:'', publisher:'', subtitle:'', title:''}}

export default class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      bookData: hackeyStub,
      userState: true
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

  // shouldComponentUpdate(nextProps, nextState) {
  //   if (nextProps == nextState) {
  //     return false
  //   }
  //   return true
  // }

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
                       saveBook={ this.saveBook } /> }
                      userState={ this.state.userState }/>

          </Switch>
        </div>
      </div>
    )
  }
}
