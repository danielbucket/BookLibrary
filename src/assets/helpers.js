import React from 'react';

export const renderMultiple = arr => {
  if (!arr) {
    return null
  }
  if (arr.length > 1) {
    const print = arr.map(i => {
      return (<p className='render-multiple'>{ i }</p>)
    })
    return (
      <div className='render-multiple-container'>{ print }</div>
    )
  } else {
    return arr
  }
}

export const genericFetch = address => {
  return fetch(address)
         .then(resp => resp.json())
         .then(image => {
           return (
             <img src='address'
                  className='book-image'>{ image }</img>
           )
         })
}
