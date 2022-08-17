import { apiSlice } from '../../app/api/apiSlice'

export const donationApiSlice = apiSlice.injectEndpoints({
   endpoints: builder => ({
      addDonation: builder.mutation({
         query: donation => {
            console.log(donation)
            return {
               url: '/Donation/Add',
               method: 'POST',
               body: { ...donation },
            }
         },
      }),

      getDonations: builder.query({
         query: arg => {
            const { query: campaignId, count } = arg
            return {
               url: `/Donation/CampaignTopN`,
               method: 'GET',
               params: { campaignId, count },
            }
         },
         providesTags: ['Donation'],
         invalidatesTags: ['Donation'],
      }),
   }),
})

export const { useAddDonationMutation, useGetDonationsQuery } = donationApiSlice
