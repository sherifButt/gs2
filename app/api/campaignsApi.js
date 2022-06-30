import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const campaignsApi = createApi({
   reducerPath: 'campaignsApi',
   baseQuery: fetchBaseQuery({
      baseUrl: 'https://api.gs2dev.co.uk/api/v1/Campaign',
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
      createCampaign: builder.mutation({
         query: campaign => {
            return {
               url: '/Create',
               method: 'POST',
               body: campaign,
            }
         },
         invalidatesTags: ['Campaign'],
      }),
      
   }),
})

export const {
   useCreateCampaignMutation,
} = campaignsApi
