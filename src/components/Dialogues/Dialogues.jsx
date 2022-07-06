import React from 'react';
import c from './Dialogues.module.css'
import DialogueItem from './DialogueItem/DialogueItem';
import Message from './Message/Message';
import Send from './send.png'
import { sendMessageCreator, updateNewMessageTextCreator } from '../../redux/dialoguesReducer';


const Dialogues = (props) => {


    let dialoguesElements = props.messagesPage.dialogues
        .map(d => <DialogueItem name={d.talker} id={d.id} />);

    let messagesElements = props.messagesPage.messages
        .map(m => <Message content={m.content} user={m.user} />);

    let onSendMessageClick = () => {
        props.dispatch(sendMessageCreator());
    }

    let onMessageChange = (e) => {
        let text = e.target.value
        props.dispatch(updateNewMessageTextCreator(text));
    }

    return (
        <div className={c.dialogues}>
            <div className={c.dialoguesItems}>
                {dialoguesElements}
            </div>
            <div className={c.chat}>
                <div className={c.messages}>
                    {messagesElements}
                </div>
                <div className={c.messageInput}>
                    <textarea className={c.inputBlock}
                        onChange={onMessageChange}
                        value={props.messagesPage.newMessageText}
                    />
                    <img onClick={onSendMessageClick} src={Send} />
                </div>
            </div>
            {/* <div className={c.messageInput}>
                <textarea className={c.inputBlock}
                    onChange={onMessageChange}
                    ref={newMessageElement}
                    value={props.messagesPage.newMessageText}
                />
                <img onClick={addMessage} src={Send} />
            </div> */}
        </div>
    );
}

export default Dialogues;
