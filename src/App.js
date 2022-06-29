import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogues from './components/Dialogues/Dialogues';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';

const App = (props) => {
  return (
    <Router>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='content'>
          <Routes>
            <Route path='profile' element={
              <Profile posts={props.posts} />
            } />
            <Route path='im/*' element={
              <Dialogues dialogues={props.dialogues} messages={props.messages} />
            } />
            <Route path='feed' element='Feed' />
            <Route path='music' element='Music' />
            <Route path='settings' element='Settings' />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
