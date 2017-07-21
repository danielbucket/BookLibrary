import    React, { Component }  from 'react';
import    SearchResults         from '../SearchResults/SearchResults';
import    OneBook               from '../OneBook/OneBook';
import                               './Main.css';
import  { Route, Switch }       from 'react-router-dom';

const hackeyStub = {id:'',
                    library:{ read:false, want:false, own:false},
                    volumeInfo:{  allowAnonLogging:false,
                                  authors:['Gary','Billiam'],
                                  canonicalVolumeLink:'',
                                  categories:[],
                                  contentVersion:'',
                                  description:'description',
                                  imageLinks:{},
                                  industryIdentifiers: [{identifier:'ISBN Number1'},
                                                        {identifier:'ISBN Number2'}],
                                  infoLink:'',
                                  language:'en',
                                  maturityRating:'',
                                  pageCount:256,
                                  previewLink:'',
                                  printType:'',
                                  publishedDate:'10-11-12',
                                  publisher:'Carper Hollins',
                                  readingModes:{},
                                  subtitle:'Time to take out the garbage',
                                  title:'Trailer Park Trash',
                                  __proto__:{}
                              }
                  }

export default class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      bookData: hackeyStub,
      userState: props.logInState
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
                      userState={ this.state.userState } /> }/>

          </Switch>
        </div>
      </div>
    )
  }
}
