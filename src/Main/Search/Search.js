import React, { Component } from 'react';
import                           './Search.css';

export default class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isbn: ''
    }
    this.onChange = this.onChange.bind(this)
  }

  onChange(e) {
    this.setState({
      isbn: e.target.value
    })
  }


  render() {
    const { submitQuery } = this.props
    return (
      <div>
        <h3>Books</h3>
        <input  value={ this.state.isbn }
                onChange={e => this.onChange(e) }/>
        <button onClick={() => submitQuery(this.state.isbn) }>Submit</button>
      </div>
    )
  }
}
