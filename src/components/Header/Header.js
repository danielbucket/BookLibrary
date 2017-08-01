import    React             from 'react';
import  { ProppedSearch }   from '../../containers/Search/SearchContainer';
import                           './Header.css';
import  { Link }            from 'react-router-dom';
import  { headerStyle }     from './headerStyle';

const Header = ({wantedLibrary, readLibrary, ownedLibrary}) => {
  const { headerContainer, bookBucketLogo, counterContainer } = headerStyle
  return (
    <div style={headerContainer}>
      <Link to='/'>
        <div style={bookBucketLogo}>Book Bucket</div>
      </Link>
      <div id='libraryCounter' style={counterContainer}>
        <p id='wantedBooks'>Wanted Books:<span>{wantedLibrary.length}</span></p>
        <p id='readBooks'>Read Books:<span>{readLibrary.length}</span></p>
        <p id='ownedBooks'>Owned Books:<span>{ownedLibrary.length}</span></p>
      </div>
      <ProppedSearch />
    </div>
  )
}

export default Header;
