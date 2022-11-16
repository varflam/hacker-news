import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllItems } from '../../service/HackerNewsService';
// import { fetchComments } from '../../app/slices/storiesSlice';
import CommentListItem from '../commentListItem/CommentListItem';

import './commentList.sass';

const CommentList = ({kids}) => {
    const [comments, setComments] = useState([]);

    const onFetchComments = async () => {
        await getAllItems(kids)
            .then(res => setComments(res));
    }

    useEffect(() => {
        onFetchComments();
    }, []);

    const renderComments = () => {
        if(comments) {
            const elements = comments.map(({id, ...props}) => {
                return <CommentListItem key={id} id={id} {...props}/>
            });
            return elements;
        } else {
            return 'There is no comments';
        }
    }

    return (
        <ul className='comment-list'>
            {renderComments()}
        </ul>
    );
};

export default CommentList;