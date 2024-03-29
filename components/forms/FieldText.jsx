import { ExclamationCircleIcon, CheckCircleIcon } from '@heroicons/react/solid'
import React from 'react'


const CheckIcon = ()=>{
   return(<div className='absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none '>
      <CheckCircleIcon className='h-5 w-5 text-army-400' aria-hidden='true' />
   </div>)
}
const FieldText = ({
   id,
   name,
   type,
   placeholder,
   className,
   error,
   valid,
   value,
   title,
   rightText,
   rightTextPadding,
   leftText,
   leftTextPadding,
   defaultValue,
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
   pattern,
   data = () => ({
      data: null,
      isLoading: null,
      isSuccess: null,
      isError: null,
      error: null,
   }),
   usedSearch,
}) => {
   const {
      data: fieldData,
      isLoading: fieldIsLoading,
      isSuccess: fieldIsSuccess,
      error: fieldError,
      isError: fieldIsError,
   } = data({ query: value })

   return (
      <>
         {!hidden && (
            <div className='relative'>
               <input
                  type={type}
                  name={ name }
                  pattern={pattern}
                  id={id || name}
                  title={title}
                  required
                  className={`peer mt-1 relative shadow-sm block w-full py-3 pl-3 pr-10 placeholder-transparent  text-gray-900 ${
                     (rightText || leftText)
                        ? rightTextPadding || leftTextPadding
                        : 'pl-3'
                  } ${
                     error &&
                     'focus:ring-red-500 focus:border-red-500 border-red-300'
                  } focus:outline-none border focus:ring-gray-300 focus:border-gray-300 border-gray-200 sm:text-md rounded-xl transition-all ease-out duration-300 ${className}`}
                  placeholder={placeholder}
                  aria-invalid='true'
                  aria-describedby={`${name}-error`}
                  value={value}
                  defaultValue={defaultValue}
                  onChange={e => {
                     inputHandler(e)

                     validationHandler(e)
                  }}
                  onBlur={e => {}}
                  step={step || 10}
                  min={min || 100}
               />
               {error && (
                  <div className='absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none '>
                     <ExclamationCircleIcon
                        className='h-5 w-5 text-red-400'
                        aria-hidden='true'
                     />
                  </div>
               )}
               {usedSearch
                  ? valid && fieldIsError && <CheckIcon />
                  : valid && <CheckIcon />}

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
                  className={`absolute ease-out duration-500 -top-5 ${
                     rightText || leftText
                        ? rightTextPadding || leftTextPadding
                        : 'pl-3'
                  }  block text-sm font-medium text-gray-700 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:-top-5 transition-all peer-focus:text-gray-600 peer-focus:text-sm`}>
                  {placeholder}
               </label>
               {rightText && (
                  <div
                     className={`absolute inset-y-0 left-0  pl-3
                      pt-0 flex items-center pointer-events-none`}>
                     <span className='text-gray-400 '>{rightText}</span>
                  </div>
               )}
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
