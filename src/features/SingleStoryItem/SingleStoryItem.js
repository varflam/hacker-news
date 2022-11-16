import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faComments, faCalendar } from '@fortawesome/free-regular-svg-icons';
import CommentList from '../commentList/CommentList';
import ErrorBoundary from '../errorBoundary/ErrorBoundary';
import { fetchStory } from '../../app/slices/storiesSlice';


import './singleStoryItem.sass';

const SingleStoryItem = ({id}) => {
    // const story = {
    //     by: "dhouston",
    //     descendants : 71,
    //     id: 8863,
    //     kids: [ 8952, 9224, 8917, 8884, 8887, 8943, 8869, 8958, 9005, 9671, 8940, 9067, 8908, 9055, 8865, 8881, 8872, 8873, 8955, 10403, 8903, 8928, 9125, 8998, 8901, 8902, 8907, 8894, 8878, 8870, 8980, 8934, 8876 ],
    //     score: 111,
    //     time: 1175714200,
    //     title: "My YC app: Dropbox - Throw away your USB drive",
    //     type: "story",
    //     url: "http://www.getdropbox.com/u/2/screencast.html"
    // }
    const {stories} = useSelector(state => state.stories);
    const dispatch = useDispatch();
    const story = stories.find(story => story.id == id);
    
    const {title, by, time, url, kids} = story;

    const dateObj = new Date(time * 1000);
    const date = dateObj.toLocaleString()

    const renderUrl = () => {
        if(url) {
            return <p className="story-item__link">See more: <span>{url}</span></p>
        } else {
            return null;
        }
    }

    const onUpdateComments = () => {
        dispatch(fetchStory(id));
    }

    return (
        <div className='story-item'>
            <div className='story-item__wrapper'>
                <Link to='/' className="story-item__back">Back</Link>
                <h2 className="story-item__title">{title}</h2>
                <p className="story-item__link">{renderUrl()}</p>
                <div className="story-item__info-wrapper">
                    <p className="story-item__author">
                        <FontAwesomeIcon className="story-item__icon" icon={faUser} />Author: {by}</p>
                    <p className="story-item__comments-count">
                        <FontAwesomeIcon className="story-item__icon" icon={faComments} />Comments: {kids ? kids.length : '0'}</p>
                    <p className="story-item__date">
                        <FontAwesomeIcon className="story-item__icon" icon={faCalendar} />Date: {date}</p>
                </div>
            </div>
            <div className='story-item__comments'>
                <button    
                    className="button"
                    onClick={onUpdateComments}>
                        Update comments
                </button>
                <div className='story-item__comments-wrapper'>
                    <h3 className="story-item__comments-title">Comments</h3>
                    <ErrorBoundary>
                        <CommentList kids={kids}/>
                    </ErrorBoundary>
                </div>
            </div>
            
        </div>
    );
};

export default SingleStoryItem;