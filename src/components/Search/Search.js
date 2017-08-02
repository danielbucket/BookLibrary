import    React, { Component }  from 'react';
import  { Link }                from 'react-router-dom';
import  { searchStyle }         from './searchStyle';

export default class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      query: ''
    }
    this.onChange = this.onChange.bind(this)
  }

onChange(e) {
  this.setState({
    query: e.target.value
  })
}

  render() {
    const { searchBoxContainer, searchBoxTitle,
            searchBits, searchInput, submitBtn } = searchStyle
    return (
      <div style={searchBoxContainer}>
        <h3 style={searchBoxTitle}>Quick Search</h3>
        <input      style={searchBits, searchInput}
                    value={this.state.query}
                 onChange={e => this.onChange(e)} />

        <Link to='/main/searchresults'>
          <button      style={submitBtn}
                     onClick={() => {
                       this.props.fetchBooks(this.state.query)
                    }}>Submit
          </button>
        </Link>
      </div>
    )
  }
}
