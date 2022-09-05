import { configureStore } from '@reduxjs/toolkit';
import hackathonReducer from '../features/hackathon/hackathonSlice';

export const store = configureStore({
    reducer: {
        hackathon: hackathonReducer,
    },
});
