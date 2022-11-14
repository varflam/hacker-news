import React, { useCallback, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLatestStories, fetchStories } from '../../app/slices/storiesSlice';
import StoryListItem from '../storyListItem/StoryListItem';

import './storyList.sass';

const StoryList = () => {
    const dispatch = useDispatch();
    const {storiesIds, stories} = useSelector(state => state.stories);

    useEffect(() => {
        const fetchData = async () => {
            await dispatch(fetchLatestStories());
        }
          
        fetchData();
    }, []);

    useEffect(() => {
        dispatch(fetchStories(storiesIds));
    }, [storiesIds]);

    const elements = stories.map(({id, ...props}) => {
            return <StoryListItem key={id} {...props}/>
        });
    console.log('render');

    return (
        <>
            <button type="button" className='button'>
                Update
            </button>
            <ul className='story-list'>
                {elements}
            </ul>
        </>
    );
};

export default StoryList;