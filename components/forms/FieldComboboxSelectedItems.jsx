import React, { useState, useEffect } from 'react'
import { LockClosedIcon, LockOpenIcon } from '@heroicons/react/solid'

const FieldComboboxSelectedItems = (
   {
      title,
      description,
      imageUrl,
      donationSplit,
      error,
      imageStock,
      idx,
      removeItem,
      setDonationSplit,
      selectedOptions,
      setSelectedOptions,
      editDonationSplit,
      edited
   },
   { ...props }
) => {
   const [donationSplitValue, setDonationSplitValue] = useState(donationSplit)
   useEffect(() => {
      // setDonationSplit({value: donationSplitValue,idx})
   }, [donationSplitValue])

   useEffect(() => {
      setDonationSplitValue(donationSplit)
   }, [donationSplit])
   return (
      <div className='flex flex-row gap-2 justify-start items-center mx-auto pt-4'>
         <div className='flex flex-row gap-4 justify-start items-start w-full'>
            <div className=' items-center  h-full hidden lg:block'>
               <img
                  className='block w-32 rounded'
                  src={imageUrl || '/assets/images/giveStar_stock_Image.jpg'}
               />
            </div>
            <div className='flex flex-col justify-start items-start w-full'>
               <div className='flex flex-row gap-4 justify-start items-center w-full'>
                  <p className='block text-md text-neutral-500 '>{title}</p>
               </div>
               <p className='block w-full text-neutral-500 '>{description}</p>
            </div>
         </div>
         <div className=' flex flex-row flex-wrap gap-5 justify-end items-center w-full h-full'>
            <a
               href='#'
               className='block opacity-50 underline text-neutral-500 text-right text-sm'
               onClick={() => {
                  removeItem(idx)
               }}>
               remove
            </a>
            <div
               className='p-2'
               title='Lock to avoid change'
               onClick={e => {
                  const _selectedOptions = [...selectedOptions]
                  _selectedOptions[idx].edited = !_selectedOptions[idx].edited
                  setSelectedOptions(_selectedOptions)
               }}>
               {/* {edited ? (
                  <LockClosedIcon className='  text-neutral-500 text-sm w-4' />
               ) : (
                  <LockOpenIcon className='  text-neutral-200 text-sm w-4' />
               )} */}
            </div>
            <div className='relative'>
               <input
                  name='donationSplit'
                  type='number'
                  step={1}
                  min={10}
                  max={100}
                  col='2'
                  disabled
                  value={Math.round(parseInt((donationSplitValue * 2) / 2))}
                  onChange={e => {
                     console.log('e.target.value', e.target.value)
                     editDonationSplit({ value: e.target.value, idx })
                  }}
                  placeholder={donationSplit}
                  className={`pl-6 flex w-24 flex-row gap-5 justify-center items-center py-0 bg-white rounded-xl text-2xl font-bold  shadow-sm  ${
                     selectedOptions[idx].edited
                        ? 'text-gray-700'
                        : 'text-gray-700'
                  } ${
                     error &&
                     'focus:ring-red-500 focus:border-red-500 border-red-300'
                  } focus:outline-none border focus:ring-gray-300 focus:border-gray-300 border-gray-200 sm:text-md rounded-xl transition-all ease-out duration-300`}
               />
               {/* <button>{Math.round(parseInt((donationSplitValue *2)/2))}</button> */}
               <span className='text-neutral-400 text-sm font-semibold absolute top-2 left-2'>
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
   error: false,
   title: 'Christina Aid',
   description: '',
   imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
   imageStock: '/assets/images/giveStar_stock_Image.jpg',
}

export default FieldComboboxSelectedItems
