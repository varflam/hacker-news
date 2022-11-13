import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const hackerApiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://hacker-news.firebaseio.com/v0/',

    }),
    endpoints: builder => ({
        getLatestStories: builder.query({
            query: () => 'newstories.json'
        }),
        getStory: builder.query({
            query: id => `item/${id}.json`
        })
        
    })
});

export const { useGetLatestStoriesQuery, useGetStoryQuery } = hackerApiSlice;

