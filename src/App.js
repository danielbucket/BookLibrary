import    React, { Component }   from 'react';
import    Header                 from './Header/Header';
import    LogInRegisterModal     from './LogInRegisterModal/LogInRegisterModal';
import    Main                   from './Main/Main';
import  { getGoogleBooksAPI,
          fetchRegisteredUsers } from './fetches/fetchCalls';
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
                  id: '',
                  username: '',
                  email: '',
                  password: '',
                  library: []
                 },
      loginState: false,
      modalState: false
    }
    this.getGoogleBooksAPI          = getGoogleBooksAPI.bind(this)
    this.fetchBooks                 = this.fetchBooks.bind(this)
    this.renderMultiple             = renderMultiple.bind(this)
    this.logInUser                  = logInUser.bind(this)
    this.logInUserConnector         = this.logInUserConnector.bind(this)
    this.getRegisteredUsers         = getRegisteredUsers.bind(this)
    this.registerNewUser            = registerNewUser.bind(this)
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

  changeModalStateConnector() {
    changeModalState(this)
  }

  render() {
    return (
      <div className="App">
        <Header fetchBooks={ this.fetchBooks } />
        <Main searchResults={ this.state.searchResults }
            registerNewUser={ this.registerNewUser }
           changeModalState={ this.changeModalStateConnector }
            registeredUsers={ this.state.registeredUsers } />

        <LogInRegisterModal  logInUserConnector={ this.logInUserConnector }
                                     loginState={ this.state.loginState }
                                     modalState={ this.state.modalState }
                                registeredUsers={ this.state.registeredUsers }
                                registerNewUser={ this.registerNewUser } />
      </div>
    )
  }
}

export default App;


// combine the retail value of all books in your personal library to show how much money your libary costs
