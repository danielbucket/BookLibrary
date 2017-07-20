const uuidv4 = require('uuid/v4')

export const getGoogleBooksAPI = (query, mainState) => {
  fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
  .then(resp => resp.json())
  .then(bookData => {
    mainState.setState({
      searchResults: bookData.items
    })
  })
  .catch(error => console.log('Error fetching books', error))
}
