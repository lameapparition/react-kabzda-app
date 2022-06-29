import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
  { id: 1, content: 'hi, how are you?', likeCount: 2 },
  { id: 2, content: 'I love water xD', likeCount: 10 },
  { id: 3, content: 'Pamparam', likeCount: 7 },
  { id: 4, content: 'It\'s My first post!!!', likeCount: 5 }
]

let dialogues = [
  { id: 1, talker: 'Yegor' },
  { id: 2, talker: 'Ivan' },
  { id: 3, talker: 'Omar' },
  { id: 4, talker: 'Daniyal' },
  { id: 5, talker: 'Vladimir' },
]

let messages = [
  { id: 1, content: 'hi' },
  { id: 2, content: 'How are you?' },
  { id: 3, content: 'lets go meet tonight' },
  { id: 4, content: 'will you come?' }
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App posts={posts} dialogues={dialogues} messages={messages}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
