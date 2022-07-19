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
      }),
      getByQuickCode: builder.query( {
         query: arg => {
            const { query: quickCode } = arg
            return {
               url: `/Campaign/GetByQuickCode`,
               method: 'GET',
               params: { quickCode },
            }
         }
      }),
      get: builder.query( {
         query: arg => {
            const { query: id, includeTotals } = arg
            return {
               url: `/Campaign/get`,
               method: 'GET',
               params: { id,includeTotals },
            }
         }
      })
   }),
})

export const {
   useCreateCampaignMutation,
   useGetByQuickCodeQuery,
   useGetQuery,
} = campaignApiSlice
