import    fetchCalls      from '../assets/fetches/fetchCalls';
import  { reduceLibrary } from '../assets/helpers';

// having data default to an empty array is an short term fix
// the search submit button should be rendered inert unless it the search
// field has a value

// export const fetchBooksSuccess = (data=[]) => {
export const fetchBooksSuccess = (data) => {
  return {
    type: 'FETCH_BOOKS_SUCCESS',
    books: data
  }
}

export const fetchBook = (query) => {
  return dispatch => {
    new fetchCalls().fetchBooks(query)
    .then(data => {
      dispatch(fetchBooksSuccess(data))
    })
  }
}

export const viewSingleBook = (bookData) => {
  return {
    type: "VIEW_SINGLE_BOOK",
    bookData: bookData
  }
}

export const acquireSingleBook = (book) => {
  return dispatch => {
    dispatch(viewSingleBook(book))
  }
}


export const activeUserLibrary = (library) => {
  console.log(activeUserLibrary)
  return {
    type: "ACTIVE_USER_LIBRARY",
    library: library,
    func: (library) => activeUserLibrary(library)
  }
}

export const cleanUserLibrary = (library) => {
  return dispatch => {
    dispatch(activeUserLibrary(reduceLibrary(library)))
  }
}

export const fetchUserLibrary = (userdata) => {
  return dispatch => {
    new fetchCalls().fetchUserLibrary(userdata)
    .then( library => {
      dispatch(cleanUserLibrary(library))
    })
  }
}

const prepUserDataForLibraryFetch = (userData) => {
  return Object.assign({}, {user_id: userData.id})
}

export const loggedInStatus = (value) => {
  return {
    type: "LOGGED_IN_STATUS",
    status: value,
    func: value => loggedInStatus(value)
  }
}

export const determineLoggedInStatus = (input) => {
  return dispatch => {
    dispatch(loggedInStatus(input))
  }
}

// log in existing user
export const fetchUser = userData => {
  return dispatch => {
    return new fetchCalls().fetchRegisteredUser(userData)
    .then(data => {
      dispatch(loggedInStatus(true))
      dispatch(fetchUserLibrary(Object.assign({},{user_id: data.id})))
    })
    .then()
  }
}



// register new user
// export const registerNewUser = (userData) => {
//   return dispatch => {
//     new fetchCalls().createNewUser(userData)
//     .then(data => {
//       dispatch()
//     }
//   }
// }

export const modalState = (value) => {
  console.log('modalState action')
  return {
    type: "MODAL_STATE",
    value: value,
    func: (value) => modalState(value)
  }
}

export const isResponseTrueYo = (value) => {
  console.log('IS_RESPONSE_TRUE_YO')
  return {
    type: "IS_RESPONSE_TRUE_YO",
    value: value,
    func: (value) => isResponseTrueYo(value)
  }
}

export const logInType = (method) => {
  return {
    type: "LOG_IN_TYPE",
    method: method
  }
}

export const bookSavedToWantedLibrary = (libraryObj) => {
  return {
    type: "BOOK_SAVED_TO_WANTED_LIBRARY",
    library: libraryObj
  }
}
export const saveBookToWantedLibrary = (library, bookObj) => {
  const newLibrary = [...library, bookObj]
  const findBook = library.indexOf(bookObj)

  if (findBook >= 0) {
    const newState = newLibrary.filter(cVal => cVal.id !== bookObj.id)
    return dispatch => {
      dispatch(bookSavedToWantedLibrary(newState))
    }
  }

  if (findBook === -1) {
    return dispatch => {
      dispatch(bookSavedToWantedLibrary(newLibrary))
    }
  }
}

export const bookSavedToReadLibrary = (libraryObj) => {
  return {
    type: "BOOK_SAVED_TO_READ_LIBRARY",
    library: libraryObj
  }
}


export const saveBookToReadLibrary = (library, bookObj) => {
  const newLibrary = [...library, bookObj]
  const findBook = library.indexOf(bookObj)

  if (findBook >= 0) {
    const newState = newLibrary.filter(cVal => cVal.id !== bookObj.id)
    return dispatch => {
      dispatch(bookSavedToReadLibrary(newState))
    }
  }

  if (findBook === -1) {
    return dispatch => {
      dispatch(bookSavedToReadLibrary(newLibrary))
    }
  }
}

export const bookSavedToOwnedLibrary = (bookArray) => {
  return {
    type: "SAVE_BOOK_TO_OWNED_LIBRARY",
    library: bookArray
  }
}

export const saveBookToOwnedLibrary = (library, bookObj) => {
  const newLibrary = [...library, bookObj]
  const findBook = library.indexOf(bookObj)

  if (findBook >= 0) {
    const newState = newLibrary.filter(cVal => cVal.id !== bookObj.id)
    return dispatch => {
      dispatch(bookSavedToOwnedLibrary(newState))
    }
  }

  if (findBook === -1) {
    return dispatch => {
      dispatch(bookSavedToOwnedLibrary(newLibrary))
    }
  }
}

// THIS NEEDS TO BE A SORT OF 'REDUCER' ACTION !!!
// IT WILL BE THE LAST METHOD CALLED BY THE FETCHUSER ACTION  !!!
export const verifyUserIdent = (serverResp, serverFeed, funkyFunc) => {
  // serverResp expected as {id: 'a number'}
  // serverFeed expected as {email:'', username:'',password:''}
  // EXPECT serverResp.library to be user library
  // funkyFunc expected as an array of actions

  if (serverResp.username === serverFeed.username
      &&
      serverResp.password === serverFeed.password) {
      // setTimeout(funkyFunc([serverResp, serverFeed]), 3000)
      // ^^ use this as a spacce of time to show off a loader, like a gighy Nacho shouting to the kids to 'go read a book!'
    return funkyFunc.forEach( daFunk => {

      switch (daFunk.type) {
        // I dont think I'll need this but I'll hold onto it for now 8/3
        case "IS_RESPONSE_TRUE_YO":
          return daFunk(true).func(true)

        case "LOGGED_IN_STATUS":
          return daFunk(true).func(true)

        case "MODAL_STATE":
          return daFunk(false).func(false)

        case "ACTIVE_USER_LIBRARY":
          return daFunk.func(serverResp.library)

        default:
          return null
      }
    })
  }

  return null
}














//
