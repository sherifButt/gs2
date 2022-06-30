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

      
   }),
})

export const { useCreateCampaignMutation } = campaignApiSlice
