import React from 'react';
import {Helmet} from "react-helmet";
import StoryList from '../storyList/StoryList';
import ErrorBoundary from '../errorBoundary/ErrorBoundary';

import './page.sass';

const MainPage = () => {
    return (
        <div className='page'>
            <Helmet>
                <meta
                name="description"
                content="Hacker News App"
                />
                <title>Hacker News App</title>
            </Helmet>
            <div className="page__wrapper">
                <ErrorBoundary>
                    <StoryList/>
                </ErrorBoundary>
            </div>
        </div>
    );
};

export default MainPage;