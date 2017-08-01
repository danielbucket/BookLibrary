// import  { logInUser }   from '../helpers';
import  { createUser,
          logInUser }   from './fetchLocations';

const uuidv4 = require('uuid/v4');

export default class fetchCalls {

  fetchBooks(query) {
    return fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
      .then(resp => resp.json())
      .then(bookData => {
        return bookData.items.map( item => {
          return Object.assign(item, {id: uuidv4()}, {shelf:{wanted:false, read:false, owned:false}} )
        })
      })
      .catch(error => console.log('Error fetching books: ', error))
  }


 fetchRegisteredUser(userData) {
    return fetch(logInUser, {
      method: "POST",
      body: userData,
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(resp => resp.json())
    .then(data => data)
  }



  createNewUser(userObj, mainState) {
    return fetch(createUser, {
      method: "POST",
      body: JSON.stringify(userObj),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(resp => resp.json())
    .then(newUser => newUser)
    .catch(error => console.log('error at createNewUser fetch: ', error))
  }

}
