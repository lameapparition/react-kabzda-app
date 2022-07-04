import React from 'react';
import c from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img className={c.background} src='https://www.gettyimages.pt/gi-resources/images/Homepage/Hero/PT/PT_hero_42_153645159.jpg' />
            </div>
            <div className={c.description}>
                <img src='https://s0.rbk.ru/v6_top_pics/ampresize/media/img/2/17/754598838857172.jpeg' />
                <div className={c.nameDescription}>
                    <div className={c.profileName}>
                        Yegor Platonov
                    </div>
                    <div>
                        Hello I'm Yegor, 21 y.o.
                        <br />
                        Beginner web developer
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;
