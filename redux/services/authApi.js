import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const authApi = createApi({
   reducerPath: 'authApi',
   baseQuery: fetchBaseQuery({
      baseUrl: 'https://api.gs2dev.co.uk/',
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
         query: body => {
            return {
               url: 'api/v1/Users/Login',
               method: 'POST',
               body,
            }
         },
      }),
      signupUser: builder.mutation({
         query: body => {
            return {
               url: 'api/v1/Users/Signup',
               // url: 'api/hello',
               method: 'POST',
               body,
            }
         },
      }),
      restorePassword: builder.mutation({
         query: body => {
            return {
               url: 'api/v1/Users/Forgotpw',
               // validateStatus: (response, result) =>{
               //    console.log('response', response)
               //    response.status === 200 && !result.isError
               // },
               method: 'POST',
               body,
            }
         },
      }),
   }),
})

export const {
   useSigninUserMutation,
   useSignupUserMutation,
   useRestorePasswordMutation,
} = authApi
