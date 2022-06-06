import { configureStore } from '@reduxjs/toolkit'
import postsReducer from './features/postsSlicer'
import authReducer from './features/authSlicer'
import userReducer from './features/userSlicer'
import modalReducer from './features/modalSlicer'
import notificationReducer from './features/notificationSlicer'

import {authApi} from './services/authApi'

export const store = configureStore( {
    reducer: {
        posts: postsReducer,
        auth: authReducer,
        user: userReducer,
        modal: modalReducer,
        notification: notificationReducer,
        [authApi.reducerPath]:authApi.reducer
    },
    middleware:(getDefalutMiddleware) => getDefalutMiddleware().concat(authApi.middleware),
})