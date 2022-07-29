import { apiSlice } from '../../app/api/apiSlice'

export const campaignApiSlice = apiSlice.injectEndpoints({
   endpoints: builder => ({
      createCampaign: builder.mutation({
         query: campaign => {
            console.log(campaign)
            return {
               url: '/Campaign/Create',
               method: 'POST',
               body: { ...campaign },
            }
         },
         providesTags: ['Campaign'],
         invalidatesTags: ['Campaign'],
      }),
      getByQuickCode: builder.query({
         query: arg => {
            const { query: quickCode } = arg
            return {
               url: `/Campaign/GetByQuickCode`,
               method: 'GET',
               params: { quickCode },
            }
         },
         providesTags: ['Campaign'],
         invalidatesTags: ['Campaign'],
      }),
      get: builder.query({
         query: arg => {
            const { query: id, includeTotals } = arg
            return {
               url: `/Campaign/get`,
               method: 'GET',
               params: { id, includeTotals },
            }
         },
         providesTags: ['Campaign'],
         invalidatesTags: ['Campaign'],
      }),

      getMyList: builder.query({
         query: () => `/Campaign/MyList`,
         transformResponse: response =>
            response.sort((a, b) => new Date(b.created) - new Date(a.created)),
         providesTags: ['Campaign'],
         invalidatesTags: ['Campaign'],
      }),
   }),
})

export const {
   useCreateCampaignMutation,
   useGetByQuickCodeQuery,
   useGetQuery,
   useGetMyListQuery,
} = campaignApiSlice
