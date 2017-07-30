import    React, { Component }   from 'react';
import { Route, Router } from 'react-router'

import    HeaderContainer        from '../../containers/Header/HeaderContainer';
import    LogInRegisterModal     from '../../containers/LogInRegisterModal/LogInRegisterModalContainer';
import    Main                   from '../../containers/Main/MainContainer';
import  { fetchRegisteredUsers,
          createNewUser }        from '../../assets/fetches/fetchCalls';
import  {
          getRegisteredUsers,
          registerNewUser,
          changeModalState }     from '../../assets/helpers';
// import  { bookStub }             from '../../assets/stubs';
import                                './App.css';

import createHistory from 'history/createBrowserHistory'
const history = createHistory()


class App extends Component {
  constructor() {
    super()
    this.state = {
      userState: {
                  username: '',
                  email: '',
                  library: []
                 },
      logInState: false,
      modalState: false
    }

    this.createNewUser              = createNewUser.bind(this)
    this.createNewUserConnector     = this.createNewUserConnector.bind(this)
    this.getRegisteredUsers         = getRegisteredUsers.bind(this)
    this.registerNewUser            = registerNewUser.bind(this)
    this.changeModalState           = changeModalState.bind(this)
    this.changeModalStateConnector  = this.changeModalStateConnector.bind(this)
    // how do I make fetch calls for images???
  }

  // componentDidMount() {
  //   this.setState({
  //     searchResults: bookStub.items,
  //   })
  // }

  createNewUserConnector(userObj) {
    this.createNewUser(userObj, this)
  }

  changeModalStateConnector() {
    this.changeModalState(this)
  }

// its as if nothing is instigating it to rerender..
// but then again, the whole flattenChildren() waring came up so...
// but no until I click the search button in the search component
// search resuts must be getting called more than once. I can see no other reason as to why it has multiple children with the same key value.

  render() {
    return (
      <div className="App">

          <HeaderContainer />
          <Main />

          <LogInRegisterModal loginState={ this.state.loginState }
                              modalState={ this.state.modalState }
                              registerNewUser={ this.registerNewUser }
                              logInNewUser={ this.createNewUserConnector } />

      </div>
    )
  }
}

export default App;


// combine the retail value of all books in your personal library to show how much money your libary costs
