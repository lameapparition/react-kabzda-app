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
        <NavLink className={c.link} to='profile'>
          <div className={c.item}>
            Profile
          </div>
        </NavLink>
        <NavLink className={c.link} to='im'>
          <div className={c.item}>
            Messages
          </div>
        </NavLink>
        <NavLink className={c.link} to='music'>
          <div className={c.item}>
            Music
          </div>
        </NavLink>
        <NavLink className={c.link} to='settings'>
          <div className={c.item}>
            Settings
          </div>
        </NavLink>
        {/* <div onClick={} className={c.item}>
          Friends
        </div> */}
        {/* <NavLink to='profile' className={({isActive})  =>
        isActive ? c.active : c.default}>Profile</NavLink> */}
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
