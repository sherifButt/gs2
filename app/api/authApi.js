import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const authApi = createApi({
   reducerPath: 'authApi',
   baseQuery: fetchBaseQuery({ baseUrl: process.env.baseUrl }),
   endpoints: builder => ({
      loginUser: builder.mutation({
         query: body => {
            return {
               url: '/Users/Signup',
               method: 'post',
               body,
            }
         },
      }),
   }),
})

export const {useLoginUserMutation}= authApi