import React, { Component } from 'react';
import { Link }             from 'react-router-dom';
import                           './Search.css';

export default class Search extends Component {
  render() {
    return (
      <div className="search-box-container">
        <h3 className="search-box-title">Quick Search</h3>
        <input  className="search-bits search-input"
                    value={ this.props.oldFieldValue }
                 onChange={(e) => this.props.newFieldValue(e.target.value) } />

        <Link to='/main/searchresults'>
          <button  className="search-bits search-submit-button"
                     onClick={ () => {
                       this.props.fetchBooks(this.props.oldFieldValue)
                       this.props.resetFieldValue('')
                    } }>Submit
          </button>
        </Link>
      </div>
    )
  }
}
