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

export const renderSaveBookButtons = (userState,bookInfo,funcA) => {
  if (userState === true) {
    return (
      <div>
        <button className='save-to-library-btn'
                  onClick={() => {
                    funcA(bookInfo,'read')}}>Read This Book?</button>
        <button className='save-to-library-btn'
                  onClick={() => {
                    funcA(bookInfo,'want')}}>Want This Book?</button>
        <button className='save-to-library-btn'
                  onClick={() => {
                    funcA(bookInfo,'own')}}>Own This Book?</button>
      </div>
    )
  } else {
      return (
          <button>
            Log In to save this book to your personal library
          </button>
      )
    }
  }


export const renderIndustryIdentifiers = (input=[]) => {
  const result = input.map( i => {
    return (
      <div className={`one-book-${ i.type }-identifier`} key={i.identifier}>
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

export const logInUser = () => {
  this.setState({
    modalState: false
  })
}
