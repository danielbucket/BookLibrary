import    React, { Component }  from 'react';
import  { Link }                from 'react-router-dom';
import                               './Search.css'

export default class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      query: ''
    }
    this.onChange = this.onChange.bind(this)
    this.submit   = this.submit.bind(this)
  }

  onChange(e) {
    this.setState({
      query: e.target.value
    })
  }

  submit() {
    this.props.fetchBooks(this.state.query)
    this.setState({
      query: ''
    })
  }

  render() {
    return (
      <div className='search-box-container'>
          <h3 className='search-box-title'>
            Quick Search
          </h3>
        <input  className='search-bits search-input'
              placeholder='search for a book'
                    value={this.state.query}
                 onChange={e => this.onChange(e)} />

        <Link to='/main/searchresults'>
          <button className='submit-btn'
                  onClick={() => {
                     this.submit()
                  }}>Submit
          </button>
        </Link>
      </div>
    )
  }
}
