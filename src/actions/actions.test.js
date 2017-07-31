import * as actions from './actions';
import hackeyStub from '../assets/stubs';

describe('should', () => {

  it('01: should return an expected object', () => {
    const expected = {
      type: 'FETCH_BOOKS_SUCCESS',
      books: hackeyStub
    }

    expect(actions.fetchBooksSuccess(hackeyStub)).toEqual(expected)
  })

  it('02: should return an expected object', () => {
    const stub = hackeyStub
    const expected = {
      type: "VIEW_SINGLE_BOOK",
      bookData: stub
    }

    expect(actions.viewSingleBook(stub)).toEqual(expected)
  })

  it('02: viewSingleBook should return a function', () => {
    const returnValue = actions.acquireSingleBook(hackeyStub)

    expect(typeof returnValue).toEqual('function')
  })

  it('03: resetFieldValue shoul return a function', () => {
    const returnValue = actions.resetFieldValue('a string')

    expect(typeof returnValue).toEqual('function')
  })

  it('04: newFieldValue should return an expected object', () => {
    const input = 'a string'
    const expected = {
      type: "NEW_FIELD_VALUE",
      input: input
    }

    expect(actions.newFieldValue(input)).toEqual(expected)
  })

  it('05: loginStatus should return an expected object', () => {
    const id = 2
    const name= "hammerFace"
    const user = {name: name, id: id}
    const expected = actions.loginStatus(user)

    expect(expected.type).toEqual("LOGIN_STATUS")
    expect(expected.status).toEqual(user)
  })

  it('05: modalState should return an expected object', () => {
    const value = false
    const expected = actions.modalState(value)

    expect(expected.type).toEqual('MODAL_STATE')
    expect(expected.value).toEqual(value)
  })

  it('06: bookSavedToWantedLibrary should return an expected object', () => {
    const book = hackeyStub
    const expected = actions.bookSavedToWantedLibrary(hackeyStub)

    expect(expected.type).toEqual('BOOK_SAVED_TO_WANTED_LIBRARY')
    expect(expected.library).toEqual(book)
  })

})
