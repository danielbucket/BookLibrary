import React from 'react';

const SearchResults = ({ books, renderMultiple, genericFetch }) => {

  const query = books.map( i => {
    const { volumeInfo } = i
    return (
      <div>
        <h2>{ volumeInfo.title }</h2>

        <div>authors:
          <span className='authors-list'>
            { renderMultiple(volumeInfo.authors) }
          </span>
        </div>

        <div className='description-text'>Description:
          <span className='description'>
            { volumeInfo.description }
          </span>
        </div>

        <div>
          <p className='publish-date-text'>Publish Date:
            <span className='publish-date'>
              { volumeInfo.publishedDate }
            </span>
          </p>
          <p>Publisher:
            <span className='publisher'>
              { volumeInfo.publisher }
            </span>
          </p>
          <p className='industry-identifiers-isbn'>
            {volumeInfo.industryIdentifiers[0].identifier}
          </p>
          <p className='industry-identifiers-type'>
            { volumeInfo.industryIdentifiers[0].type }
          </p>

          <div className='category'>Category:
            <span className='category-type'>
              { renderMultiple(volumeInfo.categories) }
            </span>
          </div>
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
    )
  })

  return (
    <div className='book-card'>
      { query }
    </div>
  )
}

export default SearchResults;
