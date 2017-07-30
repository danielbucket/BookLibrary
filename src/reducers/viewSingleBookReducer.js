export const viewSingleBookReducer = (state={}, action) => {
  switch (action.type) {
    case "VIEW_SINGLE_BOOK":
      return action.bookData;

    default:
      return state
  }
}
