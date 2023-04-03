import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.png';
import './navbar.css';

const Menu = () => (
  <>
  <p><a href='#home'>Home</a></p>
  <p><a href='#whatflow'>What is flow</a></p>
  <p><a href='#features'>Case studies</a></p>
  <p><a href='#blog'>Blog</a></p>
  </>
)

const Navbar = () => {
  const [ toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className='flow__navbar'>
      <div className='flow__navbar-links'>
        <div className='flow__navbar-links_logo'>
          <img src={logo} alt='logo'/>
        </div>
        <div className='flow__navbar-links_container'>
         <Menu />
        </div>
      </div>
      <div className='flow__navbar-sign'>
        <p>Sign in</p>
        <button type='button'>Sign up</button>
      </div>
      <div className='flow__navbar-menu'>
        {toggleMenu
        ? <RiCloseLine color='#fff' size={26} onClick={() => setToggleMenu(false)}/>
      : <RiMenu3Line color='#fff' size={26} onClick={() => setToggleMenu(true)}/>
      }
      {toggleMenu && (
        <div className='flow__navbar-menu_container gradient__bg '>
          <div className='flow_navbar-menu_container-links'>
           <Menu />
           </div>
           <div className='flow__navbar-menu_container-links-sign'>
        <p>Sign in</p>
        <button type='button'>Sign up</button>
        
        </div>
        </div>
      )}
      </div>
    </div>
  );
};

export default Navbar
