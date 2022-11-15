import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchComments } from '../../app/slices/storiesSlice';
import CommentListItem from '../commentListItem/CommentListItem';

import './commentList.sass';

const CommentList = () => {
    const {selectedStory} = useSelector(state => state.stories);
    const {kids, comments} = selectedStory;
    const dispatch = useDispatch();

    const onFetchComments = async () => {
        await dispatch(fetchComments(kids));
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