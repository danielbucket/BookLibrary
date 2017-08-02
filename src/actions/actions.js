import    fetchCalls      from '../assets/fetches/fetchCalls';
import  { reduceLibrary } from '../assets/helpers';

// having data default to an empty array is an short term fix
// the search submit button should be rendered inert unless it the search
// field has a value
export const fetchBooksSuccess = (data=[]) => {
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

export const loginStatus = (user) => {
  return {
    type: "LOGIN_STATUS",
    status: user
  }
}

export const activeUserLibrary = (library) => {
  return {
    type: "ACTIVE_USER_LIBRARY",
    library: library
  }
}

export const cleanUserLibrary = (library) => {
  return dispatch => {
    dispatch(activeUserLibrary(reduceLibrary(library)))
  }
}

export const fetchUserLibrary = (userdata) => {
  return dispatch => {
    new fetchCalls().fetchUsersLibrary(userdata)
    .then( library => {
      dispatch(cleanUserLibrary(library))
    })
  }
}









// log in existing user
export const fetchUser = (userData) => {
  return dispatch => {
    return new fetchCalls().fetchRegisteredUser(userData)
    .then(data => {
      dispatch(loginStatus(true))
      dispatch(fetchUserLibrary(userData))
    })
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
  return {
    type: "MODAL_STATE",
    value: value
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

export const loggedInStatus = (input) => {
  return {
    type: "LOGGED_IN_STATUS",
    status: input
  }
}

export const determineLoggedInStatus = (input) => {
  return dispatch => {
    dispatch(loggedInStatus(input))
  }
}




//
