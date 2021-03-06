import profileReducer from './profileReducer';
import messagesReducer from './messagesReducer';
import sideBarReducer from './sideBarReducer';

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, content: 'hi, how are you?', likeCount: 2 },
                { id: 2, content: 'I love water xD', likeCount: 10 },
                { id: 3, content: 'Pamparam', likeCount: 7 },
                { id: 4, content: 'It\'s My first post!!!', likeCount: 5 }
            ],
            newPostText: ''
        },
        messagesPage: {
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
        },
        sideBar: {
            friends: [
                { id: 1, name: 'Ivan', pic: 'https://www.meme-arsenal.com/memes/4f232217ac64219dc7736235e15f9e00.jpg' },
                { id: 2, name: 'Daniyal', pic: 'https://i.pinimg.com/736x/97/1a/e6/971ae6faeddcb5e9362e444af882a230--funny-fish-animals-photos.jpg' },
                { id: 3, name: 'Omar', pic: 'https://www.flashnews.bg/wp-content/uploads/2020/07/fugu-1-e1491902498512.jpg' }
            ]
        }
    },
    _callSubscriber() { },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = messagesReducer(this._state.messagesPage, action);
        this._state.sideBar = sideBarReducer(this._state.sideBar, action);
        this._callSubscriber(this._state);
    }
}
export default store;
window.store = store;