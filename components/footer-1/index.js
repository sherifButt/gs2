import React from 'react'
import Image from 'next/image'

const Footer = () => {
   return (
      <div className='flex flex-col gap-8 justify-end items-start max-w-[10.25rem] mb-10'>
         <div className='felx flex-col gap-2'>
            <p className='block text-sm text-gray-600  font-medium'>
               About us
            </p>
            <p className='block text-sm text-gray-600  font-medium'>
               Terms and Conditions
            </p>
            <p className='block text-sm text-gray-600  font-medium'>
               Privacy Policy
            </p>
            <p className='block text-sm text-gray-600  font-medium'>
               Contact us
            </p>
         </div>
         <div className='felx gap-2 inline-flex '>
            <Image
               width={22}
               height={22}
               className='block'
               src='/assets/images/icon-instagram.svg'
            />
            <Image
               width={22}
               height={22}
               className='block'
               src='/assets/images/icon-youtube.svg'
            />
            <Image
               width={22}
               height={22}
               className='block'
               src='/assets/images/icon-facebook.svg'
            />
         </div>
         <p className='block opacity-50 text-xs text-gray-600 font-light'>
            Copyright (c) 2022 GiveStar Ltd.All
            rights reserved.
         </p>
      </div>
   )
}

export default Footer
