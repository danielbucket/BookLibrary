import    React, { Component }  from 'react';
import  { renderMultiple }      from '../assets/helpers';
import  { Link }                from 'react-router-dom';
import    SearchResults         from '../SearchResults/SearchResults';
import                               './OneBook.css';
import { renderSaveBookButtons }  from '../assets/helpers';

const OneBook = ({ bookData, saveBook, userState }) => {
  const { volumeInfo } = bookData
  const singleBook = Object.keys(volumeInfo).map( i => {
    // console.log('logging i: ', bookData[i])
//'Authors:' is being printed as many times as there are items to iterate over from the singleBooks keys. I'm gonna have take care of this issue at the fetch(?) Or is it on account of multiple renderings?
console.log(i)
    return (
      <div className='single-card'
                  id={ bookData.id }>

        <h3 className='single-book-title'>
          <span className="single-book-title-span">
            {volumeInfo[i].title}
          </span>
        </h3>

        <h5 className='single-book-author'>Authors:
          <span className=''>
            {/* { renderMultiple(bookData[i].authors, 'authors-container', 'authors-single') } */}
          </span>
        </h5>
        <div>
          {/* {bookData[i].} */}
        </div>
        {renderSaveBookButtons(userState, bookData, saveBook)}
      </div>
    )

  })



  return (
    <div className='one-book-box'>
      { singleBook }
    </div>
  )
}

export default OneBook;
