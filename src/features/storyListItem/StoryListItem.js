import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faStar, faCalendar } from '@fortawesome/free-regular-svg-icons'

import './storyListItem.sass';

const StoryListItem = ({title, by, score, time}) => {

    const dateObj = new Date(time * 1000);
    const date = dateObj.toLocaleString()

    return (
        <li className='story-list__item' tabIndex='0'>
            <h3 className="story-list__item__title">{title}</h3>
            <div className="story-list__item__wrapper">
                <p className="story-list__item__author"> 
                <FontAwesomeIcon className="story-list__item__icon" icon={faUser} />{`Author: ${by}`}</p>
                <p className='story-list__item__rating'>
                <FontAwesomeIcon className="story-list__item__icon" icon={faStar} />{`Rating: ${score}`}</p>
                <p className='story-list__item__date'> 
                <FontAwesomeIcon className="story-list__item__icon" icon={faCalendar} />{date}</p>
            </div>
        </li>
    );
};

export default StoryListItem;