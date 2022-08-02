import React from 'react'
import { useRouter } from 'next/router'
import CampaignProfileImage from '../../../../components/avatar/CampaignProfileImage'
import StatsBox from '../../../../components/stats/StatsBox'
import FundProgress from '../../../../components/stats/Thermometer'
import SimpleCard from '../../../../components/cards/SimpleCard'

const Campaign = () => {
   const router = useRouter()
   console.log('router.query.id', router.query.id)
   return (
      <div className=''>
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
            cta={{ text: 'REGISTER', className: 'bg-neutral-500 text-white' }}
            className='bg-white p-4 rounded-xl'
         />
      </div>
   )
}
Campaign.layout = 'L1'
export default Campaign
