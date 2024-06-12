import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Review } from '@/types';

export interface ReviewState {
    reviews: Review[];
}

const initialState: ReviewState = {
    reviews: [
        {
            id: 1,
            name: 'Асхат Кулуш',
            review: 'Было очень клево',
            src: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png',
            createdAt: new Date(),
        },
        {
            id: 1,
            name: 'Дархан',
            src: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png',
            review: 'Отзыв',
            createdAt: new Date(),
        },
    ],
};

export const reviewSlice = createSlice({
    name: 'review',
    initialState,
    selectors: {
        getReviews: sliceState => sliceState.reviews,
    },
    reducers: {
        createReview: (state, action: PayloadAction<Omit<Review, 'id' | 'createdAt'>>) => {
            const newReview = {
                ...action.payload,
                id: state.reviews.length + 1,
                createdAt: new Date(),
                src: `https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-${state.reviews.length + 1}.png`,
            };
            state.reviews.push(newReview);
        },
    },
});

export const { createReview } = reviewSlice.actions;

export const { getReviews } = reviewSlice.selectors;

export default reviewSlice.reducer;
