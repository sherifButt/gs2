import React from 'react'

const EventSimpleCard = ( { className},{...props}) => {
   return (
      <div className={`flex flex-col gap-[0.56rem] justify-start items-start max-w-[33.75rem] mx-auto ${className}`}>
         <div>
            <p className='block text-[1.31rem] text-black  font-semibold'>
               Events
            </p>
            <div>
               <p className='block text-right text-[0.81rem] text-neutral-400  font-bold'>
                  SEE MORE
               </p>
            </div>
         </div>
         <div>
            <div>
               <div className='bg-white rounded-xl'>
                  <img
                     className='block h-32'
                     src='/assets/images/assets/image-28603.66708819022.png'
                  />
               </div>
            </div>
            <div>
               <div>
                  <p className='block text-lg text-black  font-semibold'>
                     London Marathon
                  </p>
                  <p className='block text-sm text-gray-600 '>London</p>
               </div>
               <div>
                  <p className='block text-[1.19rem] text-neutral-400  font-semibold'>
                     £4,500
                  </p>
                  <p className='block text-sm text-gray-600 '>
                     raised of £12,500
                  </p>
                  <div class='flex flex-col justify-center items-center w-full'>
                     <div className='w-full h-2 rounded bg-neutral-200'>
                        <div
                           style={{ width: '45%' }}
                           className='h-2 rounded bg-army-500'></div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default EventSimpleCard
