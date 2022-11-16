import React from 'react';
import { useParams } from 'react-router-dom';
import SingleStoryItem from '../SingleStoryItem/SingleStoryItem';
import ErrorBoundary from '../errorBoundary/ErrorBoundary';

import './page.sass';

const StoryPage = () => {
    const {storyId} = useParams();

    return (
        <div className='page'>
            <div className="page__wrapper">
                <ErrorBoundary>
                    <SingleStoryItem id={storyId}/>
                </ErrorBoundary>
            </div>
        </div>
    );
};

export default StoryPage;