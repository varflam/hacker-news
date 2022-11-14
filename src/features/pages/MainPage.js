import React from 'react';
import StoryList from '../storyList/StoryList';

import './page.sass';

const MainPage = () => {
    return (
        <div className='page'>
            <div className="page__wrapper">
                <StoryList/>
            </div>
        </div>
    );
};

export default MainPage;