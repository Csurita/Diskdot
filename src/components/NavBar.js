import React, { useState } from 'react';
import '../styles/NavBar.css';
import Logo from '../assets/logo.svg';
import { Link } from 'react-router-dom';

function NavBar() {
  //sets initial state of showing the menu for mobile
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  //removes menu when a link is clicked
  const removeMenu = () => {
    setShowMenu(false);
  };

  return (
    <header className='header-area'>
          <nav className='navbar'>
            <Link className='logo' to='/'>
              <img src={Logo} alt='logo' />
            </Link>
            <ul className={`nav-menu ${showMenu ? 'show' : ''}`} >
              <li onClick={removeMenu}>
                <Link to='https://form.jotform.com/232277617660157' onClick={toggleMenu}>
                  Contact Us
                </Link>
              </li>
            </ul>

            <div className={`hamburger ${showMenu ? 'show' : ''}`} onClick={toggleMenu}>
              <div className='bar'></div>
              <div className='bar'></div>
              <div className='bar'></div>
            </div>
          </nav>
    </header>
  );
}

export default NavBar;