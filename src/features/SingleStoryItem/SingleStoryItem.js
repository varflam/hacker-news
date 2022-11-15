import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { getItem } from '../../service/HackerNewsService';
import CommentList from '../commentList/CommentList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faComments, faCalendar } from '@fortawesome/free-regular-svg-icons';

import './singleStoryItem.sass';

const SingleStoryItem = ({id}) => {
    const [story, setStory] = useState({});

    const fetchStory = () => {
        getItem(id)
            .then(res => setStory(res));
    }

    useEffect(() => {
        fetchStory();
    }, []);

    const {title, by, time, url, children} = story;

    const dateObj = new Date(time * 1000);
    const date = dateObj.toLocaleString()

    return (
        <div className='story-item'>
            <div className='story-item__wrapper'>
                <Link to='/' className="story-item__back">Back</Link>
                <h2 className="story-item__title">{title}</h2>
                <p className="story-item__link">See more: <span>{url}</span></p>
                <div className="story-item__info-wrapper">
                    <p className="story-item__author">
                        <FontAwesomeIcon className="story-item__icon" icon={faUser} />Author: {by}</p>
                    <p className="story-item__comments-count">
                        <FontAwesomeIcon className="story-item__icon" icon={faComments} />Comments: {children ? children.length : '0'}</p>
                    <p className="story-item__date">
                        <FontAwesomeIcon className="story-item__icon" icon={faCalendar} />Date: {date}</p>
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

export default SingleStoryItem;