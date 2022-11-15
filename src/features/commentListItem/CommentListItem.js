import React from 'react';
import DOMPurify from 'dompurify';
import { getAllItems } from '../../service/HackerNewsService';
import CommentList from '../commentList/CommentList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCalendar } from '@fortawesome/free-regular-svg-icons';

import './commentListItem.sass';

const CommentListItem = ({by, time, text, id, kids }) => {
    const dateObj = new Date(time * 1000);
    const date = dateObj.toLocaleString();

    const setText = () => {
        if(text) {
            return {__html: DOMPurify.sanitize(text)}
        } else {
            return;
        }
    }

    const getNestedComments = async () => {
        await getAllItems(kids).then(res => {
            console.log(res);
        });
    }

    const button = kids ? <button 
        onClick={getNestedComments}
        className="button button_small">See more</button> : null;

    return (
        <li className='comment-list__item'>
            <p className="comment-list__item__author">
            <FontAwesomeIcon className="story-item__icon" icon={faUser} />{by}</p>
            <p className="comment-list__item__text" dangerouslySetInnerHTML={setText()}></p>
            <p className="comment-list__item__date">
            <FontAwesomeIcon className="story-item__icon" icon={faCalendar} />{date}</p>
            {button}
        </li>
    );
};

export default CommentListItem;