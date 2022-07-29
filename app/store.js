import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
// import { setupListeners } from '@reduxjs/toolkit/query'
import { HYDRATE, createWrapper } from 'next-redux-wrapper'
import {
   persistStore,
   persistReducer,
   FLUSH,
   REHYDRATE,
   PAUSE,
   PERSIST,
   PURGE,
   REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import postsReducer from '../features/postsSlice'
import authReducer from '../features/auth/authSlice'
import userReducer from '../features/user/userSlice'
import modalReducer from '../features/modalSlice'
import notificationReducer from '../features/notificationSlice'
// persist

// import { authApi } from './api/authApi'
import { apiSlice } from './api/apiSlice'

const persistConfig = {
   key: 'root',
   version: 1,
   storage,
}

const rootReducer = combineReducers({
   posts: postsReducer,
   auth: authReducer,
   user: userReducer,
   modal: modalReducer,
   notification: notificationReducer,
   [apiSlice.reducerPath]: apiSlice.reducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
   reducer: rootReducer,
   
   middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
         serializableCheck: {
            /* ignore persistance actions */
            ignoredActions: [ FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER ],
            
         },
      } ).concat( apiSlice.middleware ),
   
   devTools: true,
   
})

// setupListeners(store.dispatch())

const initStore = ()=>{return store}
export let persistor = persistStore( store )
export const wrapper = createWrapper(initStore)
