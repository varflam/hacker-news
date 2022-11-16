import React from 'react';

import './storyListSkeleton.sass';

const StoryListSkeleton = () => {
    return (
        <div className='story-list-skeleton'>
            <div className="story-list-skeleton__item">
               <div className="pulse story-list-skeleton__item_big"></div>
               <div className="story-list-skeleton__item__wrapper">
                    <div className="pulse story-list-skeleton__item_small"></div>
                    <div className="pulse story-list-skeleton__item_small"></div>
                    <div className="pulse story-list-skeleton__item_small"></div>
                </div> 
            </div>
            <div className="story-list-skeleton__item">
               <div className="pulse story-list-skeleton__item_big"></div>
               <div className="story-list-skeleton__item__wrapper">
                    <div className="pulse story-list-skeleton__item_small"></div>
                    <div className="pulse story-list-skeleton__item_small"></div>
                    <div className="pulse story-list-skeleton__item_small"></div>
                </div> 
            </div>
            <div className="story-list-skeleton__item">
               <div className="pulse story-list-skeleton__item_big"></div>
               <div className="story-list-skeleton__item__wrapper">
                    <div className="pulse story-list-skeleton__item_small"></div>
                    <div className="pulse story-list-skeleton__item_small"></div>
                    <div className="pulse story-list-skeleton__item_small"></div>
                </div> 
            </div>
        </div>
    );
};

export default StoryListSkeleton;