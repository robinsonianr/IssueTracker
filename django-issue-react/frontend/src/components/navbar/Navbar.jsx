import React from 'react';
import { RiMenu3Line, RiCloseLin} from 'react-icons/ri'
import './navbar.css';
import logo from '../../assets/issue.png'




const Navbar = () => {
  return( 
  <div className='issue__navbar'>
    <div className='issue__navbar-links'>
      <div className='issue__navbar-links_logo'>
          <img src={logo} alt="logo" width='75'></img>
      </div>
    </div>
  </div>
  )};

export default Navbar;
