import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store from './redux/state';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

const rerenderEntireTree = (props) => {
    root.render(
        <BrowserRouter>
            <App state={store.getState()}
                addPost={store.addPost.bind(store)} 
                updatePostText={store.updatePostText.bind(store)}
                addMessage={store.addMessage.bind(store)} 
                updateMessageText={store.updateMessageText.bind(store)}
            />
        </BrowserRouter>
    );
};

export default rerenderEntireTree;

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
