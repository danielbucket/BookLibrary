import fetchCalls from '../assets/fetches/fetchCalls';

export const register = (userData) => {
  return {
    type: 'REGISTER_NEW_USER',
    userData
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
