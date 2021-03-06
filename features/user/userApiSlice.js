import { apiSlice } from '../../app/api/apiSlice'

export const userApiSlice = apiSlice.injectEndpoints({
   endpoints: builder => ({
      loadUser: builder.query({
         query: () => {
            console.log('--------')
            return {
               url: '/Users/Me',
               method: 'GET',
            }
         },
         providesTags: ['User'],
         invalidatesTags: ['User'],
      }),
   }),
})

export const { useLoadUserQuery } = userApiSlice
