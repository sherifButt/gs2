import { ExclamationCircleIcon,CheckCircleIcon } from '@heroicons/react/solid'
import React from 'react'

const FieldText = ({
   id,
   name,
   type,
   placeholder,
   error,
   valid,
   value,
   disabled,
   hidden,
   label,
   required,
   setValues,
   values,
   inputHandler,
   validationHandler,
}) => {
   return (
      <>
         {!hidden && (
            <div className='relative'>
               <input
                  type={type}
                  name={name}
                  id={name}
                  required
                  className={`peer mt-1 relative shadow-sm block w-full py-3 pl-3 pr-10 placeholder-transparent border-red-300 text-gray-900 ${
                     error && 'border'
                  } focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-md rounded-xl transition-all ease-out duration-300`}
                  placeholder={placeholder}
                  aria-invalid='true'
                  aria-describedby={`${name}-error`}
                  value={value}
                  onChange={inputHandler}
                  onBlur={validationHandler}
               />
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
                  <div className='peer-hover:z-20  hover:z-20 absolute top-[53px]  border-t-dashed  border-gray-500 z-10 border-r-solid rounded-b-md m-w-2/3 w-[17rem] right-0 mr-4 p-1 bg-gray-900 shadow-lg'>
                     <div
                        className='leading-4  text-sm text-white place-items-center'
                        id='FirstName-error'>
                         <ExclamationCircleIcon
                        className='h-5 w-5 text-red-400 inline mr'
                        aria-hidden='true'
                     /> {error}
                     </div>
                  </div>
               )}
               <label
                  htmlFor={name}
                  className='absolute ease-out duration-500 -top-5 left-3 block text-sm font-medium text-gray-700 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:-top-5 transition-all peer-focus:text-gray-600 peer-focus:text-sm'>
                  {placeholder}
               </label>
            </div>
         )}
      </>
   )
}
FieldText.defaultProps = {
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

export default FieldText
