import React from 'react';
import { Link } from 'react-router-dom';

export const renderMultiple = (arr,containerClass,itemClass) => {
  // debugger
  if (!arr) {
    return null
  }
  if (arr.length > 1) {
    const print = arr.map(i => {
      return (
        <div className={ itemClass }>{ i }</div>
      )
    })
    return (
      <div className={ containerClass }>{ print }</div>
    )
  } else {
    return arr
  }
}

export const renderSaveBookButtons = (userState,bookInfo,funcA) => {
  if (userState) {
    return (
      <div>
        <button onClick={() => {
                  funcA(bookInfo,'read')}}>Read This Book?</button>
        <button onClick={() => {
                  funcA(bookInfo,'want')}}>Want This Book?</button>
        <button onClick={() => {
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
