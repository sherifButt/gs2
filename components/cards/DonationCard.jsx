import { Transition } from '@headlessui/react'
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { like } from '../../features/postsSlice'
import AvatarUser from '../avatar/AvatarUser'
const PostLastUpdate = ({ data },{...props}) => {
   const [_data, setData] = useState(data)
   useEffect( () => {
      setData(data)
   }, [data])
   return (
      <div {...props}>
         <div className=' flex flex-col gap-2 justify-center items-start   mx-auto md:mx-0 p-5 bg-white sm:max-w-lg sm:rounded-xl  mt-6 md:mt-0 mb-0 md:mb-10 '>
            <div className='flex flex-row flex-wrap sm:flex-nowrap  justify-start items-start w-full'>
               <div className=' flex flex-col gap-4 mb-2 justify-start items-center w-8 h-full'>
                  <AvatarUser />
               </div>
               <div className='flex flex-col gap-2.5 justify-start items-start w-full  pl-0 sm:pl-5 pb-5'>
                  <p className='block text-lg text-block italic font-normal scratch'>
                     {_data?.fromSupporterId}
                  </p>
                  <p className='block text-neutral-500 '>1 day</p>
                  <p className='block  text-black '>{_data?.donatorMessage}</p>
               </div>
               <div class='max-w-[8rem] mx-auto w-full'>
                  <p class='block text-right text-[1.56rem] text-army-500  font-light'>
                     {_data?.donationCurrencySymbol}
                     {_data?.donationValue}
                  </p>
                  <p class='block text-right text-neutral-500  font-light '>
                     +{_data?.donationCurrencySymbol}
                     {_data?.giftAidValue} GiftAid
                  </p>
               </div>
            </div>
         </div>
      </div>
   )
}

export default PostLastUpdate
