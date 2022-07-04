import React from 'react';
import c from './FriendItem.module.css'

const FriendItem = (props) => {
    return (
        <div className={c.item}>
            <img src={props.pic} alt={props.name} />
            <div>
                {props.name}
            </div>

        </div>
    );
}

export default FriendItem;
