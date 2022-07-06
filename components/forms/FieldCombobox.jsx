import React, { useEffect, useState } from 'react'
import {
   ExclamationCircleIcon,
   CheckCircleIcon,
   CheckIcon,
   SelectorIcon,
} from '@heroicons/react/solid'
import { Combobox } from '@headlessui/react'
import FieldCoboboxSelectedItems from './FieldComboboxSelectedItems'
import { useLoadCharityListMutation } from '../../features/charity/charityApiSlice'

function classNames(...classes) {
   return classes.filter(Boolean).join(' ')
}

const FieldCombobox = ({
   id,
   name,
   type,
   placeholder,
// data,
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
}) => {
   const [query, setQuery] = useState('')
   const [selectedOption, setSelectedOption] = useState()
   const [selectedOptions, setSelectedOptions] = useState([])
   const [loadCharityList, { data,isSuccess, isLoading, error, iserror }] =
      useLoadCharityListMutation()

   const listQuery = {
      limit: 0,
      pageOffSet: 0,
      listOrderFields: [
         {
            fieldName: 'string',
            isAscending: true,
         },
      ],
      query: 'string',
   }

   useEffect(() => {
      const loadData = async () => {
         const loadData = await loadCharityList( listQuery ).unwrap()
         // data = loadData.listData
      }
      loadData()
   }, [])
   useEffect(() => {
      console.log('data', data)
   }, [data])

   const filteredPeople =
      query === ''
         ? data?.listData
         : data?.listData.filter(item => {
              return item.name.toLowerCase().includes(query.toLowerCase())
           })

   useEffect(() => {
      console.log('selectedOptions', selectedOptions)
   }, [selectedOptions])
   return (
      <>
         {!hidden && (
            <div className='relative'>
               <Combobox
                  as='div'
                  value={selectedOption}
                  onChange={e => {
                     setSelectedOption(e)
                  }}>
                  <div className='relative mt-1'>
                     <Combobox.Input
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
                        // value={item => item?.name}
                        aria-describedby={`${name}-error`}
                        onChange={e => {
                           setQuery(e.target.value)
                        }}
                        displayValue={item => item?.name}
                     />
                     <Combobox.Button className='absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none'>
                        <SelectorIcon
                           className='h-5 w-5 text-gray-400'
                           aria-hidden='true'
                        />
                     </Combobox.Button>
                     <Combobox.Label
                        htmlFor={name}
                        className='absolute ease-out duration-500 -top-6 left-3 block text-sm font-medium text-gray-700 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-6 transition-all peer-focus:text-gray-600 peer-focus:text-sm'>
                        {placeholder}
                     </Combobox.Label>
                     {filteredPeople?.length > 0 && (
                        <Combobox.Options className='absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
                           {filteredPeople.map(item => (
                              <Combobox.Option
                                 key={item.id}
                                 value={item}
                                 onClick={e => {
                                    inputHandler(e)

                                    if (
                                       !selectedOptions.includes(item) &&
                                       selectedOptions.length <= 4
                                    )
                                       setSelectedOptions([
                                          ...selectedOptions,
                                          item,
                                       ])
                                    // console.log('selectedOptions', selectedOptions)
                                    // e.target.value = ''
                                 }}
                                 className={({ active }) =>
                                    classNames(
                                       'relative cursor-default select-none py-2 pl-3 pr-9',
                                       active
                                          ? 'bg-indigo-600 text-white'
                                          : 'text-gray-900'
                                    )
                                 }>
                                 {({ active, selected }) => (
                                    <>
                                       <div className='flex items-center'>
                                          <img
                                             src={item.imageUrl}
                                             alt=''
                                             className='h-6 w-6 flex-shrink-0 rounded-full'
                                          />
                                          <span
                                             className={classNames(
                                                'ml-3 truncate',
                                                selected && 'font-semibold'
                                             )}>
                                             {item.name}
                                          </span>
                                       </div>

                                       {selected && (
                                          <span
                                             className={classNames(
                                                'absolute inset-y-0 right-0 flex items-center pr-4',
                                                active
                                                   ? 'text-white'
                                                   : 'text-indigo-600'
                                             )}>
                                             <CheckIcon
                                                className='h-5 w-5'
                                                aria-hidden='true'
                                             />
                                          </span>
                                       )}
                                    </>
                                 )}
                              </Combobox.Option>
                           ))}
                        </Combobox.Options>
                     )}
                  </div>
               </Combobox>
               <ul className='flex flex-col gap-4 py-4 divide-y-2'>
                  {selectedOptions.map((item, i) => (
                     <li key={item.name} className=''>
                        <FieldCoboboxSelectedItems
                           title={item.name}
                           imageUrl={item.profileImagePath}
                        />
                     </li>
                  ))}
               </ul>
            </div>
         )}
      </>
   )
}
FieldCombobox.defaultProps = {
   data: [
      {
         id: 1,
         name: 'Foundation Elements',
         imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      {
         id: 2,
         name: 'Christian Aid',
         imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      {
         id: 3,
         name: 'Mark Stans',
         imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      {
         id: 4,
         name: 'Stans Inc',
         imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      {
         id: 5,
         name: 'United',
         imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      {
         id: 6,
         name: 'Smarts corp',
         imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      // More users...
   ],
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
