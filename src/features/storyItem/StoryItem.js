import React from 'react';
import CommentList from '../commentList/CommentList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faComments, faCalendar } from '@fortawesome/free-regular-svg-icons';

import './storyItem.sass';

const StoryItem = () => {
    return (
        <div className='story-item'>
            <div className='story-item__wrapper'>
                <button className="button">Back</button>
                <h2 className="story-item__title">A private shortlink service for tailnets</h2>
                <p className="story-item__link">See more: <span>https://github.com/tailscale/golink</span></p>
                <div className="story-item__info-wrapper">
                    <p className="story-item__author">
                        <FontAwesomeIcon className="story-item__icon" icon={faUser} />Author: lwhsiao</p>
                    <p className="story-item__comments-count">
                        <FontAwesomeIcon className="story-item__icon" icon={faComments} />Comments: 0</p>
                    <p className="story-item__date">
                        <FontAwesomeIcon className="story-item__icon" icon={faCalendar} />Date: 1668441392</p>
                </div>
            </div>
            <div className='story-item__comments'>
                <button className="button">Update comments</button>
                <div className='story-item__comments-wrapper'>
                    <h3 className="story-item__comments-title">Comments</h3>
                    <CommentList/>
                </div>
            </div>
            
        </div>
    );
};

export default StoryItem;