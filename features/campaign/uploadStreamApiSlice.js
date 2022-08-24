import { apiSlice } from '../../app/api/apiSlice'

export const uploadStreamSlice = apiSlice.injectEndpoints({
   endpoints: builder => ({
      uploadStream: builder.mutation({
         query: args => {
              console.log( args )
              const {entityId,meditType}= args
            return {
               url: '/upload/stream',
               method: 'POST',
               body: { ...args },
               params:{entityId,meditType}
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
