import { Link } from 'react-router-dom';
import React from 'react';
const uuidv4 = require('uuid/v4');

export const renderMultiple = (arr,containerClass,itemClass) => {
  if (!arr) {
    return null
  }
  if (arr.length > 1) {
    const print = arr.map(i => {
      return (
        <div className={ itemClass }
                   key={ uuidv4() }>{ i }</div>
      )
    })
    return (
      <div className={ containerClass }
                 key={ uuidv4() }>{ print }</div>
    )
  } else {
    return arr
  }
}

export const changeModalState = (mainState) => {
  mainState.setState({
    modalState: true
  })
}

export const renderSaveBookButtons = (logInState,bookData,saveBook,changeModalState) => {
  if (logInState === true) {
    return (
      <div>
        <button className='save-to-library-btn'
                  onClick={() => {
                    saveBook(bookData,'read')}}>Read This Book?</button>
        <button className='save-to-library-btn'
                  onClick={() => {
                    saveBook(bookData,'want')}}>Want This Book?</button>
        <button className='save-to-library-btn'
                  onClick={() => {
                    saveBook(bookData,'own')}}>Own This Book?</button>
      </div>
    )
  } else {
      return (
          <Link to='LogInRegisterModal/login'>
            <div onClick={() => { changeModalState() }}>
              Log In to save this book to your personal library
            </div>
          </Link>
      )
    }
  }


export const renderIndustryIdentifiers = (input=[]) => {
  const result = input.map( i => {
    return (
      <div className={ `one-book-${ i.type }-identifier` }
                 key={ i.identifier }>
        <span className='one-book-identifier-title'>{ i.type }:</span>
        <span className='one-book-identifier-number'>{ i.identifier }</span>
      </div>
    )
  })
  return (
    <div className='one-book-identifier-box'>Industry Identifiers:
      { result }
    </div>
  )
}

export const logInUser = (mainState, logInUserName, logiInEmail) => {
  const { userState, registeredUsers } = mainState.state;







  mainState.setState({
    modalState: false
  })
}

const setRegisteredUsers = registeredUserState => {
  localStorage.setItem('bookBucketUsersList', JSON.stringify(registeredUserState))
}

export const getRegisteredUsers = registeredUserState => {
  const registeredUsersArray = JSON.parse(localStorage.getItem('bookBucketUsersList'))

  if (registeredUsersArray === null) {
    setRegisteredUsers(registeredUserState)
  }

  return (
    JSON.parse(localStorage.getItem('bookBucketUsersList'))
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
  // return (
  //   Object.assign({...registeredUsersState}, { userName:newUserName,
  //                                              userEmail:newUserEmail,
  //                                              password:password,
  //                                             id:uuidv4() })
  // )
}



//
