export const getGoogleBooksAPI = (query, mainState) => {
  fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
  .then(resp => resp.json())
  .then(bookData => {
    mainState.setState({
      searchResults: bookData.items
    })
  })
}
