import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const authApi = createApi({
   reducerPath: 'authApi',
    baseQuery: fetchBaseQuery( { baseUrl: 'https://api.gs2dev.co.uk/' } ),
    endpoints: ( builder ) => ( {
        loginUser: builder.mutation( {
            query: ( body ) => {
                return {
                    url: "api/v1/Users/Login",
                    method:"POST",
                    body,
                }
           }
       })
   })
} )

export const {useLoginUserMutation}= authApi