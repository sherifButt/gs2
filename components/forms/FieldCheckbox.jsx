import Link from 'next/link'
import { ExclamationCircleIcon } from '@heroicons/react/solid'
import React from 'react'

const FieldCheckbox = ( {
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
   href,
   terms,
   className,
} ) => {
   return (
      <div className={`${className}`}>
         <div className='flex  items-center justify-between relative'>
            <input
               id={name}
               name={name}
               type='checkbox'
               className=' h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded'
               checked={value}
               onChange={inputHandler}
               onBlur={validationHandler}
            />
            <label htmlFor={name} className='ml-2 block text-sm text-gray-900'>
               <span className='text-army-500 '>
                  <Link href={href} passHref>
                     <a>{terms}</a>
                  </Link>
               </span>
            </label>
         </div>
         {error && (
            <div className='mt-2'>
               <p
                  className='leading-4 -mt-1  ml-1 text-sm text-red-400'
                  id={`${name}-error`}>
                  {error}
               </p>
            </div>
         )}
      </div>
   )
}
FieldCheckbox.defaultProps = {
   id: 1,
   name: 'checkbox',
   value: '',
   error: '',
   valid: '',
   placeholder: 'Write a message ...',
   type: 'checkbox',
   required: true,
   disabled: false,
   hidden: false,
   terms: 'I agree to Givestar Terms of Use',
   href: '#',
}

export default FieldCheckbox
