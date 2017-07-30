export const logInRegisteredUserReducer = (state={}, action) => {
  switch (action.type) {
    case "REGISTERED_USER_DATA":
      return action.type

    default:
      return state
  }
}
