import React, { Component } from 'react';
import                           './Search.css';

export default class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchFor: ''
    }
    this.onChange = this.onChange.bind(this)
  }

  onChange(e) {
    this.setState({
      searchFor: e.target.value
    })
  }

  render() {
    return (
      <div>
        <h3>Books</h3>
        <input  value={ this.state.searchFor }
                onChange={e => this.onChange(e) }/>

        <button onClick={ () => {
          this.props.fetchBooks(this.state.searchFor)
        } }>Submit</button>
      </div>
    )
  }
}
