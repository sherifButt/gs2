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
   formData,
   donationAmount,
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

   

   const [_fieldData, setFieldData] = useState([
      {
         id: '9d6494c0-e364-43f0-b76c-52251df71133',
         name: `10 % contribution (£${(formData.amount * 0.1).toFixed(2)})`,
         value: formData.amount * 0.1,
      },
      {
         id: '9d6494c0-e364-43f0-b76c-52251df71133',
         name: `12.5 % contribution (£${(formData.amount * 0.125).toFixed(2)})`,
         value: formData.amount * 0.125,
      },
      {
         id: '9d6494c0-e364-43f0-b76c-52251df71133',
         name: `15 % contribution (£${(formData.amount * 0.15).toFixed(2)})`,
         value: formData.amount * 0.15,
      },
      {
         id: '9d6494c0-e364-43f0-b76c-52251df71133',
         name: `20 % contribution (£${(formData.amount * 0.2).toFixed(2)})`,
         value: formData.amount * 0.2,
      },
      {
         id: '9d6494c0-e364-43f0-b76c-52251df71133',
         name: 'Other',
         value: '1',
      },
   ] )
   
   const [ selectedFormData, setSelectedFormData ] = useState( _fieldData[ 0 ].value )

   useEffect( () => {
      

      // const e = { target: { value: selectedFormData } }
      
      // inputHandler(e)
      // console.log('selectedFormData', _fieldData)
   }, [donationAmount])

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
                  onChange={e => {
                     inputHandler(e)
                     setSelectedFormData(e)
                  }}
                  onBlur={validationHandler}>
                  <option
                     value={0} ss={1}>{`10 % contribution (£${(
                     formData.amount * 0.1
                  ).toFixed(2)})`}</option>
                  <option
                     value={1}>{`12.5 % contribution (£${(
                     formData.amount * 0.125
                  ).toFixed(2)})`}</option>
                  <option
                     value={2}>{`10 % contribution (£${(
                     formData.amount * 0.1
                  ).toFixed(2)})`}</option>
                  <option
                     value={3}>{`10 % contribution (£${(
                     formData.amount * 0.1
                  ).toFixed(2)})`}</option>
                  <option
                     value={4}>{`10 % contribution (£${(
                     formData.amount * 0.1
                  ).toFixed(2)})`}</option>
               </select>

               <label
                  htmlFor={name}
                  className={`absolute ease-out duration-500 -top-8 pl-3 block text-lg font-medium text-gray-700 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:-top-8 transition-all peer-focus:text-gray-600 peer-focus:text-lg`}>
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
