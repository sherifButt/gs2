import React from 'react'
import Thermometer from '../stats/Thermometer'

const EventSimpleCard = ( { className,data,isLoading},{...props}) => {
   return (
      <div
         className={`flex flex-col gap-[0.56rem] justify-start items-start max-w-[33.75rem] mx-auto ${className}`}>
         <div>
            <div>
               <div className='bg-white rounded-xl '>
                  <img
                     className='block h-32 rounded-xl '
                     src={
                        data?.bannerImagePath ||
                        `/assets/images/givestar-fetured-01.png`
                     }
                  />
               </div>
            </div>
            <div>
               <div>
                  <p className='block mt-2 text-lg text-black  font-medium'>
                     {data?.name}
                  </p>
                  <p className='block text-sm text-gray-600 '>London</p>
               </div>
               <div className='my-4'>
                  {/* <p className='block text-2xl text-army-400  font-thin'>
                     {data?.donationSummary.currency.displaySymbol}
                     {data?.donationSummary.netDonations}
                  </p> */}
                  {/* <p className='block text-sm text-gray-600 '>
                     raised of {data?.donationSummary.currency.displaySymbol}
                     {data?.donationTarget}
                  </p> */}
                  <Thermometer
                     max={data?.donationTarget}
                     current={data?.donationSummary?.netDonations}
                     currency={data?.donationSummary?.currency.displaySymbol}
                     small
                  />
               </div>
            </div>
         </div>
      </div>
   )
}

export default EventSimpleCard
