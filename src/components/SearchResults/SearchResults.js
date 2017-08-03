import    React            from 'react';
import  { renderMultiple } from '../../assets/helpers';
import  { Link }           from 'react-router-dom';
import                          './SearchResults.css';
const uuidv4 = require('uuid/v4')

const SearchResults = ({books, acquireBook}) => {
  const query = books.map( i => {
    const { volumeInfo } = i
    const image = volumeInfo.imageLinks.thumbnail
    
    return (
      <Link className='book-card'
            to={`/main/searchresults/${i.id}`}
            key={uuidv4()}
            onClick={acquireBook(i)} >
        <img src={image} className='book-image'/>
      </Link>
    )
  })

  return (
    <div className="because-grid" >
      <div className='book-cards-container'>
        { query }
      </div>
    </div>
  )
}

export default SearchResults;
