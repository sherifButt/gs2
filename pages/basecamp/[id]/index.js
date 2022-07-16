import React from 'react'
import { useRouter } from 'next/router'
import CampaignProfileImage from '../../../components/avatar/CampaignProfileImage'
import StatsBox from '../../../components/stats/StatsBox'


const Campaign = () => {
    const router = useRouter()
    console.log('router.query.id', router.query.id)
  return (
     <div className=''>
        <CampaignProfileImage />
        <div className='flex flex-col mt-8 gap-4 justify-start items-start max-w-[30.94rem] w-full mx-auto'>
           <p className='block text-3xl text-black  font-light'>
              Run for Macmillan
           </p>
           <p className='block text-2xl text-gray-600  font-light'>
              Nationwide
           </p>
           <p className='block w-full text-black  font-light'>
              This June we are asking our supporters to don their running shoes
              and Run for Macmillan! Whether you do 5k or 50k, the distance is
              up to you. So lace your trainers and raise as much as you can for
              Macmillan this summer.
           </p>
          </div>
          <StatsBox />
     </div>
  )
}
Campaign.layout='L1'
export default Campaign