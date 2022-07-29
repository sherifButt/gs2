import { list } from 'postcss'
import { apiSlice } from '../../app/api/apiSlice'

export const currencyApiSlice = apiSlice.injectEndpoints({
   endpoints: builder => ({
      loadCurrencyList: builder.query({
         query: () => {
            return {
               url: '/Currency/List',
               method: 'GET',
            }
         },

         providesTags: ['Currency'],
         invalidatesTags: ['Currency'],
      }),
   }),
})

export const { useLoadCurrencyListQuery } = currencyApiSlice
