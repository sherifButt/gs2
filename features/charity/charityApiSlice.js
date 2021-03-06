import { list } from 'postcss'
import { apiSlice } from '../../app/api/apiSlice'

export const charityApiSlice = apiSlice.injectEndpoints({
   endpoints: builder => ({
      loadCharityList: builder.mutation({
         query: charity => {
            return {
               url: '/Charity/List',
               method: 'POST',
               body: {
                  limit: 200,
                  pageOffSet: 0,
                  listOrderFields: [
                     {
                        fieldName: 'name',
                        isAscending: true,
                     },
                  ],
                  query: charity,
               },
            }
         },
         //  providesTags: ['Charity'],
         //  invalidatesTags: ['Charity'],
      }),
   }),
})

export const { useLoadCharityListMutation } = charityApiSlice
