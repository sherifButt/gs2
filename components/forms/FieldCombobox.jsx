import React, { useState } from 'react'
import {
   ExclamationCircleIcon,
   CheckCircleIcon,
   CheckIcon,
   SelectorIcon,
} from '@heroicons/react/solid'
import { Combobox } from '@headlessui/react'

const people = [
   {
      id: 1,
      name: 'Leslie Alexander',
      imageUrl:
         'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
   },
   // More users...
]

function classNames(...classes) {
   return classes.filter( Boolean ).join( ' ' )
   
}

const FieldCombobox = ({
   id,
   name,
   type,
   placeholder,
   error,
   valid,
   value,
   title,
   disabled,
   hidden,
   label,
   required,
   setValues,
   values,
   inputHandler,
   validationHandler,
} ) => {
   
const [query, setQuery] = useState('')
const [selectedPerson, setSelectedPerson] = useState()

const filteredPeople =
   query === ''
      ? people
      : people.filter(person => {
           return person.name.toLowerCase().includes(query.toLowerCase())
        })

   return (
      <>
         {!hidden && (
            <div className='relative'>
               <input
                  type={type}
                  name={name}
                  id={name}
                  title={title}
                  required
                  className={`peer mt-1 relative shadow-sm block w-full py-3 pl-3 pr-10 placeholder-transparent  text-gray-900 ${
                     error &&
                     'focus:ring-red-500 focus:border-red-500 border-red-300'
                  } focus:outline-none border focus:ring-gray-300 focus:border-gray-300 border-gray-200 sm:text-md rounded-xl transition-all ease-out duration-300`}
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
                  className='absolute ease-out duration-500 -top-5 left-3 block text-sm font-medium text-gray-700 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:-top-5 transition-all peer-focus:text-gray-600 peer-focus:text-sm'>
                  {placeholder}
               </label>
            </div>
         )}
      </>
   )
}
FieldCombobox.defaultProps = {
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

export default FieldCombobox
