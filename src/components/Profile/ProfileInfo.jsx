import React from 'react';
import c from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img className={c.background} src='https://www.gettyimages.pt/gi-resources/images/Homepage/Hero/PT/PT_hero_42_153645159.jpg' />
            </div>
            <div className={c.description}>
                up + description
            </div>
        </div>
    );
}

export default ProfileInfo;
