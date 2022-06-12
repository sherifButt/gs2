import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const authApi = createApi({
   reducerPath: 'authApi',
   baseQuery: fetchBaseQuery({
    //   baseUrl: 'https://api.gs2dev.co.uk/',
      baseUrl: '/',
    //   mode: 'no-cors',
      prepareHeaders: headers => {
          headers.set( 'Content-Type', 'application/json' )
        //   headers.set('Access-Control-Allow-Origin', '*')
         console.log(headers)
         return headers
      },
   }),

   endpoints: builder => ({
      loginUser: builder.mutation({
         query: body => {
            return {
               url: 'api/v1/Users/Login',
               method: 'post',
               body,
            }
         },
      }),
      signupUser: builder.mutation({
         query: body => {
            return {
            //    url: 'api/v1/Users/Signup',
               url: 'api/hello',
               method: 'post',
               body,
            }
         },
      }),
   }),
})

export const { useLoginUserMutation, useSignupUserMutation } = authApi
