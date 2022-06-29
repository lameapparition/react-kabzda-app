import React from 'react';
import c from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className={c.nav}>
      <div className={c.item}>
        {/* <NavLink to='profile' className={({isActive})  =>
        isActive ? c.active : c.default}>Profile</NavLink> */}
        <NavLink to='profile'>Profile</NavLink>
      </div>
      <div className={c.item}>
        <NavLink to='feed'>News</NavLink>
      </div>
      <div className={c.item}>
        <NavLink to='im'>Messages</NavLink>
      </div>
      <div className={c.item}>
        <NavLink to='music'>Music</NavLink>
      </div>
      <div className={c.item}>
        <NavLink to='settings'>Settings</NavLink>
      </div>
    </nav>
  )
}

export default Navbar;
