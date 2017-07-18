import { isbndb_KEY } from '../assets/keys.js';

export const getByISBN = (isbn, mainState) => {
  fetch(`http://isbndb.com/api/v2/json/${isbndb_KEY}/book/${isbn}`)
  .then(resp => resp.json())
  .then(data => {
      mainState.setState({
      book: data.data
    })
  })
  .catch(error => console.log('error: ', error) )

}


export const getGoogleBooksAPI = (query, mainState) => {

  fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
  .then(resp => resp.json())
  .then(data => {
    const image = data.items.map( i => {
      // console.log(i.volumeInfo.imageLinks.thumbnail)

      return fetch(i.volumeInfo.imageLinks.thumbnail)
              .then(resp => resp.json())
              .then(data => console.log(data) )
    })
  })
  // .then(data => {
  //   mainState.setState({
  //     searchResults: data.items
  //   })
  // })
}
