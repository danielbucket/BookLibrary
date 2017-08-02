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
            <img src={image} />
        <h2 className="book-title">{ volumeInfo.title }</h2>
        <div className="book-author-text">Author:
          <span className='authors-list title'>
            { renderMultiple(volumeInfo.authors,'authors-container, author-item') }
          </span>
        </div>
        <div>
          <p className="book-publisher-text">Publisher:
            <div className='publisher title'>
              { volumeInfo.publisher }
            </div>
          </p>
          <div className='rating'>
          </div>
        </div>
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
