import cc from 'cookie-cutter'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { setCredentials, logOut } from '../../features/auth/authSlice'

// import { REHYDRATE } from 'redux-persist'
import { HYDRATE } from 'next-redux-wrapper'

const baseQuery = fetchBaseQuery({
   baseUrl: process.env.baseUrl,
   // send cookie
   // credentials: 'include',

   prepareHeaders: (headers, { getState, endpoint }) => {
      // const userLocalStorage = JSON.parse(localStorage.getItem( 'user' ))
      if (endpoint === 'uploadFile') {
         headers.set('Content-Type', 'multipart/form-data')
         headers.set('Accept', 'application/json')
      } else {
         headers.set('Content-Type', 'application/json')
      }

      const token = getState().auth.token
      // if(!token&&userLocalStorage) token = userLocalStorage.token

      if (token) {
         headers.set('authorization', `Bearer ${token}`)
      }
      return headers
   },
   extractRehydrationInfo(action, { reducerPath }) {
      if (action.type === REHYDRATE || action.type === HYDRATE) {
         return action.payload[reducerPath]
      }
   },
})

const baseQueryWithReauth = async (args, api, extraOptions) => {
   let result = await baseQuery(args, api, extraOptions)

   if (result?.error && result?.error?.originalStatus === 401) {
      console.log('sending refresh token ✓')
      // send refresh token to get new access token
      const auth = api.getState()
      
      const refreshResult = await baseQuery(
         {
            url: '/Users/Refresh_Token',
            method: 'POST',
            body: {
               userId: auth.user ?? '',
               refreshToken: auth.refreshToken ?? '',
            },
         },
         api,
         extraOptions
      )
      console.log(refreshResult)
      if (refreshResult?.data) {
         const user = api.getState().auth.user
         // Store new token
         api.dispatch(setCredentials({ ...refreshResult.data, user }))
         // retry the original query with new access token
         result = await baseQuery(args, api, extraOptions)
      } else {
         api.dispatch(logOut())
      }
   }

   return result
}

export const apiSlice = createApi({
   baseQuery: baseQueryWithReauth,

   tagTypes: ['Auth', 'User', 'Campaign', 'Charity'],
   endpoints: builder => ({}),
})
