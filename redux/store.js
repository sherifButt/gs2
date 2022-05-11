import { configureStore } from '@reduxjs/toolkit'
import  postsReducer  from './features/postsSlicer'

export const store = configureStore( {
    reducer: {
        posts: postsReducer
    }
})