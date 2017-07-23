import    React, { Component }  from 'react';
import    Header                from './Header/Header';
import    LogInRegisterModal    from './LogInRegisterModal/LogInRegisterModal';
import    Main                  from './Main/Main';
import  { getGoogleBooksAPI }   from './fetches/fetchCalls';
import  { renderMultiple,
          logInUser,
          getRegisteredUsers,
          registerNewUser,
          changeModalState }    from './assets/helpers';
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
                  userData: {},
                  userLibrary: []
                 },
      registeredUsers: [],
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
      registeredUsers: this.getRegisteredUsers([...this.state.registeredUsers])
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
                 logInState={ this.state.userState.loginState }
            registerNewUser={ this.registerNewUser }
           changeModalState={ this.changeModalStateConnector }
            registeredUsers={ this.state.registeredUsers } />

        <LogInRegisterModal  logInUser={ this.logInUserConnector }
                            modalState={ this.state.modalState }
                            enderLogin={ this.state.renderLogin }
                       registeredUsers={ this.state.registeredUsers }
                       registerNewUser={ this.registerNewUser } />
      </div>
    )
  }
}

export default App;


// combine the retail value of all books in your personal library to show how much money your libary costs
