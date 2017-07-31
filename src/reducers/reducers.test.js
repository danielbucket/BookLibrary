import  { booksReducer }          from './booksReducer';
import  { wantedLibraryReducer,
          readLibraryReducer,
          ownedLibraryReducer }   from './libraryReducer';
import  { newFieldValueReducer }  from './newFieldValueReducer';
import  { viewSingleBookReducer } from './viewSingleBookReducer';
import    * as actions            from '../actions/actions';
import  { hackeyStub }            from '../assets/stubs';

describe('bookReducer', () => {
  it('01: should return an action value', () => {
    const state = []
    const actionResult = actions.fetchBooksSuccess(hackeyStub)

    expect(booksReducer(state, actionResult)).toEqual(hackeyStub)
  })
})

describe('wantedLibraryReducer', () => {
  it('01: should return expected library object', () => {
    const state = []
    const actionResult = actions.bookSavedToWantedLibrary(hackeyStub)

    expect(wantedLibraryReducer(state, actionResult)).toEqual(hackeyStub)
  })
})

describe('readLibraryReducer', () => {
  it('01: should return expected library object', () => {
    const state = []
    const actionResult = actions.bookSavedToReadLibrary(hackeyStub)

    expect(readLibraryReducer(state, actionResult)).toEqual(hackeyStub)
  })
})

describe('ownedLibraryReducer', () => {
  it('01: should return expected library object', () => {
    const state = []
    const actionResult = actions.bookSavedToOwnedLibrary(hackeyStub)

    expect(ownedLibraryReducer(state, actionResult)).toEqual(hackeyStub)
  })
})

describe('newFieldValueReducer', () => {
  it('01: should return expected object', () => {
    const state = []
    const input = 'a string'
    const actionResult = actions.newFieldValue(input)

    expect(newFieldValueReducer(state, actionResult)).toEqual('a string')
  })
})

describe('viewSingleBookReducer', () => {
  it('01: should return an expected result', () => {
    const state = {}
    const book = hackeyStub
    const actionResult = actions.viewSingleBook(book)

    expect(viewSingleBookReducer(state, actionResult)).toEqual(hackeyStub)
  })
})
