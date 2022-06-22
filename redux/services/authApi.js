import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const authApi = createApi({
   reducerPath: 'authApi',
   baseQuery: fetchBaseQuery({
      baseUrl: 'https://api.gs2dev.co.uk/api/v1/Users',
      // baseUrl: '/',
      //   mode: 'no-cors',
      prepareHeaders: headers => {
         headers.set('Content-Type', 'application/json')
         //   headers.set('Access-Control-Allow-Origin', '*')
         // console.log(headers)
         return headers
      },
   }),

   endpoints: builder => ({
      signinUser: builder.mutation({
         query: user => {
            return {
               url: '/Login',
               method: 'POST',
               body: user,
            }
         },
         invalidatesTags: ['User'],
      }),
      signupUser: builder.mutation({
         query: user => {
            return {
               url: '/Signup',
               // url: 'api/hello',
               method: 'POST',
               body: user,
            }
         },
         invalidatesTags: ['User'],
      }),
      restorePassword: builder.mutation({
         query: email => {
            return {
               url: '/Forgotpw',
               method: 'POST',
               body: email,
            }
         },
         invalidatesTags: ['Email'],
      }),
      activateUser: builder.mutation({
         query: activationData => {
            return {
               url: '/Activate',
               method: 'POST',
               body: activationData,
            }
         },
         invalidatesTags: ['ActivationData'],
      }),
   }),
})

export const {
   useSigninUserMutation,
   useSignupUserMutation,
   useRestorePasswordMutation,
   useActivateUserMutation
} = authApi
