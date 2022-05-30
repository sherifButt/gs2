import { configureStore } from '@reduxjs/toolkit'
import postsReducer from './features/postsSlicer'
import authReducer from './features/authSlicer'

export const store = configureStore( {
    reducer: {
        posts: postsReducer,
        auth: authReducer,
    }
})