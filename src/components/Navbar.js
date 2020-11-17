import React, { useState, useEffect } from 'react';
import Logo from '../images/logo.png';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
    window.addEventListener('resize', showButton);
    return {
      // window.removeEventListener('resize', showButton)
    };
  }, []);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <nav className='navbar'>
          <div className='navbar-container container'>
            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
              <img src={Logo} alt='Logo' srcset='' />
            </Link>
            <div className='menu-icon' onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <a href='https://github.com/signchain' className='nav-links'>
                  Developers
                </a>
              </li>
              <li className='nav-item'>
                <a
                  href='https://hackmd.io/8oj1tY8fRmih7jhtdBmKCg?view'
                  target='_blank'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Roadmap
                </a>
              </li>
              <li className='nav-btn'>
                {button ? (
                  <a href='https://app.signchain.xyz' className='btn-link'>
                    <Button buttonStyle='btn--outline'>APP</Button>
                  </a>
                ) : (
                  <a href='https://app.signchain.xyz' className='btn-link'>
                    <Button
                      buttonStyle='btn--outline'
                      buttonSize='btn--mobile'
                      onClick={closeMobileMenu}
                    >
                      APP
                    </Button>
                  </a>
                )}
              </li>
            </ul>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
