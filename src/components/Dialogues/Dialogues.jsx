import React from 'react';
import c from './Dialogues.module.css'
import DialogueItem from './DialogueItem/DialogueItem';
import Message from './Message/Message';

const Dialogues = (props) => {
   

    let dialoguesElements = props.state.dialogues
        .map(d => <DialogueItem name={d.talker} id={d.id}/>);

    let messagesElements = props.state.messages
        .map(m => <Message content={m.content} user={m.user} />);

        
    return (
        <div className={c.dialogues}>
            <div className={c.dialoguesItems}>
                {dialoguesElements}
            </div>
            <div className={c.messages}>
                {messagesElements}
            </div>
        </div>
    );
}

export default Dialogues;
