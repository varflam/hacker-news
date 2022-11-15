import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLatestStories, fetchStories } from '../../app/slices/storiesSlice';
import StoryListItem from '../storyListItem/StoryListItem';

import './storyList.sass';

const StoryList = () => {
    const dispatch = useDispatch();
    const stories = useSelector(state => state.stories.stories);
    const storiesIds = useSelector(state => state.stories.storiesIds);

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
        if(storiesIds.length !== 0) {
            dispatch(fetchStories(storiesIds));
        }
    }, [storiesIds]);


    const elements = stories.map(({id, ...props}) => {
            return <StoryListItem  
                        key={id} 
                        id={id} 
                        {...props}/>
        });


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