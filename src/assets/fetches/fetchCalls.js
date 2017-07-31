import { logInUser } from '../helpers';
const uuidv4 = require('uuid/v4')

export default class fetchCalls {

  fetchBooks(query) {
    return fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
      .then(resp => resp.json())
      .then(bookData => {
        return bookData.items.map( item => {
          return Object.assign(item, {id: uuidv4()})
        })
      })
      .catch(error => console.log('Error fetching books: ', error))
    }

  fetchRegisteredUsers() {
    return fetch("/bucketLibrary/v1/users")
    .then(resp => resp.json() )
    .then((data) => { return(data) })
  }
}





export const getGoogleBooksAPI = (query, mainState) => {
}



export const createNewUser = (userObj, mainState) => {
  fetch("http://localhost:3000/bucketLibrary/v1/users", {
    method: "POST",
    body: JSON.stringify(userObj),
    headers: {
      "Content-Type": "application/json"
    }
  })
  .then(resp => resp.json())
  .then(userData => {
    mainState.setState({
      userState: userData,
      logInState: true,
      modalState: false
    })
  })
  .catch(error => console.log('error at createNewUser fetch: ', error))
}
