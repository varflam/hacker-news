import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLatestStories, fetchStories } from '../../app/slices/storiesSlice';
import StoryListItem from '../storyListItem/StoryListItem';
import StoryListSkeleton from '../skeletons/StoryListSkeleton';
import ErrorMessage from '../errorMessage/ErrorMessage';

import './storyList.sass';

const StoryList = () => {
    const dispatch = useDispatch();
    const stories = useSelector(state => state.stories.stories);
    const storiesIds = useSelector(state => state.stories.storiesIds);
    const {status} = useSelector(state => state.stories);

    const fetchData = async () => {
        await dispatch(fetchLatestStories());
    }
      
    useEffect(() => {
        fetchData();

        const timeout = () => {
            setTimeout(() => {
                fetchData();
                timeout();
              }, 60000);
        };

        timeout();
          return () => clearTimeout(timeout);
    }, []);

    useEffect(() => {
        if(storiesIds.length !== 0) {
            dispatch(fetchStories(storiesIds));
        }
    }, [storiesIds]);

    const elements = stories.map(story => {
            if(story) {
                const {id, ...props} = story;
                return <StoryListItem  
                key={id} 
                id={id} 
                {...props}/>
            }
        });

    const setContent = () => {
        switch(status) {
            case 'loading':
                return <StoryListSkeleton/>
            case 'confirmed':
                return (
                    <ul className='story-list'>
                        {elements}
                    </ul>
                )
            case 'error':
                return <ErrorMessage/>
            default:
                return;
        }
    }


    return (
        <>
            <button 
                type="button" 
                className='button'
                onClick={fetchData}>
                Update
            </button>
            {setContent()}
        </>
    );
};

export default StoryList;