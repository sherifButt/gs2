import React from 'react'

const Profile = () => {
   return (
      <div className='mx-4'>
         <div className=' mx-auto flex flex-row '>
            <div>
               <div className='px-4 '>
                  <img
                     className='block rounded-full border-white border-4 w-44 '
                     src='/assets/images/image-natasha.png'
                  />
               </div>
            </div>
            <div className='flex flex-col gap-[2.06rem] justify-start items-start'>
               <div className='flex flex-col gap-2 justify-start items-start w-60'>
                  <p className='block w-full text-[1.56rem] text-black  font-light'>
                     Natasha Stone
                  </p>
                  <p className='block w-full text-lg text-black  font-light'>
                     LondonFundraising since 11 January 2022
                  </p>
               </div>
               <p className='block text-lg text-black  font-light'>
                  23 Followers • 45 Following
               </p>
            </div>
         </div>
         <div className='flex flex-row justify-between items-center mx-auto my-8'>
            <p className='block text-[1.56rem] text-black  font-light'>
               Causes I care about
            </p>
            <div className='flex flex-row gap-4 justify-end items-center'>
               <p className='block text-right text-lg text-army-400  font-light'>
                  SEE MORE
               </p>
               <div>
                  <div>
                     <img className='w-8' src='/assets/images/arrow.png' />
                  </div>
               </div>
            </div>
         </div>
         <div className='my-12 mx-auto flex flex-row justify-between '>
            <div className='flex flex-row gap-4'>
               <div>
                  <img
                     className='w-24 rounded-xl'
                     src='/assets/images/giveStar_stock_Image.jpg'
                  />
               </div>
               <div>
                  <img
                     className='w-24 rounded-xl'
                     src='/assets/images/giveStar_stock_Image.jpg'
                  />
               </div>
               <div>
                  <img
                     className='w-24 rounded-xl'
                     src='/assets/images/button-square.png'
                  />
                  
               </div>
            </div>
            <div>
               
               <img
                  className='w-24 rounded-md'
                  src='/assets/images/button-orange.jpg'
               /><p className='block text-xs text-black  font-light'>
                  MONTHLY GIVER
               </p>
               
            </div>
         </div>
      </div>
   )
}

export default Profile
