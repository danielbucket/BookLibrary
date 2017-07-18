import React from 'react';

const SearchResults = ({ books }) => {

  const query = books.map( i => {
    const { volumeInfo } = i

    return (
      <div>
        <h2>{volumeInfo.title}</h2>
        <p>{volumeInfo.authors[0]}</p>
        {/* <p>{volumeInfo.description}</p> */}
      </div>
    )
  })


  return (
    <div>
      { query }
    </div>
  )
}

export default SearchResults
