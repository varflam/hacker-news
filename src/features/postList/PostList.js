import React from 'react';
import PostListItem from '../postListItem/PostListItem';

import './postList.sass';

const PostList = () => {
    return (
        <ul className='post-list'>
            <PostListItem/>
            <PostListItem/>
            <PostListItem/>
            <PostListItem/>
        </ul>
    );
};

export default PostList;