import React, { Component } from 'react';
import                           './Search.css';
import { Link }             from 'react-router-dom';

export default class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchFor: 'quick search'
    }
    this.onChange = this.onChange.bind(this)
    this.setSearchField = this.setSearchField.bind(this)
  }

  onChange(e) {
    this.setState({
      searchFor: e.target.value
    })
  }

  setSearchField(reset) {
    this.setState({
      searchFor: reset
    })
  }

  render() {
    return (
      <div className="search-box-container">
        <h3 className="search-box-title">Quick Search</h3>
        <input  className="search-bits search-input"
                    value={ this.state.searchFor }
                  onClick={() => {this.setSearchField('')}}
                 onChange={e => this.onChange(e) }/>

        <Link to='/main/searchresults'>
          <button  className="search-bits search-submit-button"
                     onClick={ () => {     this.props.fetchBooks(this.state.searchFor)
                                     this.setSearchField('quick search')
                                   } }>Submit
          </button>
        </Link>
      </div>
    )
  }
}
