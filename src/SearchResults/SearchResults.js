import    React            from 'react';
import  { renderMultiple } from '../assets/helpers';
import  { Link }           from 'react-router-dom';
import                          './SearchResults.css';

const SearchResults = ({ searchResults, lookAtBook }) => {
  const query = searchResults.map( i => {
    const { volumeInfo } = i
    return (
      <Link to={`${i.id}`} >
        <div className='book-card'
                    id={ i.id }
                    onClick={ () => { lookAtBook(i) } }>
          <h2 className="book-title">{ volumeInfo.title }</h2>
          <div className="book-author-text">Author:
            <span className='authors-list'>
              { renderMultiple(volumeInfo.authors) }
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
        </div>
      </Link>
    )
  })

  return (
    <div className="because-grid">
      <div className='book-cards-container'>
        { query }
      </div>
    </div>
  )
}

export default SearchResults;
