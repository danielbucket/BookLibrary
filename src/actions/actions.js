import fetchCalls from '../assets/fetches/fetchCalls';

export const fetchBook = (query) => {
  return dispatch => {
    new fetchCalls().fetchBooks(query)
    .then(data => {
      dispatch(fetchBooksSuccess(data))
    })
  }
}

export const fetchBooksSuccess = (data) => {
  return {
    type: 'FETCH_BOOKS_SUCCESS',
    books: data
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

export const newFieldValue = (input) => {
  return {
    type: "NEW_FIELD_VALUE",
    input: input
  }
}

export const resetFieldValue = (input) => {
  return dispatch => {
    dispatch(newFieldValue(input))
  }
}

export const loginStatus = (user) => {
  return {
    type: "LOGIN_STATUS",
    status: user
  }
}

export const fetchRegisteredUsers = (logInData) => {
  return dispatch => {
    new fetchCalls().fetchRegisteredUsers(logInData)
    .then(data => {
      dispatch(loginStatus(data))
    })
  }
}

export const modalState = (value) => {
  return {
    type: "MODAL_STATE",
    value: value
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


// return dispatch => {
//   dispatch(bookSavedToOwnedLibrary([...library]))
// }

//
