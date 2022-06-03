import { configureStore } from '@reduxjs/toolkit'
import postsReducer from './features/postsSlicer'
import authReducer from './features/authSlicer'
import userReducer from './features/userSlicer'

import {authApi} from './services/authApi'

export const store = configureStore( {
    reducer: {
        posts: postsReducer,
        auth: authReducer,
        user: userReducer,
        [authApi.reducerPath]:authApi.reducer
    }
})