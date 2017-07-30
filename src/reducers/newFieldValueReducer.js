export const newFieldValueReducer = (state=[], action) => {
  switch (action.type) {
    case "NEW_FIELD_VALUE":
        return action.input

    default:
      return state
  }
}
