import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faStar, faCalendar } from '@fortawesome/free-regular-svg-icons'

import './postListItem.sass';

const PostListItem = () => {
    return (
        <li className='post-list__item' tabIndex='0'>
            <h3 className="post-list__item__title">My YC app: Dropbox - Throw away your USB drive</h3>
            <div className="post-list__item__wrapper">
                <p className="post-list__item__author"> 
                <FontAwesomeIcon className="post-list__item__icon" icon={faUser} />Author: dhouston</p>
                <p className='post-list__item__rating'>
                <FontAwesomeIcon className="post-list__item__icon" icon={faStar} />Rating: 111</p>
                <p className='post-list__item__date'> 
                <FontAwesomeIcon className="post-list__item__icon" icon={faCalendar} />Date: 1175714200</p>
            </div>
        </li>
    );
};

export default PostListItem;