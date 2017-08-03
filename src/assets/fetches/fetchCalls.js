// import  { logInUser }   from '../helpers';
import  { createUser,
          logInUser,
          userLibrary,
          googleAPI   }   from './fetchLocations';
const uuidv4 = require('uuid/v4');


export default class fetchCalls {


  fetchBooks(query) {
    return fetch(`${googleAPI}${query}`)
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
                 body: JSON.stringify(userData),
                 headers: { "Content-Type": "application/json" }
             })
           .then(resp => resp.json())
           .catch(error => console.log(error))
  }

  fetchUserLibrary(userData) {
    return fetch(userLibrary, {
                method: "POST",
                body: JSON.stringify(userData),
                headers: { "Content-Type": "application/json"}
            })
            .then(resp => resp.json())
            .catch(error => console.log('error fetching user library:', error))
  }

  createNewUser(userObj) {
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
