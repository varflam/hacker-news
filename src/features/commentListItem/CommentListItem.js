import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCalendar } from '@fortawesome/free-regular-svg-icons';

import './commentListItem.sass';

const CommentListItem = () => {
    return (
        <li className='comment-list__item'>
            <p className="comment-list__item__author">
            <FontAwesomeIcon className="story-item__icon" icon={faUser} />norvig</p>
            <p className="comment-list__item__text">Aw shucks, guys ... you make me blush with your compliments.Tell you what, Ill make a deal: I'll keep writing if you keep reading. K?</p>
            <p className="comment-list__item__date">
            <FontAwesomeIcon className="story-item__icon" icon={faCalendar} />1314211127</p>
            <button className="button button_small">See more</button>
            {/* <CommentListItem/> */}
        </li>
    );
};

export default CommentListItem;