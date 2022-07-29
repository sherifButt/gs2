import { ExclamationCircleIcon, CheckCircleIcon } from '@heroicons/react/solid'
import React, { useEffect, useState } from 'react'
import { useLoadCurrencyListMutation } from '../../features/currency/currencyApiSlice'
import SpinningWheel from '../icons/SpinningWheel'

const FieldCurrency = ({
   id,
   name,
   type,
   placeholder,
   defaultValue,
   error,
   valid,
   value,
   title,
   disabled,
   hidden,
   label,
   className,
   required,
   setValues,
   values,
   inputHandler,
   validationHandler,
   step,
   min,
   max,
   data,
}) => {
   const {
      data: fieldData,
      isLoading: fieldIsLoading,
      isSuccess: fieldIsSuccess,
      error: fieldError,
      isError: fieldIsError,
   } = data()
const [currencySymbol,setCurrencySymbol] = useState('£')
   const [_fieldData, setFieldData] = useState([
      {
         id: '9d6494c0-e364-43f0-b76c-52251df71133',
         name: 'British Pound',
         displaySymbol: '£',
         shortCode: 'GBP',
      },
   ])
   useEffect(() => {
      // console.log( 'fieldData', ...fieldData )
      // setFieldData(fieldData)
   }, [fieldData])
   return (
      <>
         {!hidden && (
            <div className={`relative ${className}`}>
               <input
                  type={type}
                  name={name}
                  id={name}
                  title={title}
                  required
                  defaultValue={defaultValue||0}
                  className={`peer mt-1 relative shadow-sm block w-full py-3 pl-7 pr-28 placeholder-transparent  text-gray-900 ${
                     error &&
                     'focus:ring-red-500 focus:border-red-500 border-red-300'
                  } focus:outline-none border focus:ring-gray-300 focus:border-gray-300 border-gray-200 sm:text-md rounded-xl transition-all ease-out duration-300`}
                  placeholder={placeholder}
                  aria-invalid='true'
                  aria-describedby={`${name}-error`}
                  value={value}
                  onChange={inputHandler}
                  onBlur={validationHandler}
                  step={step || 10}
                  min={min || 100}
               />
               <div className='absolute inset-y-0 left-0 pl-3 pt-1 flex items-center pointer-events-none'>
                  <span className='text-gray-400 font-bold'>
                     {currencySymbol}
                  </span>
               </div>
               {error && (
                  <div className='absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none '>
                     <ExclamationCircleIcon
                        className='h-5 w-5 text-red-400'
                        aria-hidden='true'
                     />
                  </div>
               )}
               {valid && (
                  <div className='absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none '>
                     <CheckCircleIcon
                        className='h-5 w-5 text-army-400'
                        aria-hidden='true'
                     />
                  </div>
               )}

               {error && (
                  <div className='peer-hover:z-20 px-2 hover:z-20 absolute top-[53px]  border-t-dashed  border-gray-500 z-10 border-r-solid rounded-b-md m-w-2/3 w-[17rem] right-0 mr-4 p-1 bg-red-50 shadow-md'>
                     <div
                        className='leading-4  text-sm text-red-700 place-items-center'
                        id='FirstName-error'>
                        <ExclamationCircleIcon
                           className='h-5 w-5 text-red-400 inline'
                           aria-hidden='true'
                        />{' '}
                        {error}
                     </div>
                  </div>
               )}
               <label
                  htmlFor={name}
                  className='absolute ease-out duration-500 -top-5 left-8 block text-sm font-medium text-gray-700 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:-top-5 transition-all peer-focus:text-gray-600 peer-focus:text-sm'>
                  {placeholder}
               </label>
               <div className='absolute inset-y-0 pr-2 right-4 flex items-center'>
                  <label htmlFor='currency' className='sr-only'>
                     Currency
                  </label>
                  <select
                     id='currency'
                     name='currency'
                     onChange={e => {
                        setCurrencySymbol(e.target.value)
                     }}
                     className='focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-2 pr-8 border-transparent bg-transparent text-gray-500  pt-1 rounded-md'>
                     {(fieldData || _fieldData)?.map((item, idx) => {
                        return (
                           <option key={item.id} value={item.displaySymbol}>
                              {item.shortCode}
                           </option>
                        )
                     })}
                  </select>
               </div>
            </div>
         )}
      </>
   )
}
FieldCurrency.defaultProps = {
   name: 'currency',
   value: '',
   error: '',
   valid: '',
   placeholder: 'Donation Amount',
   type: 'number',
   required: true,
   disabled: false,
   hidden: false,
}

export default FieldCurrency
