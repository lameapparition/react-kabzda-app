import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogues from './components/Dialogues/Dialogues';
import {
  Route,
  Routes
} from 'react-router-dom';

const App = (props) => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar state={props.state.sideBar} />
      <div className='content'>
        <Routes>
          <Route path='profile' element={
            <Profile
              profilePage={props.state.profilePage}
              addPost={props.addPost}
              updatePostText={props.updatePostText}
            />
          } />
          <Route path='im/*' element={
            <Dialogues
              messagesPage={props.state.messagesPage}
              addMessage={props.addMessage}
              updateMessageText={props.updateMessageText}
            />
          } />
          <Route path='feed' element='Feed' />
          <Route path='music' element='Music' />
          <Route path='settings' element='Settings' />
        </Routes>
      </div>
    </div>
  );
}

export default App;
