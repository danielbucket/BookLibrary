import    React            from 'react';
import  { renderMultiple } from '../../assets/helpers';
import  { Link }           from 'react-router-dom';
import                          './SearchResults.css';
const uuidv4 = require('uuid/v4')

const SearchResults = (props) => {
  const { books } = props
  const query = books.map( i => {
    const { volumeInfo } = i

    return (
      <Link to={`/main/searchresults/${i.id}`}
            key={uuidv4()}>
        <h2 className="book-title">{ volumeInfo.title }</h2>
        <div className="book-author-text">Author:
          <span className='authors-list'>
            { renderMultiple(volumeInfo.authors,'authors-container, author-item') }
          </span>
        </div>
        <div>
          <p className='publish-date-text'>Publish Date:
            <span className='publish-date'>
              { volumeInfo.publishedDate }
            </span>
          </p>
          <p className="book-publisher-text">Publisher:
            <span className='publisher'>
              { volumeInfo.publisher }
            </span>
          </p>
          <div className='rating'>
            <div className='rating'>Average Rating:
              <span className='avg-rating'>
                {volumeInfo.averageRating}
              </span>
              <span className='rating-count'>Out of:
                {volumeInfo.ratingsCount}
              </span>
            </div>
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
