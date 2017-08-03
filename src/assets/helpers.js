import  { Link } from 'react-router-dom';
import    React from 'react';
import  { registeredUsersStub } from './stubs';

const uuidv4 = require('uuid/v4');

///
export const renderMultiple = (arr,containerClass,itemClass) => {
  if (!arr) {
    return null
  }
  if (arr.length > 1) {
    const print = arr.map(i => {
      return (
        <div className={itemClass}
                   key={uuidv4()}>{i}</div>
      )
    })
    return (
      <div className={containerClass}
                 key={uuidv4()}>{print}</div>
    )
  } else {
    return arr
  }
}

///
export const renderIndustryIdentifiers = (input=[]) => {
  const result = input.map( i => {
    return (
      <div className={`one-book-${i.type}-identifier` }
                 key={i.identifier }>
        <span className='one-book-identifier-title'>{i.type}:</span>
        <span className='one-book-identifier-number'>{i.identifier}</span>
      </div>
    )
  })
  return (
    <div className='one-book-identifier-box'>Industry Identifiers:
      { result }
    </div>
  )
}


export const userActiveOrInactiveSwitch = ( loggedInStatus, book,
                                            wantedBookFunc, wantedLibrary,
                                            readBookFunc, readLibrary,
                                            ownedBookFunc, ownedLibrary,
                                            proppedContainer, modalState,
                                            logInType ) => {
  if (!loggedInStatus) {
    return (
      <div>
      <button onClick={() => {
        modalState(true)
        logInType('login')
      }}>Sign In</button>

      <button onClick={() => {
        modalState(true)
        logInType('register')
      }}>Register</button>
      </div>
    )
  }

  return (
    <div>
      <button onClick={() => wantedBookFunc(wantedLibrary, book)}>Want to read this book?</button>
      <button onClick={() => readBookFunc(readLibrary, book)}>Read this book?</button>
      <button onClick={() => ownedBookFunc(ownedLibrary, book)}>Own this book?</button>
    </div>
  )
}

export const reduceLibrary = (library) => {
  console.log(library)
}













///
