export const getGoogleBooksAPI = (query, mainState) => {
  fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
  .then(resp => resp.json())
  .then(bookData => {
    bookData.items.map( item => {
        return Object.assign(item,{library:{read:false,want:false,own:false}})
    })
    mainState.setState({
      searchResults: bookData.items
    })
  })
  .catch(error => console.log('Error fetching books: ', error))
}
