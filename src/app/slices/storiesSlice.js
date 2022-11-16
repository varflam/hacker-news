import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getAllItems, getLatestStories, getItem } from '../../service/HackerNewsService';

const initialState = {
    storiesIds: [],
    stories: [],
    selectedStory: {},
    status: 'loading'
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

export const fetchStory = createAsyncThunk(
    'stories/fetchStory',
    id => {
        const res = getItem(id);
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
                    state.status = 'loading';
                })
                .addCase(fetchLatestStories.pending, (state) => {
                    state.status = 'loading';
                })
                .addCase(fetchLatestStories.rejected, (state) => {
                    state.status = 'error';
                })
                .addCase(fetchStories.fulfilled, (state, action) => {
                    state.stories = action.payload;
                    state.status = 'confirmed';
                })
                .addCase(fetchStories.pending, (state) => {
                    state.status = 'loading';
                })
                .addCase(fetchStories.rejected, (state) => {
                    state.status = 'error';
                })
                .addCase(fetchStory.fulfilled, (state, action) => {
                    state.selectedStory = action.payload;
                })
    }
});

const {reducer, actions} = storiesSlice;

export const {
    selectStory,

} = actions;

export default reducer;