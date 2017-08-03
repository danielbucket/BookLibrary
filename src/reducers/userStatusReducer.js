export const userStatusReducer = (state={}, action) => {
  switch (action.type) {
    case "LOGIN_STATUS":
    console.log("bingo")
      return action.status

    default:
      return state
  }
}
