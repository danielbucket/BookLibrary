import { logInUser } from '../assets/helpers';

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

export const fetchRegisteredUsers = () => {
  fetch("/users")
  .then(resp => resp.json() )
  .then((data) => { return(data) })
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
