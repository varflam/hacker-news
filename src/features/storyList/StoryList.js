import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLatestStories, fetchStories } from '../../app/slices/storiesSlice';
import StoryListItem from '../storyListItem/StoryListItem';

import './storyList.sass';

const StoryList = () => {
    const dispatch = useDispatch();
    const {stories} = useSelector(state => state.stories);
    const {storiesIds} = useSelector(state => state.stories);

    const fetchData = async () => {
        await dispatch(fetchLatestStories());
    }
      
    useEffect(() => {
        fetchData();

        // const timeout = () => {
        //     setTimeout(() => {
        //         fetchData();
        //         timeout();
        //       }, 10000);
        // };

        // timeout();
        //   return () => {
        //     clearTimeout(timeout);
        //   };;
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
            <button 
                type="button" 
                className='button'
                onClick={fetchData}>
                Update
            </button>
            <ul className='story-list'>
                {elements}
            </ul>
        </>
    );
};

export default StoryList;