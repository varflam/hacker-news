import React from 'react';
import { useParams } from 'react-router-dom';
import SingleStoryItem from '../SingleStoryItem/SingleStoryItem';

import './page.sass';

const StoryPage = () => {
    const {storyId} = useParams();

    return (
        <div className='page'>
            <div className="page__wrapper">
                <SingleStoryItem id={storyId}/>
            </div>
        </div>
    );
};

export default StoryPage;