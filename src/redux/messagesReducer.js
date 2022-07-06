const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
        dialogues: [
            { id: 1, talker: 'Yegor' },
            { id: 2, talker: 'Ivan' },
            { id: 3, talker: 'Omar' },
            { id: 4, talker: 'Daniyal' },
            { id: 5, talker: 'Vladimir' },
        ],
        messages: [
            { id: 1, user: false, content: 'hi' },
            { id: 2, user: false, content: 'How are you?' },
            { id: 3, user: false, content: 'lets go meet tonight' },
            { id: 4, user: true, content: 'Hello, ye of course' }
        ],
        newMessageText: ''
    }

const dialoguesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            if (state.newMessageText === '') return state;
            let newMessage = {
                id: 5,
                user: true,
                content: state.newMessageText
            };
            state.messages.push(newMessage);
            state.newMessageText = '';
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newText;
            return state;
        default:
            return state;
    }
}

export const sendMessageCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageTextCreator = (text) => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    newText: text
})

export default dialoguesReducer;