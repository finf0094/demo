import { configureStore } from '@reduxjs/toolkit';
import { reviewSlice } from './slice/reviewSlice';

export const store = configureStore({
    reducer: {
        review: reviewSlice.reducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
