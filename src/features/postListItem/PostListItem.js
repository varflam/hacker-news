import React from 'react';
import { useGetStoryQuery } from '../../api/apiSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faStar, faCalendar } from '@fortawesome/free-regular-svg-icons'

import './postListItem.sass';

const PostListItem = ({id}) => {
    const {
        data = {}
    } = useGetStoryQuery(id);

    const {title, by, score, time} = data;
    return (
        <li className='post-list__item' tabIndex='0'>
            <h3 className="post-list__item__title">{title}</h3>
            <div className="post-list__item__wrapper">
                <p className="post-list__item__author"> 
                <FontAwesomeIcon className="post-list__item__icon" icon={faUser} />{`Author: ${by}`}</p>
                <p className='post-list__item__rating'>
                <FontAwesomeIcon className="post-list__item__icon" icon={faStar} />{`Rating: ${score}`}</p>
                <p className='post-list__item__date'> 
                <FontAwesomeIcon className="post-list__item__icon" icon={faCalendar} />{`Date: ${time}`}</p>
            </div>
        </li>
    );
};

export default PostListItem;