export const userStatusReducer = (state={}, action) => {
  switch (action.type) {
    case "LOGIN_STATUS":
      return action.status

    default:
      return state
  }
}
