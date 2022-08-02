import React from 'react'
import { useRouter } from 'next/router'
import CampaignProfileImage from '../../../../components/avatar/CampaignProfileImage'
import StatsBox from '../../../../components/stats/StatsBox'
import FundProgress from '../../../../components/stats/Thermometer'
import SimpleCard from '../../../../components/cards/SimpleCard'

import Footer from '../../../../components/footer/Footer1'
import LeftSidebar from '../../../../components/left-sidebar/left-sidebar-1'
import RightSidebar from '../../../../components/right-sidebar/right-sidebar-1'
import bg from '../../../../public/assets/images/Pattern-fill.jpg'

const Campaign = () => {
   const router = useRouter()
   // 3 vertical columns middle infinity scroll for (posts/comments/campaigns)
   const _RightSidebar = rightSidebar || RightSidebar
   const _LeftSidebar = leftSidebar || LeftSidebar
   const _Footer = footer || Footer
   return (
      <div
         style={{
            backgroundImage: `url(${bg.src})`,
         }}
         className='mx-auto max-auto flex grow bg-cover bg-center lg:bg-fixed pt-20 w-full h-80 lg:h-96 bg-yellow-50 '>
       11  <div className='md:container mx-auto max-auto flex grow '>
            <div className=' flex flex-row mx-auto grow justify-center gap-4 flex-wrap md:flex-nowrap h-full max-w-5xl '>
               <LeftSidebar className='w-80 pt-20  xs:w-88 xl:w-96 hidden lg:block  -mt-20 h-screen mb-auto   sticky top-0' />

               {/* Middle */}
               <div className='w-full sm:w-600 -mt-28   order-3 md:order-none mb-12'>
                  <main className='flex flex-col order-1 md:mt-8 px-4'>
                     <CampaignProfileImage />
                     <SimpleCard />
                     <StatsBox />
                     <FundProgress />
                     <SimpleCard
                        title='About this Campaign'
                        subTitle=''
                        className='bg-white p-4 rounded-xl '
                     />
                     <SimpleCard
                        title='Take Part'
                        subTitle=''
                        cta={{
                           text: 'REGISTER',
                           className: 'bg-neutral-500 text-white',
                        }}
                        className='bg-white p-4 rounded-xl'
                     />
                  </main>
               </div>
               {/* /Middle */}

               <RightSidebar className='flex  grow  w-full  md:w-auto lg:w-350 mt-8  order-2 md:order-none ' />
            </div>
         </div>
      </div>
   )
}
Campaign.layout = 'L1'
export default Campaign
