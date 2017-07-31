export const wantedLibraryReducer = (state=[], action) => {
  switch (action.type) {
    case "BOOK_SAVED_TO_WANTED_LIBRARY":
      return action.library

    default:
      return state
  }
}

export const readLibraryReducer = (state=[], action) => {
  switch (action.type) {
    case "BOOK_SAVED_TO_READ_LIBRARY":
      return action.library

    default:
      return state
  }
}

export const ownedLibraryReducer = (state=[], action) => {
  switch (action.type) {
    case "SAVE_BOOK_TO_OWNED_LIBRARY":
      return action.library

    default:
      return state
  }
}
