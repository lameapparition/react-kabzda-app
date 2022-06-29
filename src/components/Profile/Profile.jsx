import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import c from './Profile.module.css';

const Profile = () => {
    return (
        <div>
            <img className={c.background} src='https://www.gettyimages.pt/gi-resources/images/Homepage/Hero/PT/PT_hero_42_153645159.jpg' />
            <div>
                up + description
            </div>
            <MyPosts/>
        </div>

    );
}

export default Profile;
