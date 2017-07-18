import React, { Component } from 'react';
import Header               from './Header/Header';
import Main                 from './Main/Main';
import                           './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      main: 'this is the Main component',
      header: 'this is the Header component'
    }
  }
  render() {
    return (
      <div className="App">
        <Header headerText={ this.state.header }/>
        <Main mainText={ this.state.main }/>
      </div>
    )
  }
}

export default App;
