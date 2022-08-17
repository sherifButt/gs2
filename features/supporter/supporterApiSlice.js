import { list } from 'postcss'
import { apiSlice } from '../../app/api/apiSlice'

export const supporterApiSlice = apiSlice.injectEndpoints({
   endpoints: builder => ({
      loadSupporter: builder.query({
         query: args => {
            const {query:id} = args
            return {
               url: '/Supporter/Get',
               method: 'GET',
               params:{id}
            }
         },
         //  providesTags: ['Supporter'],
         //  invalidatesTags: ['Supporter'],
      }),
   }),
})

export const { useLoadSupporterQuery } = supporterApiSlice
