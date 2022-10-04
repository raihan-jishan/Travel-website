import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Navbar.css'
// module css 
import '../../styles/Button.css';
// authentication bu Auth0 provider
function Navbar() {
  // useState hook 
  const [click, setClick] = useState(false);
  // button -- setButton 
  const [button, setButton] = useState(true);
  // handleClick function 
  const handleClick = () => setClick(!click);
  // close Mobile function 
  const closeMobileMenu = () => setClick(false);
// on Click show something button 
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  // useEffect hook 
  useEffect(() => {
    showButton();
  }, [])
//  window .addEvenListener method 
  window.addEventListener('resize', showButton);
// return jsx element 
  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
           LOGO
            <i className="fa-solid fa-austral-sign"/>
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/services'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Services
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/product'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Products
              </Link>
            </li>
      {/*  dark mode */}
        




            <li>
              <Link to='/login'>
          <button className='basicButton login '>Log in </button>
           </Link>

            </li>
          </ul>
            


        </div>
      </nav>
    </>
  );
}

export default Navbar;