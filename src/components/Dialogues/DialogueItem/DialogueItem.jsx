import React from 'react';
import c from './DialogueItem.module.css';
import { NavLink } from 'react-router-dom';

const DialogueItem = (props) => {
    return (
        <div className={c.dialogue}>
            <img src='https://s2.coinmarketcap.com/static/img/coins/200x200/9949.png' />
            <div>
                <NavLink className={c.item} to={String(props.id)}>{props.name}</NavLink>
            </div>
        </div>
    );
}

export default DialogueItem;
