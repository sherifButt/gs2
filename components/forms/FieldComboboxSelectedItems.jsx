import React from 'react'

const FieldComboboxSelectedItems = (
   { title, description, imageUrl, donationSplit, error, imageStock },
   { ...props }
) => {
   return (
      <div className='flex flex-row gap-2 justify-start items-center mx-auto pt-4'>
         <div className='flex flex-row gap-4 justify-start items-start w-full'>
            <div className=' items-center  h-full hidden lg:block'>
               <img
                  className='block w-32 rounded'
                  src={imageUrl || imageStock}
               />
            </div>
            <div className='flex flex-col justify-start items-start w-full'>
               <div className='flex flex-row gap-4 justify-start items-center w-full'>
                  <p className='block text-lg text-neutral-500 '>{title}</p>
                  <p className='block opacity-50 underline text-neutral-500 text-right text-sm'>
                     remove
                  </p>
               </div>
               <p className='block w-full text-neutral-500 '>{description}</p>
            </div>
         </div>
         <div className=' flex flex-row flex-wrap gap-5 justify-end items-center w-[12.25rem] h-full'>
            <div className='relative'>
               <input
                  name='donationSplit'
                  type='number'
                  col='2'
                  placeholder={donationSplit * 100}
                  className={`pl-6 flex w-24 flex-row gap-5 justify-center items-center py-2 bg-white rounded-xl text-xl  shadow-sm  text-gray-900 ${
                     error &&
                     'focus:ring-red-500 focus:border-red-500 border-red-300'
                  } focus:outline-none border focus:ring-gray-300 focus:border-gray-300 border-gray-200 sm:text-md rounded-xl transition-all ease-out duration-300`}
               />
               <span className='text-neutral-400 font-semibold absolute top-3 left-2'>
                  %
               </span>
            </div>

            <p className=' text-neutral-500 hidden lg:block text-sm'>
               Donation split
            </p>
         </div>
      </div>
   )
}

FieldComboboxSelectedItems.defaultProps = {
   donationSplit: 1,
   error:false,
   title: 'Christina Aid',
   description: '',
   imageUrl:'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
   imageStock:'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
   
}

export default FieldComboboxSelectedItems