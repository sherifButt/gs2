import { apiSlice } from '../../app/api/apiSlice'

export const uploadStreamSlice = apiSlice.injectEndpoints({
   endpoints: builder => ({
      uploadStream: builder.mutation({
         query: args => {
              console.log( args )
              const {}
            return {
               url: '/Campaign/Create',
               method: 'POST',
               body: { ...args },
            }
         },
         providesTags: ['Campaign'],
         invalidatesTags: ['Campaign'],
      }),
      
   }),
})
// Export hooks for usage in functional components
export const {
   useUploadStreamMutation,  
} = uploadStreamSlice

// Export endpoints for use in SSR
export const { uploadStream } = uploadStreamSlice.endpoints
