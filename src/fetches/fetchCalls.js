export const getGoogleBooksAPI = (query, mainState) => {
  fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
  .then(resp => resp.json())
  .then(bookData => {
    console.log('bookData at fetch; ', bookData.items)
    bookData.items.map( item => {
        Object.assign(item,{library:{read:false,want:false,own:false}})
    })
    mainState.setState({
      searchResults: bookData.items
    })
  })
  .catch(error => console.log('Error fetching books', error))
}
