import    React             from 'react';
import  { ProppedSearch }   from '../../containers/Search/SearchContainer';
import                          './Header.css';
import  { Link }            from 'react-router-dom';

const Header = () => {

  return (
    <div className='header-container'>
      <Link to='/'>
        <div className='book-bucket-logo'>Book Bucket</div>
      </Link>
      <ProppedSearch />
    </div>
  )
}

export default Header;
