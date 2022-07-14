import { ExclamationCircleIcon, CheckCircleIcon } from '@heroicons/react/solid'
import Link from 'next/link'
import React, { useState } from 'react'
import FieldText from './FieldText'

const defaultDonationSizes = [
   {
      id: 1,
      value: 5,
      currencyId: '',
      name: '',
      description: '',
      campaignId: '',
      charityId: '',
   },
   {
      id: 2,
      value: 10,
      currencyId: '',
      name: '',
      description: '',
      campaignId: '',
      charityId: '',
   },
   {
      id: 3,
      value: 20,
      currencyId: '',
      name: '',
      description: '',
      campaignId: '',
      charityId: '',
   },
   {
      id: 4,
      value: 50,
      currencyId: '',
      name: '',
      description: '',
      campaignId: '',
      charityId: '',
   },
   {
      id: 5,
      value: 100,
      currencyId: '',
      name: '',
      description: '',
      campaignId: '',
      charityId: '',
   },
   {
      id: 6,
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
      _defaultDonationData[e.target.id].value = e.target.value
      setDefaultDonationData(_defaultDonationData)
inputHandler({ target: _defaultDonationData })
   }
   const _validationHandler = e => {}

   return (
      <>
         {!hidden && (
            <div className='relative'>
               <a
                  className='py-4 text-sm cursor-pointer '
                  onClick={() => {
                     _type == 'button' ? setType('text') : setType('button')
                  }}>
                  {`${
                     _type === 'text'
                        ? '✓ Save Donation Sizes'
                        : '✎ Edit Donation Sizes'
                  }`}
               </a>

               <ul className=' grid grid-cols-2 gap-4 first:focus:border-gray-500'>
                  {defaultDonationData?.map((item, idx) => (
                     <li>
                        <FieldText
                           id={item.id}
                           key={item.id}
                           value={item.value}
                           placeholder=''
                           autofocus
                           inputHandler={_inputHandler}
                           validationHandler={_validationHandler}
                           className={` ${
                              _type == 'text'
                                 ? 'bg-white font-normal '
                                 : 'bg-yellow-400 bg-button-texture bg-no-repeat bg-contain'
                           }  text-xl font-bold text-gray-600  bg-[left-10px]`}
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
