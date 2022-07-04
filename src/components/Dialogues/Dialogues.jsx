import React from 'react';
import c from './Dialogues.module.css'
import DialogueItem from './DialogueItem/DialogueItem';
import Message from './Message/Message';
import Send from './send.png'

const Dialogues = (props) => {


    let dialoguesElements = props.messagesPage.dialogues
        .map(d => <DialogueItem name={d.talker} id={d.id} />);

    let messagesElements = props.messagesPage.messages
        .map(m => <Message content={m.content} user={m.user} />);


    let newMessageElement = React.createRef();

    let addMessage = () => {
        props.addMessage();
    }

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.updateMessageText(text);
    }

    return (
        <div className={c.dialogues}>
            <div className={c.dialoguesItems}>
                {dialoguesElements}
            </div>
            <div className={c.messages}>
                {messagesElements}
            </div>
            <div className={c.messageInput}>
                <textarea className={c.inputBlock}
                    onChange={onMessageChange}
                    ref={newMessageElement}
                    value={props.messagesPage.newMessageText}
                />
                <img onClick={addMessage} src={Send} />
            </div>
        </div>
    );
}

export default Dialogues;
