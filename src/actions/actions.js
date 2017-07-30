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

export const aquireSingleBook = (book) => {
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

export const recieveRegisteredUsers = (response) => {
  return {
    type: "REGISTERED_USER_DATA",
    userData: response
  }
}


// export const fetchRegisteredUsers = (logInData) => {
//   return dispatch = {
//     new fetchCalls().fetchRegisteredUsers(logInData)
//     .then(data => {
//       dipsatch(recieveRegisteredUsers(data))
//     })
//   }
// }
