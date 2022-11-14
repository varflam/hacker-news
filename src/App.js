import React from 'react';

import MainPage from './features/pages/MainPage';
import StoryPage from './features/pages/StoryPage';

import './style/style.sass';
import './app.sass';


function App() {
  return (
    <div className='app'>
      <div className='app__titles'>
        <h1 className='app__title'>Hacker News</h1>
        <h2 className='app__subtitle'>100 latest news</h2>
      </div>
      {/* <MainPage/> */}
      <StoryPage/>
    </div>
  );
}

export default App;
