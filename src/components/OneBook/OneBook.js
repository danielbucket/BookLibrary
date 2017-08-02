import    React                         from 'react';
import  { Route }                       from 'react-router-dom';
import  { renderMultiple,
          renderIndustryIdentifiers,
          userActiveOrInactiveSwitch }  from '../../assets/helpers';
import  { ProppedLogInRegisterModal }   from '../../containers/LogInRegisterModal/LogInRegisterModalContainer';
import                                       './OneBook.css';



const OneBook = ({  book, user, changeModalState,
                    addBookToWantedLibrary, addBookToReadLibrary,
                    addBookToOwnedLibrary, wantedLibrary,
                    readLibrary, ownedLibrary, loggedInStatus, logInType }) => {

  if (!book.volumeInfo) {
    ///loader would go here
    return (<div>Loading</div>)
  }

  const { title, subtitle, authors, description,
          publisher, publishedDate, industryIdentifiers,
          pageCount, language } = book.volumeInfo

  return (
    <div className='one-book-box'>
     <header className='one-book-title-container'>
       <h5 className='one-book-title'>{title}</h5>
       <h3 className='on-book-sub-title'>{subtitle}</h3>
     </header>
     <div className='one-book-author-text'>Author:
       { renderMultiple(authors,'one-book-authors-box','one-book-author') }</div>
     <p className='one-book-description'>{description}</p>
     <p className='one-book-publisher-text'>Publisher:
       <span className='one-book-publisher'>{publisher}</span>
     </p>
     <p className='one-book-publish-date-text'>Published:
       <span className='one-book-publish-date'>{publishedDate}</span>
     </p>
     { renderIndustryIdentifiers(industryIdentifiers)}
     <div className='one-box-pagecount-text'>Page Count:
       <span className='one-box-pagecount'>{pageCount}</span>
     </div>
     <div className='one-box-language-text'>Language:
       <span className='one-box-language'>{language}</span>
     </div>


     {userActiveOrInactiveSwitch( loggedInStatus, book, addBookToWantedLibrary,
                                  wantedLibrary, addBookToReadLibrary,
                                  readLibrary, addBookToOwnedLibrary,
                                  ownedLibrary, ProppedLogInRegisterModal,
                                  changeModalState, logInType )}
    </div>
  )
}

export default OneBook;
