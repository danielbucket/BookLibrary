import    React, { Component }            from 'react';
import  { Route, Router }                 from 'react-router'
import  { ProppedHeader }                 from '../../containers/Header/HeaderContainer';
import  { ProppedLogInRegisterModal }     from '../../containers/LogInRegisterModal/LogInRegisterModalContainer';
import  { ProppedMain }                   from '../../containers/Main/MainContainer';
import  { fetchRegisteredUsers,
          createNewUser }                 from '../../assets/fetches/fetchCalls';
import  { registerNewUser,
          changeModalState }              from '../../assets/helpers';
import                                         './App.css';

import createHistory from 'history/createBrowserHistory'
const history = createHistory()


class App extends Component {
  constructor() {
    super()
    this.state = {
      modalState: false
    }
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

          <ProppedHeader />
          <ProppedMain />
          <ProppedLogInRegisterModal />

      </div>
    )
  }
}

export default App;


// combine the retail value of all books in your personal library to show how much money your libary costs
