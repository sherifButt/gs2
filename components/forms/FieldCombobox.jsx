import React, { useEffect, useState } from 'react'
import { addNotification } from '../../features/notificationSlice'
import { useDispatch } from 'react-redux'
import {
   SearchIcon,
   ExclamationCircleIcon,
   CheckCircleIcon,
   CheckIcon,
   SelectorIcon,
} from '@heroicons/react/solid'
import { Combobox } from '@headlessui/react'
import FieldComboboxSelectedItems from './FieldComboboxSelectedItems'
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
   const [loadCharityList, { data, isSuccess, isLoading, error, iserror }] =
      useLoadCharityListMutation()

   const dispatch = useDispatch()

   useEffect(() => {
      const loadData = async () => {
         const loadData = await loadCharityList(query).unwrap()
      }
      loadData()
   }, [query])

   const filteredOptions =
      query === ''
         ? data?.listData
         : data?.listData.filter(item => {
              return item.name.toLowerCase().includes(query.toLowerCase())
           })

   const sumDonations = options => {
      let _selectedOptions
      let success = true

      if (options) _selectedOptions = [...options]
      else _selectedOptions = [...selectedOptions]

      // sum donation split fixed
      const sumDonations = _selectedOptions.reduce((total, item) => {
         let sum = 0
         if (!isNaN(item.donationSplit))
            sum = parseInt(item.donationSplit) + total
         return sum
      }, 0)
      console.log('sumDonations', sumDonations)
      // sum donation split unfixed
      const sumDonationsUnfixed = _selectedOptions.reduce((total, item) => {
         let sum = 0
         if (!item.edited) sum = item.donationSplit + total
         return sum
      }, 0)
      console.log('sumDonationsUnfixed', sumDonationsUnfixed)
      let sumDonationFixed = sumDonations - sumDonationsUnfixed
      console.log('sumDonationFixed', sumDonationFixed)

      const reminder = 100 - sumDonationFixed
      console.log('reminder', reminder)
      if (sumDonationFixed >= 100) {
         // validation
         success = false
         dispatch(
            addNotification({
               success: success,
               message: 'Fail to add New charity',
               description:
                  'Cannot add new charity as your Total fixed percentages have exceeded 100%, try reducing your fixed percentages by clicking on the lock icon.',
            })
         )
         return {
            selectedOptions: _selectedOptions,
            sumDonationFixed,
            sumDonationsUnfixed,
            reminder,
            sumDonations,
            success,
         }
      }
   }
   const removeItem = idx => {
      const _selectedOptions = [...selectedOptions]
      _selectedOptions.splice(idx, 1)
      console.log('_selectedOptions--->>', _selectedOptions)
      _selectedOptions = setDonationSplit({
         options: _selectedOptions,
         value: 100 / _selectedOptions.length,
      })
      setSelectedOptions(_selectedOptions)
   }

   const addItem = item => {
      if (!selectedOptions.includes(item) && selectedOptions.length <= 3) {
         const _selectedOptions = [...selectedOptions, item]
         _selectedOptions = setDonationSplit({
            options: _selectedOptions,
            value:
               sumDonations(selectedOptions)?.reminder /
                  (selectedOptions.length + 1) ||
               100 / (selectedOptions.length + 1),
         })
         setSelectedOptions(_selectedOptions)
      }
   }

   useEffect(() => {
      // console.log('selectedOptions', selectedOptions)

      let e = { target: { selectedOptions, type, name } }
      inputHandler(e)
   }, [selectedOptions])

   const editDonationSplit = ({ value, options, idx }) => {
      let _selectedOptions
      let rest = 100 - value
      if (options) _selectedOptions = [...options]
      else _selectedOptions = [...selectedOptions]

      _selectedOptions.map((item, _idx) => {
         if (_idx !== idx && !item.edited) {
            _selectedOptions[_idx] = {
               ...item,
               donationSplit: rest / (_selectedOptions.length - 1),
            }
         }
         if (_idx == idx) {
            _selectedOptions[_idx] = {
               ...item,
               donationSplit: value,
               edited: true,
            }
         }
      })

      setSelectedOptions(_selectedOptions)
      console.log('_selectedOptions->', _selectedOptions)
      console.log('idx', idx)

      return _selectedOptions
   }

   const setDonationSplit = ({ value, options, idx }) => {
      let _selectedOptions

      if (options) _selectedOptions = [...options]
      else _selectedOptions = [...selectedOptions]

      if (sumDonations(_selectedOptions)?.success) return _selectedOptions

      _selectedOptions.map((item, _idx) => {
         if (!item.edited)
            _selectedOptions[_idx] = {
               ...item,
               donationSplit:
                  value ||
                  sumDonations(_selectedOptions)?.reminder /
                     _selectedOptions.filter(i => i.edited).length ||
                  0,
               edited: false,
            }
      })

      setSelectedOptions(_selectedOptions)
      console.log('_selectedOptions->', _selectedOptions)
      console.log('idx', idx)

      return _selectedOptions
   }

   return (
      <>
         {!hidden && (
            <div className='relative'>
               <ul className='flex flex-col gap-4 py-4 divide-y-2'>
                  {selectedOptions.map((item, i) => (
                     <li key={item.name} className=''>
                        <FieldComboboxSelectedItems
                           idx={i}
                           edited={item.edited}
                           donationSplit={item.donationSplit}
                           editDonationSplit={editDonationSplit}
                           selectedOptions={selectedOptions}
                           setSelectedOptions={setSelectedOptions}
                           removeItem={removeItem}
                           title={item.name}
                           setDonationSplit={setDonationSplit}
                           imageUrl={
                              item.profileImagePath ||
                              '/assets/images/giveStar_stock_Image.jpg'
                           }
                        />
                     </li>
                  ))}
               </ul>
               <Combobox
                  as='div'
                  value={selectedOption}
                  onChange={e => {
                     setSelectedOption(e)
                  }}>
                  <div className='relative mt-6'>
                     <Combobox.Input
                        selectedValues={selectedOptions}
                        type='select'
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
                        onChange={e => {
                           setQuery(e.target.value)
                        }}
                        displayValue={item => item?.name}
                     />
                     <Combobox.Button className='absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none'>
                        {isLoading ? (
                           <svg
                              className='animate-spin -ml-1 mr-1 h-5 w-5 text-gray-400'
                              xmlns='http://www.w3.org/2000/svg'
                              fill='none'
                              viewBox='0 0 24 24'>
                              <circle
                                 className='opacity-25'
                                 cx='12'
                                 cy='12'
                                 r='10'
                                 stroke='currentColor'
                                 strokeWidth='4'></circle>
                              <path
                                 className='opacity-75'
                                 fill='currentColor'
                                 d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'></path>
                           </svg>
                        ) : (
                           <SelectorIcon
                              className='h-5 w-5 text-gray-400'
                              aria-hidden='true'
                           />
                        )}
                     </Combobox.Button>
                     <Combobox.Label
                        htmlFor={name}
                        className='absolute ease-out duration-500 -top-6 left-3 block text-sm font-medium text-gray-700 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-6 transition-all peer-focus:text-gray-600 peer-focus:text-sm'>
                        {`${placeholder} (${selectedOptions.length}/4)`}
                     </Combobox.Label>
                     {filteredOptions?.length > 0 && (
                        <Combobox.Options className='absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
                           {filteredOptions.map(item => (
                              <Combobox.Option
                                 key={item.id}
                                 type='select'
                                 name='stuff'
                                 selectedValues='fffff'
                                 // value={item}
                                 onClick={e => {
                                    addItem(item)
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
                                             src={
                                                item.profileImagePath ||
                                                '/assets/images/giveStar_stock_Image.jpg'
                                             }
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
