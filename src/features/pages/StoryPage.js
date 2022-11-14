import React from 'react';
import StoryItem from '../storyItem/StoryItem';

import './page.sass';

const StoryPage = () => {
    return (
        <div className='page'>
            <div className="page__wrapper">
                <StoryItem/>
            </div>
        </div>
    );
};

export default StoryPage;