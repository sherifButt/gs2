import React from 'react'
import DonationCard from '../cards/DonationCard'

const DonationStream = () => {
  return (
     <div className='bg-white rounded-xl p-4 my-4 '>
        <p className='text-2xl'>Donations</p>
        <DonationCard />
        <DonationCard />
        <DonationCard />
     </div>
  )
}

export default DonationStream