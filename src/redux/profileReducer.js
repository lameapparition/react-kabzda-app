const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';

let initialState = {
        posts: [
            { id: 1, content: 'hi, how are you?', likeCount: 2 },
            { id: 2, content: 'I love water xD', likeCount: 10 },
            { id: 3, content: 'Pamparam', likeCount: 7 },
            { id: 4, content: 'It\'s My first post!!!', likeCount: 5 }
        ],
        newPostText: ''
    }

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            if (state.newPostText === '') return state;
            let newPost = {
                id: 5,
                content: state.newPostText,
                likeCount: 0
            };
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_POST_TEXT:
            state.newPostText = action.newText;
            return state;

        default:
            return state;
    }
}

export const addPostCreator = () => ({ type: ADD_POST })
export const updatePostTextCreator = (text) => ({
    type: UPDATE_POST_TEXT,
    newText: text
})

export default profileReducer;