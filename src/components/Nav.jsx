import React from 'react';
import Logo from '../logoHenry.png'
import SearchBar from './SearchBar.jsx';
import './Nav.css';

function Nav({onSearch}) {
  return (
    <nav className='nav'>
      <h3 className='titulo'>Weather App</h3>
      <SearchBar onSearch={onSearch} />
    </nav>
  );
};

export default Nav;
