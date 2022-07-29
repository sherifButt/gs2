import { useRouter } from 'next/router'
import React from 'react'
import CampaignProfileImage from '../../../../components/avatar/CampaignProfileImage'
import DonationCard from '../../../../components/cards/DonationCard'
import DonationStream from '../../../../components/blocs/DonationStream'
import PostLastUpdate from '../../../../components/cards/PostLastUpdate'
import SimpleCard from '../../../../components/cards/SimpleCard'
import Thermometer  from '../../../../components/stats/Thermometer'
import {useGetByQuickCodeQuery} from '../../../../features/campaign/campaignApiSlice'
import { useLoadSupporterQuery } from '../../../../features/supporter/supporterApiSlice'
import { useGetDonationsQuery } from '../../../../features/donation/donationApiSlice'


const Campaign = () => {
   const router = useRouter()
   console.log('router.query.quickCode', router.query.quickCode)
   const {
      data: campaignData,
      isLoading,
      isError,
      error,
      isFetching,
      isSuccess,
   } = useGetByQuickCodeQuery({
      query: router.query.quickCode,
   } )
   
   const { data:donationData, isLoading:donationIsLoading } = useGetDonationsQuery({ query: campaignData?.id ,count:10 })

   return (
      <div className=''>
         <CampaignProfileImage
            rounded
            imgUrl={campaignData?.supporter.profileImagePath}
         />
         <SimpleCard
            title={`${campaignData?.supporter.forename}’s Run for ${campaignData?.name}`}
            subTitle={campaignData?.campaignCharities.map(charity => (
               <>{charity?.charityName}, </>
            ))}
            description={campaignData?.description}
         />
         <Thermometer
            max={campaignData?.donationTarget}
            current={campaignData?.donationSummary.netDonations}
            currency={campaignData?.donationSummary.currency.displaySymbol}
         />
         <SimpleCard
            title='About this Campaign'
            subTitle=''
            className='bg-white p-4 rounded-xl '
         />
         {/* <SimpleCard
            title='Take Part'
            subTitle=''
            cta={{ text: 'REGISTER', className: 'bg-neutral-500 text-white' }}
            className='bg-white p-4 rounded-xl'
         /> */}
         <div className='bg-white rounded-xl p-4 my-4 '>
            <p className='text-2xl'>Latest Updates</p>

            <PostLastUpdate />
            <PostLastUpdate />
            <PostLastUpdate />
         </div>
         <div className='bg-white rounded-xl p-4 my-4 '>
            <p className='text-2xl'>Donations</p>
            {donationData?.map(donation => (
               <div key={donation.name}>
                  <DonationCard data={donation} />
               </div>
            ))}
         </div>
         {/* <DonationStream /> */}
      </div>
   )
}
Campaign.layout = 'L1'

export default Campaign

export async function getServerSideProps ( context ) {
   console.log( 'context', context.query.id )
   
   return {
      props:{}
   }
}