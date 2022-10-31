import React from 'react';
import Logo from '../img/pronostico-del-tiempo.png'
import SearchBar from './SearchBar.jsx';
import './Nav.css';
import  {NavLink} from 'react-router-dom';

function Nav({onSearch}) {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <NavLink  activeClassName='activo' to='/'>
     <img id="logoClima" src={Logo} alt="" />
        <span className="navbar-brand">
          Home - Weather App
        </span>
        </NavLink>
        <SearchBar
          onSearch={onSearch}
        />
        <NavLink activeClassName='active'  to='/about'>
      <span id='hola'>About</span>
        </NavLink>
        
    </nav>
  );
};

export default Nav;
