import    React, { Component }  from 'react';
import  { Link }                from 'react-router-dom';
import  { searchStyle }         from './searchStyle';

export default class Search extends Component {
  render() {
    const { searchBoxContainer, searchBoxTitle,
            searchBits, searchInput, submitBtn } = searchStyle
    return (
      <div style={searchBoxContainer}>
        <h3 style={searchBoxTitle}>Quick Search</h3>
        <input      style={searchBits, searchInput}
                    value={ this.props.oldFieldValue }
                 onChange={(e) => this.props.newFieldValue(e.target.value) } />

        <Link to='/main/searchresults'>
          <button      style={submitBtn}
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
