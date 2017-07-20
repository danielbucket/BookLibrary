import  React, { Component }  from 'react';
import  SearchResults         from '../SearchResults/SearchResults';
import                             './Main.css';

export default class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: this.props.mainText,

    }
  }

  render() {
    return (
      <div>
        { this.state.text }
        <SearchResults searchResults={ this.props.searchResults } />
      </div>
    )
  }
}
