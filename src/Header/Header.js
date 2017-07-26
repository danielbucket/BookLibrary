import    React   from 'react';
import    Search  from '../Search/Search';
import                 './Header.css';
import  { Link }  from 'react-router-dom';

const Header = ({ fetchBooks }) => {


  return (
    <div className='header-container'>
      <Link to='/'>
        <div className='book-bucket-logo'>Book Bucket</div>
      </Link>
      <Search fetchBooks={ fetchBooks }/>
    </div>
  )
}

export default Header;
