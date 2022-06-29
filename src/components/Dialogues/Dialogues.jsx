import React from 'react';
import c from './Dialogues.module.css'

const Dialogues = () => {
    return (
        <div className={c.dialogues}>
            Dialogues
            <div className={c.dialoguesItems}>
                <div className={c.dialogue}>
                    Yegor
                </div>
                <div className={c.dialogue}>
                    Ivan
                </div>
                <div className={c.dialogue}>
                    Omar
                </div>
                <div className={c.dialogue}>
                    Daniyal
                </div>
            </div>
            <div className={c.messages}>
                <div className={c.message}>Hi</div>
                <div className={c.message}>How are you?</div>
                <div className={c.message}>yo</div>
                <div className={c.message}>cool</div>
            </div>
        </div>
    );
}

export default Dialogues;
