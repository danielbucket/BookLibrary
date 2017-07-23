import    React                       from 'react';
import  { renderMultiple }            from '../assets/helpers';
import  { renderSaveBookButtons,
          renderIndustryIdentifiers } from '../assets/helpers';
import                                     './OneBook.css';



const OneBook = ({ bookData, saveBook, logInState, changeModalState }) => {
  const { volumeInfo:{  authors,categories,
                        description,industryIdentifiers,
                        language,pageCount,
                        publishedDate,publisher,
                        subtitle,title }} = bookData
  return (
    <div className='one-book-box'
               key={ bookData.id } >
      <header className='one-book-title-container'>
        <h5 className='one-book-title'>{ title }</h5>
        <h3 className='on-book-sub-title'>{ subtitle }</h3>
      </header>
      <div className='one-book-author-text'>Author:
        { renderMultiple(authors,'one-book-authors-box','one-book-author') }</div>
      <p className='one-book-description'>{ description }</p>
      <p className='one-book-publisher-text'>Publisher:
        <span className='one-book-publisher'>{ publisher }</span>
      </p>
      <p className='one-book-publish-date-text'>Published:
        <span className='one-book-publish-date'>{ publishedDate }</span>
      </p>
      { renderIndustryIdentifiers(industryIdentifiers) }
      <div className='one-box-pagecount-text'>Page Count:
        <span className='one-box-pagecount'>{ pageCount }</span>
      </div>
      <div className='one-box-language-text'>Language:
        <span className='one-box-language'>{ language }</span>
      </div>
      { renderSaveBookButtons(logInState, bookData, saveBook, changeModalState) }
    </div>
  )
}

export default OneBook;
