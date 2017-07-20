import    React   from 'react';
import    Search  from '../Search/Search';
import                 './Header.css';

const Header = ({ fetchBooks }) => {

  return (
    <div>
      <Search fetchBooks={ fetchBooks }/>
    </div>
  )

}

export default Header;
