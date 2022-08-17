import { ExclamationCircleIcon,CheckCircleIcon } from '@heroicons/react/solid'
import React, { useState } from 'react'
import Dropdown from '../dropDown/Dropdown'

const FieldMultiselect = ({
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
}, { ...props } ) => {
   // state showing if dropdown is open or closed
   const [dropdown, setDropdown] = useState(false)
   // managing dropdown items (list of dropdown items)
   const [items, setItems] = useState(['john', 'milos', 'steph', 'kathreine'])
   // contains selected items
   const [selectedItems, setSelected] = useState([])

   const toogleDropdown = () => {
      setDropdown(!dropdown)
   }
   // adds new item to multiselect
   const addTag = item => {
      setSelected(selectedItems.concat(item))
      setDropdown(false)
   }
   // removes item from multiselect
   const removeTag = item => {
      const filtered = selectedItems.filter(e => e !== item)
      setSelected(filtered)
   }
   return (
      <>
         {!hidden && (
            <div className='relative'>
               <div className='autcomplete-wrapper'>
                  <div className='autcomplete'>
                     <div className='w-full flex flex-col items-center mx-auto'>
                        <div className='w-full'>
                           <div className='flex flex-col items-center relative'>
                              <div className='w-full '>
                                 <div className='my-2 p-1 flex border border-gray-200 bg-white rounded '>
                                    <div className='flex flex-auto flex-wrap'>
                                       {selectedItems.map((tag, index) => {
                                          return (
                                             <div
                                                key={index}
                                                className='flex justify-center items-center m-1 font-medium py-1 px-2 bg-white rounded-full text-teal-700 bg-teal-100 border border-teal-300 '>
                                                <div className='text-xs font-normal leading-none max-w-full flex-initial'>
                                                   {tag}
                                                </div>
                                                <div className='flex flex-auto flex-row-reverse'>
                                                   <div
                                                      onClick={() =>
                                                         removeTag(tag)
                                                      }>
                                                      <svg
                                                         xmlns='http://www.w3.org/2000/svg'
                                                         width='100%'
                                                         height='100%'
                                                         fill='none'
                                                         viewBox='0 0 24 24'
                                                         stroke='currentColor'
                                                         strokeWidth='2'
                                                         strokeLinecap='round'
                                                         strokeLinejoin='round'
                                                         className='feather feather-x cursor-pointer hover:text-teal-400 rounded-full w-4 h-4 ml-2'>
                                                         <line
                                                            x1='18'
                                                            y1='6'
                                                            x2='6'
                                                            y2='18'></line>
                                                         <line
                                                            x1='6'
                                                            y1='6'
                                                            x2='18'
                                                            y2='18'></line>
                                                      </svg>
                                                   </div>
                                                </div>
                                             </div>
                                          )
                                       })}
                                       <div className='flex-1'>
                                          <input
                                             placeholder=''
                                             className='bg-transparent p-1 px-2 appearance-none outline-none h-full w-full text-gray-800'
                                          />
                                       </div>
                                    </div>
                                    <div
                                       className='text-gray-300 w-8 py-1 pl-2 pr-1 border-l flex items-center border-gray-200'
                                       onClick={toogleDropdown}>
                                       <button className='cursor-pointer w-6 h-6 text-gray-600 outline-none focus:outline-none'>
                                          <svg
                                             xmlns='http://www.w3.org/2000/svg'
                                             width='100%'
                                             height='100%'
                                             fill='none'
                                             viewBox='0 0 24 24'
                                             stroke='currentColor'
                                             strokeWidth='2'
                                             strokeLinecap='round'
                                             strokeLinejoin='round'
                                             className='feather feather-chevron-up w-4 h-4'>
                                             <polyline points='18 15 12 9 6 15'></polyline>
                                          </svg>
                                       </button>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           {dropdown ? (
                              <Dropdown
                                 list={items}
                                 addItem={addTag}></Dropdown>
                           ) : null}
                        </div>
                     </div>
                  </div>
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
                  className='absolute ease-out duration-500 -top-5 left-3 block text-sm font-medium text-gray-700 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:-top-5 transition-all peer-focus:text-gray-600 peer-focus:text-sm'>
                  {placeholder}
               </label>
            </div>
         )}
      </>
   )
}
FieldMultiselect.defaultProps = {
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

export default FieldMultiselect
