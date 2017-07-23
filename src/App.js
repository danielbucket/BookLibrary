import    React, { Component }  from 'react';
import    Header                from './Header/Header';
import    LogInRegisterModal    from './LogInRegisterModal/LogInRegisterModal';
import    Main                  from './Main/Main';
import  { getGoogleBooksAPI }   from './fetches/fetchCalls';
import  { renderMultiple }      from './assets/helpers';
import  { bookStub,
          registeredUsersStub } from './assets/stubs';
import                               './App.css';


class App extends Component {
  constructor() {
    super()
    this.state = {
      query: '',
      searchResults: [],
      userState: {
        loginState: false,
        userLibrary: [] },
      registeredUsers: registeredUsersStub,
      modalState: true
    }
    this.getGoogleBooksAPI = getGoogleBooksAPI.bind(this)
    this.fetchBooks = this.fetchBooks.bind(this)
    this.renderMultiple = renderMultiple.bind(this)
    this.logInUser = this.logInUser.bind(this)
    // how do I make fetch calls for images???
  }

  componentDidMount(){
    this.setState({
      searchResults: bookStub.items
    })
  }

  fetchBooks(query) {
    this.setState({
      query: query,
    })
    this.getGoogleBooksAPI(query, this)
  }

  logInUser() {
    this.setState({
      modalState: false
    })
  }

  render() {
    return (
      <div className="App">
        <Header fetchBooks={ this.fetchBooks } />
        <Main searchResults={ this.state.searchResults }
                 logInState={ this.state.userState.loginState }
            registerNewUser={ this.registerNewUser }
            registeredUsers={ this.state.registeredUsers } />
        <LogInRegisterModal modalState={ this.state.modalState }
                       registeredUsers={ this.state.registeredUsers }
                             userState={ this.state.userState }
                             logInUser={ this.logInUser } />
      </div>
    )
  }
}

export default App;


// combine the retail value of all books in your personal library to show how much money your libary costs
