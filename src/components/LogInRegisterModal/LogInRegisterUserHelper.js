import React from 'react';
const uuidv4 = require('uuid/v4');

export const manageCurrentUser = ({registeredUsers,userState,mainState}) => {
  console.log(registeredUsers)
  return (
    <div>This is the modal component</div>
  )
}

export const logInUser = () => {

  return (
    <div>
      <h3>Username:<input /></h3>
    </div>
  )
}


export const registerNewUser = (newUserName,newUserEmail,password,registeredUsersState) => {
  if (registeredUsersState.userName === newUserName) {
    return (
      <div>
        <div>That name already exists</div>
        <button>Forgot your user name?</button>
      </div>
    )
  }
  if (registeredUsersState.email === newUserEmail) {
    return (
      <div>That email address already exists</div>
    )
  }
  return (
    Object.assign({...registeredUsersState}, { userName:newUserName,
                                               userEmail:newUserEmail,
                                               password:password,
                                              id:uuidv4() })
  )
}
