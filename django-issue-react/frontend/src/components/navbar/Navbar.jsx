import React, {useState} from 'react';
import { RiMenu3Line, RiCloseLine} from 'react-icons/ri'
import './navbar.css';
import logo from '../../assets/issue.png'

const Menu = () =>(
  <>
  <p><a href="#admin"></a>Admin</p>
  <p><a href="#issues"></a>Issues</p>
  </>
    
)

const Navbar = () => {
  const[toggleMenu, setToggleMenu] = useState(false);

  return( 
  <div className='issue__navbar'>
    <div className='issue__navbar-links'>
      <div className='issue__navbar-links_logo'>
          <img src={logo} alt="logo"></img>
      </div>
      <div className='issue__navbar-links_container'>
          <Menu/>
      </div>
    </div>
    <div className='issue__navbar-sign'>
        <p>Sign in</p>
        <button type='button'> Sign up</button>
    </div>
    <div className='issue__navbar-menu'>
      {toggleMenu
        ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)}/>
        : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)}/>
      }
      {toggleMenu &&(
        <div className='issue__navbar-menu_container scale-up-center' >
          <div className='issue__navbar-menu_container-links'>
            <Menu />
            <div className='issue__navbar-menu_container-links-sign'>
            <p>Sign in</p>
            <button type='button'> Sign up</button>
            </div>
          </div>
        </div>
      )}
    </div>
  </div>
  )};

export default Navbar;
