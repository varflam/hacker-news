import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getAllItems, getLatestStories } from '../../service/HackerNewsService';

const initialState = {
    storiesIds: [],
    stories: [],
    selectedStory: {}
}


export const fetchLatestStories = createAsyncThunk(
    'stories/fetchLatestStories',
    () => {
        const res = getLatestStories();
        return res;
    }
);

export const fetchStories = createAsyncThunk(
    'stories/fetchStories',
    storiesIds => {
        const res = getAllItems(storiesIds);
        return res;
    }
);

const storiesSlice = createSlice({
    name: 'stories',
    initialState,
    reducers: {
        selectStory: (state, action) => {
            state.selectedStory = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchLatestStories.fulfilled, (state, action) => {
                    state.storiesIds = action.payload.slice(0, 100);
                })
                .addCase(fetchStories.fulfilled, (state, action) => {
                    state.stories = action.payload;
                })
    }
});

const {reducer, actions} = storiesSlice;

export const {selectStory} = actions;

export default reducer;