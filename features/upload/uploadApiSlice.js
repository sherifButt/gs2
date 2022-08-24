import { apiSlice } from '../../app/api/apiSlice'

export const uploadApiSlice = apiSlice.injectEndpoints({
   endpoints: builder => ({
      uploadFile: builder.mutation({
         query: args => {
            const { entityId, mediaType, file } = args
            console.log('args', args)
            return {
               url: '/Upload/Stream',
               method: 'POST',
               body:  file ,
               params: { entityId, mediaType },
               // headers: { 'Content-Type': 'multipart/form-data' },
            }
         },
      }),
   }),
} )


export const {
   useUploadFileMutation,
   
   
} = uploadApiSlice

// Export endpoint for use in SSR
export const {uploadFile}=uploadApiSlice.endpoints
