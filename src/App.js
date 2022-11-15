import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './features/header/Header';
import MainPage from './features/pages/MainPage';
import StoryPage from './features/pages/StoryPage';

import './style/style.sass';
import './app.sass';


function App() {
  return (
    <Router>
      <div className='app'>
        <Header/>
        <main>
          <Switch>
            <Route exact path="/">
              <MainPage/>
            </Route>
            <Route exact path="/story:storyId">
              <StoryPage/>
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
