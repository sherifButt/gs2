import { list } from 'postcss'
import { apiSlice } from '../../app/api/apiSlice'

export const currencyApiSlice = apiSlice.injectEndpoints({
   endpoints: builder => ({
      loadCurrencyList: builder.mutation({
         query: currency => {
            return {
               url: '/Currency/List',
               method: 'POST',
               body: { ...currency },
            }
         },
        //  providesTags: ['Currency'],
        //  invalidatesTags: ['Currency'],
      }),
   }),
})

export const { useLoadCurrencyListMutation } = currencyApiSlice
