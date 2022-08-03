import { useRouter } from 'next/router'
import React from 'react'
import CampaignProfileImage from '../../../../components/avatar/CampaignProfileImage'
import DonationCard from '../../../../components/cards/DonationCard'
import DonationStream from '../../../../components/blocs/DonationStream'
import PostLastUpdate from '../../../../components/cards/PostLastUpdate'
import SimpleCard from '../../../../components/cards/SimpleCard'
import Thermometer from '../../../../components/stats/Thermometer'
import { useGetByQuickCodeQuery } from '../../../../features/campaign/campaignApiSlice'
import { useLoadSupporterQuery } from '../../../../features/supporter/supporterApiSlice'
import { useGetDonationsQuery } from '../../../../features/donation/donationApiSlice'

import Footer from '../../../../components/footer/Footer1'
import LeftSidebar from '../../../../components/left-sidebar/left-sidebar-1'
import RightSidebar from '../../../../components/right-sidebar/right-sidebar-3'
import bg from '../../../../public/assets/images/giveStar_stock_Image.jpg'

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
   })

   const { data: donationData, isLoading: donationIsLoading } =
      useGetDonationsQuery({ query: campaignData?.id, count: 10 })

   return (
      <>
         <div
            style={{
               backgroundImage: `url(${campaignData?.bannerImagePath || bg.src})`,
            }}
            className='mx-auto max-auto flex grow bg-cover bg-center lg:bg-fixed pt-20 w-full h-80 lg:h-96 bg-yellow-50 '></div>
         <div className='md:container mx-auto max-auto flex grow '>
            <div className=' flex flex-row mx-auto grow justify-center gap-4 flex-wrap md:flex-nowrap h-full max-w-5xl '>
               <LeftSidebar className='w-80 pt-20  xs:w-88 xl:w-96 hidden lg:block  -mt-20 h-screen mb-auto   sticky top-0' />

               {/* Middle */}
               <div className='w-full sm:w-600 -mt-28   order-3 md:order-none mb-12'>
                  <main className='flex flex-col order-1 md:mt-8 px-4'>
                     <div className=''>
                        <CampaignProfileImage
                           rounded
                           imgUrl={campaignData?.supporter.profileImagePath}
                        />
                        <SimpleCard
                           title={`${campaignData?.supporter.forename}’s Run for ${campaignData?.name}`}
                           subTitle={campaignData?.campaignCharities.map(
                              charity => (
                                 <>{charity?.charityName}, </>
                              )
                           )}
                           description={campaignData?.description}
                        />
                        <Thermometer
                           max={campaignData?.donationTarget}
                           current={campaignData?.donationSummary.netDonations}
                           currency={
                              campaignData?.donationSummary.currency
                                 .displaySymbol
                           }
                        />
                        <SimpleCard
                           title='About this Campaign'
                           subTitle=''
                           className='bg-white p-4 rounded-xl '
                        />
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
                  </main>
               </div>
               {/* /Middle */}
               <RightSidebar
                  giveNowLink={`/donate/${campaignData?.quickCode}`}
                  className='flex  grow  w-full  md:w-auto lg:w-350 mt-8  order-2 md:order-none '
               />
            </div>
         </div>
      </>
   )
}
Campaign.layout = 'L1'

export default Campaign

export async function getServerSideProps(context) {
   console.log('context', context.query.id)

   return {
      props: {},
   }
}