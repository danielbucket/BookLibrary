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

  it('03: viewSingleBook should return a function', () => {
    const returnValue = actions.acquireSingleBook(hackeyStub)

    expect(typeof returnValue).toEqual('function')
  })

  it('04: loggedInStatus should return an expected object', () => {
    const value = false
    const expected = actions.loggedInStatus(value)

    expect(expected.type).toEqual("LOGGED_IN_STATUS")
    expect(typeof expected.func).toEqual("function")
    expect(expected.status).toEqual(value)
  })

  xit('05: loggedInStatus should return a recursive function', () => {
    const value = false
    const returnedFunc = actions.loggedInStatus(value)
    const doubleExpect = returnedFunc.func(value)


    expect(returnedFunc.func(value)).toEqual(doubleExpect)
    expect(typeof returnedFunc.func).toEqual("function")
  })

  it('06: modalState should return an expected object', () => {
    const value = false
    const expected = actions.modalState(value)

    expect(typeof expected.func).toEqual('function')
    expect(expected.type).toEqual('MODAL_STATE')
    expect(expected.value).toEqual(value)
  })

  it('07: isResponseTrueYo should return an exected object with funciton',() => {
    const value = true
    const expected = actions.isResponseTrueYo(value)

    expect(typeof expected.func).toEqual('function')
    expect(expected.type).toEqual('IS_RESPONSE_TRUE_YO')
    expect(expected.value).toEqual(value)
  })

  it('07: bookSavedToWantedLibrary should return an expected object', () => {
    const book = hackeyStub
    const expected = actions.bookSavedToWantedLibrary(hackeyStub)

    expect(expected.type).toEqual('BOOK_SAVED_TO_WANTED_LIBRARY')
    expect(expected.library).toEqual(book)
  })

})
