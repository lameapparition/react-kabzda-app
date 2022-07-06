import { configureStore, combineReducers } from '@reduxjs/toolkit';
import profileReducer from './profileReducer';
import  messagesReducer from './messagesReducer';
import sideBarReducer from './sideBarReducer';

const rootReducer = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    sideBar: sideBarReducer
});

const store = configureStore({ reducer: rootReducer });

export default store;