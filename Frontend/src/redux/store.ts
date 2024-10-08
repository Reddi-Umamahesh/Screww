import { configureStore } from '@reduxjs/toolkit'
import authSlice from './authSlice'
import jobSlice from './jobSlice';
const store = configureStore({
    reducer: {
        auth: authSlice,
        job : jobSlice
    }
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;