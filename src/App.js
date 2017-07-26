import    React, { Component }   from 'react';
import    Header                 from './Header/Header';
import    LogInRegisterModal     from './LogInRegisterModal/LogInRegisterModal';
import    Main                   from './Main/Main';
import  { getGoogleBooksAPI,
          fetchRegisteredUsers,
          createNewUser }        from './fetches/fetchCalls';
import  { renderMultiple,
          logInUser,
          getRegisteredUsers,
          registerNewUser,
          changeModalState }     from './assets/helpers';
import  { bookStub }             from './assets/stubs';
import                                './App.css';


class App extends Component {
  constructor() {
    super()
    this.state = {
      query: '',
      searchResults: [],
      userState: {
                  username: '',
                  email: '',
                  library: []
                 },
      logInState: false,
      modalState: false
    }
    this.getGoogleBooksAPI          = getGoogleBooksAPI.bind(this)
    this.fetchBooks                 = this.fetchBooks.bind(this)
    this.renderMultiple             = renderMultiple.bind(this)
    this.logInUser                  = logInUser.bind(this)
    this.logInUserConnector         = this.logInUserConnector.bind(this)
    this.createNewUser              = createNewUser.bind(this)
    this.createNewUserConnector     = this.createNewUserConnector.bind(this)
    this.getRegisteredUsers         = getRegisteredUsers.bind(this)
    this.registerNewUser            = registerNewUser.bind(this)
    this.changeModalState           = changeModalState.bind(this)
    this.changeModalStateConnector  = this.changeModalStateConnector.bind(this)
    // how do I make fetch calls for images???
  }

  componentDidMount() {
    this.setState({
      searchResults: bookStub.items,
    })
  }

  fetchBooks(query) {
    this.setState({
      query: query,
    })
    this.getGoogleBooksAPI(query, this)
  }

  logInUserConnector() {
    this.logInUser(this)
  }

  createNewUserConnector(userObj) {
    this.createNewUser(userObj, this)
  }

  changeModalStateConnector() {
    this.changeModalState(this)
  }

  render() {
    return (
      <div className="App">
        <Header fetchBooks={ this.fetchBooks } />

        <Main  registeredUsers={ this.state.registeredUsers }
                    logInState={ this.state.logInState }
              changeModalState={ this.changeModalStateConnector }
                 searchResults={ this.state.searchResults } />

        <LogInRegisterModal  logInUserConnector={ this.logInUserConnector }
                                     loginState={ this.state.loginState }
                                     modalState={ this.state.modalState }
                                registerNewUser={ this.registerNewUser }
                                   logInNewUser={ this.createNewUserConnector } />
      </div>
    )
  }
}

export default App;


// combine the retail value of all books in your personal library to show how much money your libary costs
