export const loggedInStatus = (state=false, action) => {
  switch (action.type) {
    case "LOGGED_IN_STATUS":
      return action.status

    default:
      return state
  }
}
