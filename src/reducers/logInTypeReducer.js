export const logInTypeReducer = (state='', action) => {
  switch (action.type) {
    case "LOG_IN_TYPE":
      return action.method
    default:
      return state
  }
}
