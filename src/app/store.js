import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import stories from '../app/slices/storiesSlice';

export const store = configureStore({
  reducer: {
    stories,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(thunk),
    devTools: process.env.NODE_ENV !== 'production'
});
