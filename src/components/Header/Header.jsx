import React from 'react';
import c from './Header.module.css';
import logo from './logo.png' 

const Header = () => {
    return (
        <header className={c.header}>
            {/* <img src='https://previews.123rf.com/images/urfandadashov/urfandadashov1808/urfandadashov180807147/106810119-water-vector-icon-isolated-on-transparent-background-water-logo-concept.jpg' /> */}
            <img src={logo}/>
        </header>
    );
}

export default Header;
