export const modalState = (state=false, action) => {
  switch (action.type) {
    case "MODAL_STATE":
      return action.value

    default:
      return state
  }
}
