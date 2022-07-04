import React from 'react';
import c from './Message.module.css';

const Message = (props) => {
    return (
        <div className={props.user ? `${c._user} ${c.message}` : c.message}>
            { props.content }
                </div >
    );
}

export default Message;
