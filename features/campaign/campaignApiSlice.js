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
      })
   }),
})

export const { useCreateCampaignMutation,useGetByQuickCodeQuery } = campaignApiSlice
