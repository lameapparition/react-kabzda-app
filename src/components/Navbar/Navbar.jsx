import React from 'react';
import c from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
import FriendItem from './FriendItem/FriendItem';

const Navbar = (props) => {

  let friendsElements = props.state.friends
    .map(f => <FriendItem id={f.id} name={f.name} pic={f.pic} />)

  return (
    <div className={c.nav}>
      <nav>
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
        {/* <div onClick={} className={c.item}>
          Friends
        </div> */}
      </nav>

      <div className={c.friends}>
        <div className={c.friendsTitle}>
          Friends
        </div>
        <div className={c.friendsBlock}>
          {friendsElements}
        </div>
      </div>
    </div>

  )
}

export default Navbar;
