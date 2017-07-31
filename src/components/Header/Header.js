import    React             from 'react';
import  { ProppedSearch }   from '../../containers/Search/SearchContainer';
import                           './Header.css';
import  { Link }            from 'react-router-dom';

const Header = ({wantedLibrary, readLibrary, ownedLibrary}) => {

  return (
    <div className='header-container'>
      <Link to='/'>
        <div className='book-bucket-logo'>Book Bucket</div>
      </Link>
      <p>Wanted Books:<span>{wantedLibrary.length}</span></p>
      <p>Read Books:<span>{readLibrary.length}</span></p>
      <p>Owned Books:<span>{ownedLibrary.length}</span></p>
      <ProppedSearch />
    </div>
  )
}

export default Header;
