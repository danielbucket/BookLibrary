import { Link } from 'react-router-dom';
import React from 'react';
import { registeredUsersStub } from './stubs';

const uuidv4 = require('uuid/v4');

///
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

///
export const changeModalState = (mainState) => {
  mainState.setState({
    modalState: true
  })
}



///
export const renderSaveBookButtons = (logInState,bookData,saveBook,changeModalState) => {
  if (logInState) {
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
        <Link to='/login' >
          <button onClick={() => { changeModalState() }}>
                Log In to save this book to your personal library
          </button>
        </Link>
      )
    }
  }



///
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

///
export const logInUser = (mainState, userObj, source) => {
  //source should be a string identifying where the call was made from


  mainState.setState({
    userState: userObj,
    modalState: false
  })
}

///
const setRegisteredUsers = registeredUserState => {
  localStorage.setItem('bookBucketUsersList', JSON.stringify(registeredUserState))
}

export const getRegisteredUsers = () => {
  const registeredUsersArray = JSON.parse(localStorage.getItem('bookBucketUsersList'))

  if (registeredUsersArray === null) {
    setRegisteredUsers(registeredUsersStub)
  }

  return (
    JSON.parse(localStorage.getItem('bookBucketUsersList'))
  )
}

///
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
