import { ExclamationCircleIcon, CheckCircleIcon } from '@heroicons/react/solid'
import React, { useEffect, useState } from 'react'

const FieldText = ({
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
   className,
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
   } = data()

   const [_fieldData, setFieldData] = useState ([
      {
         id: '9d6494c0-e364-43f0-b76c-52251df71133',
         name: 'British Pound',
         displaySymbol: '£',
         shortCode: 'GBP',
      },
   ])

   useEffect(() => {
      if (fieldData)
         inputHandler({ target: { type, value: fieldData[0]?.id, name } })
   }, [fieldData])
   return (
      <>
         {!hidden && (
            <div className={`relative ${className}`}>
               <select
                  type='text'
                  name={name}
                  id={name}
                  title={title}
                  required
                  className={`peer mt-1 relative shadow-sm block w-full py-3 pl-3 pr-10 placeholder-transparent  text-gray-900 pl-3 ${
                     error &&
                     'focus:ring-red-500 focus:border-red-500 border-red-300'
                  } focus:outline-none border focus:ring-gray-300 focus:border-gray-300 border-gray-200 sm:text-md rounded-xl transition-all ease-out duration-300`}
                  placeholder={placeholder}
                  aria-invalid='true'
                  aria-describedby={`${name}-error`}
                  value={value}
                  onClick={inputHandler}
                  onBlur={validationHandler}>
                  {fieldData?.map((item, idx) => (
                     <option key={item.shortCode} value={item.id}>
                        {item.shortCode}
                     </option>
                  ))}
               </select>

               <label
                  htmlFor={name}
                  className={`absolute ease-out duration-500 -top-5 pl-3 block text-sm font-medium text-gray-700 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:-top-5 transition-all peer-focus:text-gray-600 peer-focus:text-sm`}>
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
