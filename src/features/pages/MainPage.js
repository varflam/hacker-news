import React from 'react';
import StoryList from '../storyList/StoryList';
import ErrorBoundary from '../errorBoundary/ErrorBoundary';

import './page.sass';

const MainPage = () => {
    return (
        <div className='page'>
            <div className="page__wrapper">
                <ErrorBoundary>
                    <StoryList/>
                </ErrorBoundary>
            </div>
        </div>
    );
};

export default MainPage;