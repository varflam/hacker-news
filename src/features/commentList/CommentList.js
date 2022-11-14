import React from 'react';
import CommentListItem from '../commentListItem/CommentListItem';

import './commentList.sass';

const CommentList = () => {
    return (
        <ul className='comment-list'>
            <CommentListItem/>
            <CommentListItem/>
            <CommentListItem/>
        </ul>
    );
};

export default CommentList;