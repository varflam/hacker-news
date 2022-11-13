import { configureStore } from '@reduxjs/toolkit';
import { hackerApiSlice } from '../api/apiSlice';

export const store = configureStore({
  reducer: {
    [hackerApiSlice.reducerPath]: hackerApiSlice.reducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(hackerApiSlice.middleware),
    devTools: process.env.NODE_ENV !== 'production'
});
