import { ExclamationCircleIcon, CheckCircleIcon } from '@heroicons/react/solid'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import FieldText from './FieldText'
import { nanoid } from '@reduxjs/toolkit'

const defaultDonationSizes = [
   {
      id: nanoid(),
      value: 5,
      currencyId: '',
      name: '',
      description: '',
      campaignId: '',
      charityId: '',
   },
   {
      id: nanoid(),
      value: 10,
      currencyId: '',
      name: '',
      description: '',
      campaignId: '',
      charityId: '',
   },
   {
      id: nanoid(),
      value: 20,
      currencyId: '',
      name: '',
      description: '',
      campaignId: '',
      charityId: '',
   },
   {
      id: nanoid(),
      value: 50,
      currencyId: '',
      name: '',
      description: '',
      campaignId: '',
      charityId: '',
   },
   {
      id: nanoid(),
      value: 100,
      currencyId: '',
      name: '',
      description: '',
      campaignId: '',
      charityId: '',
   },
   {
      id: nanoid(),
      value: 200,
      currencyId: '',
      name: '',
      description: '',
      campaignId: '',
      charityId: '',
   },
]

const FieldDonationSize = ({
   id,
   name,
   type,
   placeholder,
   error,
   valid,
   value,
   title,
   rightText,
   rightTextPadding,
   leftText,
   leftTextPadding,
   disabled,
   hidden,
   label,
   required,
   setValues,
   values,
   inputHandler,
   validationHandler,
   step,
   min,
   usedSearch,
   data = () => ({
      data: null,
      isLoading: null,
      isSuccess: null,
      isError: null,
      error: null,
   }),
}) => {
   const {
      data: fieldData,
      isLoading: fieldIsLoading,
      isSuccess: fieldIsSuccess,
      error: fieldError,
      isError: fieldIsError,
   } = data({ query: value })

   const [defaultDonationData, setDefaultDonationData] =
      useState(defaultDonationSizes)
   const [_type, setType] = useState('button')
   const _inputHandler = e => {
      const _defaultDonationData = [...defaultDonationData]
      _defaultDonationData.map((item, idx) => {
         if (item.id == e.target.id)
            _defaultDonationData[idx].value = e.target.value
      })
      // _defaultDonationData[e.target.id].value = e.target.value
      setDefaultDonationData(_defaultDonationData)
   }
   const _validationHandler = e => {}

   useEffect( () => {
      console.log('defaultDonationData', defaultDonationData)
      inputHandler({
         target: {
            selectedOptions: defaultDonationData,
            name: 'defaultDonationSizes',
            type: 'selectmultiple',
         },
      })
   }, [defaultDonationData])

   return (
      <>
         {!hidden && (
            <div className='relative'>
               <div className='flex flex-row justify-between py-4'  >
                  <div>
                     <a
                        className='py-4 text-sm cursor-pointer '
                        onClick={() => {
                           _type == 'button'
                              ? setType('number')
                              : setType('button')
                        }}>
                        {`${
                           _type === 'number'
                              ? '✓ Save Donations'
                              : '✎ Edit Donation Sizes'
                        }`}
                     </a>
                     {                  _type==='number'&&
                     <div>
                        <a
                           className=' text-sm cursor-pointer '
                           onClick={() => {
                              const _defaultDonationData = [...defaultDonationData]
                              _defaultDonationData.push({
                                 id: nanoid(),
                                 value:
                                    _defaultDonationData[
                                       _defaultDonationData.length - 1
                                    ].value * 2,
                                 currencyId: '',
                                 name: '',
                                 description: '',
                                 campaignId: '',
                                 charityId: '',
                              })
                              setDefaultDonationData(_defaultDonationData)
                           }}>
                           + Add Button
                        </a>
                        <a
                           className='ml-4  text-sm cursor-pointer '
                           onClick={() => {
                              const _defaultDonationData = [...defaultDonationData]
                              _defaultDonationData.pop()
                              setDefaultDonationData(_defaultDonationData)
                           }}>
                           - Remove Button
                        </a>
                     </div>
                  }
                  </div>

               </div>

               <ul className=' grid grid-cols-2 gap-4 first:focus:border-gray-500'>
                  {defaultDonationData?.map((item, idx) => (
                     <li key={item.id+item.name}>
                        <FieldText
                           id={item.id}
                           
                           value={item.value}
                           placeholder=''
                           step={5}
                           min={5}
                           autofocus
                           inputHandler={_inputHandler}
                           validationHandler={_validationHandler}
                           className={` ${
                              _type == 'number'
                                 ? 'bg-white font-normal text-center'
                                 : 'bg-neutral-400 bg-button-texture- bg-no-repeat bg-contain'
                           }  text-xl font-bold text-gray-900 px-0`}
                           type={_type}
                        />
                     </li>
                  ))}
               </ul>
            </div>
         )}
      </>
   )
}
FieldDonationSize.defaultProps = {
   name: 'FirstName',
   value: '',
   error: '',
   valid: '',
   placeholder: 'First Name',
   type: 'text',
   required: true,
   disabled: false,
   hidden: false,
}

export default FieldDonationSize
