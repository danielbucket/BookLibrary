import    React, { Component }            from 'react';
import  { ProppedHeader }                 from '../../containers/Header/HeaderContainer';
import  { ProppedMain }                   from '../../containers/Main/MainContainer';
import                                         './App.css';
import  { ProppedLogInRegisterModal } from '../../containers/LogInRegisterModal/LogInRegisterModalContainer'


class App extends Component {


  changeModalStateConnector() {
    this.changeModalState(this)
  }

  render() {
    return (
      <div className="App">
        <ProppedLogInRegisterModal />
        <ProppedHeader />
        <ProppedMain />
      </div>
    )
  }
}

export default App;


// combine the retail value of all books in your personal library to show how much money your libary costs
