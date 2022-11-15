import React from 'react';
import Header from './features/header/Header';
import MainPage from './features/pages/MainPage';
import StoryPage from './features/pages/StoryPage';

import './style/style.sass';
import './app.sass';


function App() {
  return (
    <div className='app'>
      <Header/>
      {/* <MainPage/> */}
      <StoryPage/>
    </div>
  );
}

export default App;
