import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faComments, faCalendar } from '@fortawesome/free-regular-svg-icons';
import CommentList from '../commentList/CommentList';
import ErrorBoundary from '../errorBoundary/ErrorBoundary';
import { fetchStory } from '../../app/slices/storiesSlice';
import { getAllItems } from '../../service/HackerNewsService';


import './singleStoryItem.sass';

const SingleStoryItem = () => {
    const {selectedStory} = useSelector(state => state.stories);
    const dispatch = useDispatch();
    
    const {title, by, time, url, kids, id} = selectedStory;

    const dateObj = new Date(time * 1000);
    const date = dateObj.toLocaleString()

    const renderUrl = () => {
        if(url) {
            return <p className="story-item__link">See more: <span>{url}</span></p>
        } else {
            return null;
        }
    }

    const onUpdateComments = async () => {
        await dispatch(fetchStory(id));
    }

    return (
        <div className='story-item'>
            <Helmet>
                <meta
                name="description"
                content={`${title}`}
                />
                <title>{title}</title>
            </Helmet>
            <div className='story-item__wrapper'>
                <Link to='/' className="story-item__back">Back</Link>
                <h2 className="story-item__title">{title}</h2>
                <div className="story-item__link">{renderUrl()}</div>
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