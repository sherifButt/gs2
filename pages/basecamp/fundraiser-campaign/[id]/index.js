import { useRouter } from 'next/router'
import React from 'react'
import CampaignProfileImage from '../../../../components/avatar/CampaignProfileImage'
import PostLastUpdate from '../../../../components/cards/PostLastUpdate1'
import SimpleCard from '../../../../components/cards/SimpleCard'
import FundProgress from '../../../../components/stats/Thermometer'
import {useGetQuery} from '../../../../features/campaign/campaignApiSlice'
import { useLoadSupporterQuery } from '../../../../features/supporter/supporterApiSlice'

const Campaign = () => {
   const router = useRouter()
   console.log( 'router.query.id', router.query.id )
   const { data:campaignData,isLoading,isError,error,isFetching,isSuccess } = useGetQuery({
      query: router.query.id,
      includeTotals: true,
   } )
   const { data:userData, isLoading:userIsLoading } =
      useLoadSupporterQuery({ query: campaignData?.createdBySupporterId })
   
   return (
      <div className=''>
         <CampaignProfileImage
            rounded
            imgUrl='/assets/images/image-natasha.png'
         />
         <SimpleCard
            title={`${userData?.forename}’s Run for ${campaignData?.name}`}
         />
         <FundProgress />
         <SimpleCard
            title='About this Campaign'
            subTitle=''
            className='bg-white p-4 rounded-xl '
         />
         <SimpleCard
            title='Take Part'
            subTitle=''
            cta={{ text: 'REGISTER', className: 'bg-neutral-500 text-white' }}
            className='bg-white p-4 rounded-xl'
         />
         <div className='bg-white rounded-xl p-4 my-4 '>
            <p className='text-2xl'>Latest Updates</p>
            <PostLastUpdate />
            <PostLastUpdate />
            <PostLastUpdate />
            <PostLastUpdate />
         </div>
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