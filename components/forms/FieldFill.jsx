import { ExclamationCircleIcon } from '@heroicons/react/solid'
import React from 'react'

const FieldFill = props => {
   const {
      id,
      name,
      type,
      placeholder,
      errorMessage,
      defaultValue,
      label,
      pattern,
      required,
      setValues,
      values,
   } = props
   return (
      <div>
         <div className='relative'>
            <input
               type={type}
               name={name}
               id={id}
               required={required}
               placeholder={placeholder}
               defaultValue={defaultValue}
               aria-invalid='true'
               aria-describedby='firstname-error'
               className='mt-1 relative  shadow-sm peer block w-full py-3 pl-3 pr-10 placeholder-transparent border-red-300 text-gray-900  focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-md rounded-xl'
               onChange={e =>
                  setValues({
                     ...values,
                     [name]: e.target.value,
                  })
               }
            />
            <div className='absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none'>
               <ExclamationCircleIcon
                  className='h-5 w-5 text-red-500'
                  aria-hidden='true'
               />
            </div>
   
            <label
               htmlFor={name}
               className='absolute ease-out duration-500 -top-5 left-3 block text-sm font-medium text-gray-700 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-5 transition-all peer-focus:text-gray-600 peer-focus:text-sm'>
               {placeholder}
            </label>
         </div>
            <p className='mt-2  text-sm text-red-600' id='firstname-error'>
               {errorMessage}
            </p>
      </div>
   )
}

export default FieldFill
