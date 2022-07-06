import { list } from 'postcss'
import { apiSlice } from '../../app/api/apiSlice'

export const charityApiSlice = apiSlice.injectEndpoints({
   endpoints: builder => ({
      loadCharityList: builder.mutation({
         query: charity => {
            return {
               url: '/Charity/ListHeaders',
               method: 'POST',
               body: { ...charity },
            }
         },
        //  providesTags: ['Charity'],
        //  invalidatesTags: ['Charity'],
      }),
   }),
})

export const { useLoadCharityListMutation } = charityApiSlice
