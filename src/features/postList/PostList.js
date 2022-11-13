import React, {useEffect} from 'react';
import { useGetLatestStoriesQuery } from "../../api/apiSlice";
import PostListItem from '../postListItem/PostListItem';

import './postList.sass';

const PostList = () => {
    const {
        data = []
    } = useGetLatestStoriesQuery();

    const slicedData = data.slice(0, 100);

    const elements = slicedData.map(id => {
        return <PostListItem key={id} id={id}/>
    })


    return (
        <ul className='post-list'>
            {elements}
        </ul>
    );
};

export default PostList;