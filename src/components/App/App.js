import    React, { Component }   from 'react';
import { Route, Router } from 'react-router'

import    HeaderContainer        from '../../containers/Header/HeaderContainer';
import    LogInRegisterModal     from '../../containers/LogInRegisterModal/LogInRegisterModalContainer';
import    Main                   from '../../containers/Main/MainContainer';
import  { fetchRegisteredUsers,
          createNewUser }        from '../../assets/fetches/fetchCalls';
import  { renderMultiple,
          logInUser,
          getRegisteredUsers,
          registerNewUser,
          changeModalState }     from '../../assets/helpers';
import  { bookStub }             from '../../assets/stubs';
import                                './App.css';

import createHistory from 'history/createBrowserHistory'
const history = createHistory()


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

          <HeaderContainer />
          <Main />

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
