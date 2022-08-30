import { apiSlice } from '../../app/api/apiSlice'

export const uploadApiSlice = apiSlice.injectEndpoints({
   endpoints: builder => ({
      uploadFile: builder.mutation({
         query: args => {
            const { entityId, mediaType, file } = args
            return {
               url: '/Upload/Stream',
               method: 'POST',
               body:  file ,
               params: { entityId, mediaType },
               headers: {mimeType: 'multipart/form-data', contentType:false },
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
