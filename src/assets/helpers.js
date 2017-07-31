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
