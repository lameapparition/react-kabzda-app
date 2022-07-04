import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { addPost } from './redux/state';
import { BrowserRouter } from 'react-router-dom';


const rerenderEntireTree = (props) => {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        <BrowserRouter>
            <App state={props} addPost={addPost} />
        </BrowserRouter>
    );
};

export default rerenderEntireTree;
