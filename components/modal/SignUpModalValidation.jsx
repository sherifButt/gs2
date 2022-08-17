import { Dialog, Transition } from '@headlessui/react'
// Icons
import {
   XIcon,
   ExclamationCircleIcon,
   CheckCircleIcon,
} from '@heroicons/react/solid'
import Link from 'next/link'
import { Fragment, useEffect, useState } from 'react'
// Redux
import { useDispatch, useSelector } from 'react-redux'
import {
   hideSignup,
   toggleSignin,
   toggleSignup,
} from '../../features/modalSlice'
import { addNotification } from '../../features/notificationSlice'
import { useSignupUserMutation } from '../../features/auth/authApiSlice'
import BouncingstarIcon from '../icons/BouncingstarIcon'

const formInitialState = {
   FirstName: {
      value: '',
      error: '',
      valid: '',
      type: 'text',
      required: true,
   },
   LastName: {
      value: '',
      error: '',
      valid: '',
      type: 'text',
      required: true,
   },
   Email: {
      value: '',
      error: '',
      valid: '',
      type: 'email',
      required: true,
   },
   Password: {
      value: '',
      error: '',
      valid: '',
      type: 'password',
      required: true,
   },
   ConfirmPassword: {
      value: '',
      error: '',
      valid: '',
      type: 'password',
      required: true,
   },
   SignupRequest: {
      value: '',
      error: '',
      valid: '',
      type: 'checkbox',
      required: false,
   },
}

export default function SignUpModal() {
   // Global State
   const dispatch = useDispatch()
   const modal = useSelector(state => state.modal.signup)
   const [
      signupUser,
      { data, isLoading, isError, error },
   ] = useSignupUserMutation()

   // const [show, setShow] = useState(true)
   const [values, setValues] = useState(formInitialState)
   
   // Handlers (event listeners)
   const inputHandler = e => {
      const isCheckbox = e.target.type === 'checkbox'
      setValues({
         ...values,
         [e.target.name]: {
            ...values[e.target.name],
            value: isCheckbox ? e.target.checked : e.target.value,
         },
      })
   }

   const validationHandler = e => {
      // 1. if field required & empty
      if (values[e.target.name].required && !e.target.value) {
         setValues({
            ...values,
            [e.target.name]: {
               ...values[e.target.name],
               error: `Required!`,
               valid: ``,
            },
         })
         return
      }
      // 2. if field is required & full
      if (values[e.target.name].required && e.target.value) {
         setValues({
            ...values,
            [e.target.name]: {
               ...values[e.target.name],
               error: ``,
            },
         })
      }
      // 3. if field is an email.
      if (e.target.type == 'email') {
         if (
            !values[e.target.name].value.match(
               /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
            )
         ) {
            setValues({
               ...values,
               [e.target.name]: {
                  ...values[e.target.name],
                  error: `Your ${e.target.name} must be a valid email!`,
                  valid: ``,
               },
            })
         }
         if (
            values[e.target.name].value.match(
               /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
            )
         ) {
            setValues({
               ...values,
               [e.target.name]: {
                  ...values[e.target.name],
                  error: ``,
                  valid: `your ${e.target.name} is valid`,
               },
            })
            return
         }
      }
      // 4. if field is a text.
      if (e.target.type == 'text') {
         if (!values[e.target.name].value.match(/^[A-Za-z0-9]{3,16}$/)) {
            setValues({
               ...values,
               [e.target.name]: {
                  ...values[e.target.name],
                  error: `${e.target.name} should be 3-16 characters and shouldn't include any special character!`,
                  valid: ``,
               },
            })
            return
         }
         if (values[e.target.name].value.match(/^[A-Za-z0-9]{3,16}$/)) {
            setValues({
               ...values,
               [e.target.name]: {
                  ...values[e.target.name],
                  error: ``,
                  valid: `your ${e.target.name} is valid`,
               },
            })
            return
         }
      }
      // 5. if field is a password.
      if (e.target.type == 'password') {
         if (
            !values[e.target.name].value.match(
               /^((?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])|(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[^a-zA-Z0-9])|(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[^a-zA-Z0-9])|(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^a-zA-Z0-9])).{8,}$/
            )
         ) {
            setValues({
               ...values,
               [e.target.name]: {
                  ...values[e.target.name],
                  error: `${e.target.name} must be at least 8 characters and contain at 3 of 4 of the following: upper case (A-Z), lower case (a-z), number (0-9) and special character (e.g. !@#$%^&*)`,
                  valid: ``,
               },
            })
         }
         if (
            values[e.target.name].value.match(
               /^((?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])|(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[^a-zA-Z0-9])|(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[^a-zA-Z0-9])|(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^a-zA-Z0-9])).{8,}$/
            )
         ) {
            setValues({
               ...values,
               [e.target.name]: {
                  ...values[e.target.name],
                  error: ``,
                  valid: `your ${e.target.name} is valid`,
               },
            })
         }
      }
      // 6. if password matches
      if (e.target.name == 'ConfirmPassword') {
         if (e.target.value != values.Password.value) {
            setValues({
               ...values,
               [e.target.name]: {
                  ...values[e.target.name],
                  error: `${e.target.name} doesn't match Password!`,
                  valid: ``,
               },
            })
         }
         if (e.target.value == values.Password.value) {
            setValues({
               ...values,
               [e.target.name]: {
                  ...values[e.target.name],
                  error: ``,
                  valid: `your ${e.target.name} is valid`,
               },
            })
         }
      }
      // 7. if checkbox required
      console.log('Validation', values)
   }

   const toggleFormHandler = e => {
      dispatch(toggleSignup())
      setValues(formInitialState)
   }

   const signUpHandler = async e => {
      e.preventDefault()
      console.log('values-1', values)

      // required fields validation
      let requiredAny = false
      for (const [key, value] of Object.entries(values)) {
         if (value.required == true) requiredAny = true
      }

      // if any required fields are empty
      let isEmptyRequiredFields = false
      for (const key in values) {
         if (values[key].required == true && values[key].value == '')
            isEmptyRequiredFields = true
      }

      // if there any error messages
      let isErrorMessages = false
      for (const key in values) {
         if (values[key].required == true && values[key].error != '')
            isErrorMessages = true
      }

      if (requiredAny && isEmptyRequiredFields) {
         const _values = {}
         for (const [key, value] of Object.entries(values)) {
            
            if (!value.value && value.required) {
               _values = {
                  ..._values,
                  [key]: { ...values[key], error: `Required!` },
               }
            } else {
               _values = {
                  ..._values,
                  [key]: { ...values[key], error: '' },
               }
            }
            // value.error = `${key} is required!`
         }
         setValues(_values)
         console.log('values-2', values)
         dispatch(
            addNotification({
               isSuccess: false,
               message: 'Signing up Failed!',
               description:
                  'All marked Fields are required! Please fill in required empty fields and try again',
            })
         )
         return
      }
      if (isErrorMessages) {
         dispatch(
            addNotification({
               isSuccess: false,
               message: 'Signing up Failed!',
               description: 'Please fix worng fields',
            })
         )
         return
      }
      const userInfo = {}
      for (const key in values) {
         userInfo = { ...userInfo, [key]: values[key].value }
      }
      console.log('values-3', userInfo)

      await signupUser(userInfo)
   }

   function flattenObject(ob) {
      var toReturn = {}

      for (var i in ob) {
         if (!ob.hasOwnProperty(i)) continue

         if (typeof ob[i] == 'object' && ob[i] !== null) {
            var flatObject = flattenObject(ob[i])
            for (var x in flatObject) {
               if (!flatObject.hasOwnProperty(x)) continue

               toReturn[i + '.' + x] = flatObject[x]
            }
         } else {
            toReturn[i] = ob[i]
         }
      }
      return toReturn
   }

   // Print values state when changed
   useEffect(() => {
      console.log(values)
   }, [values])

   // manage Global state and notifications
   useEffect(() => {
      if (data) {
         console.log('data', data)
         dispatch(
            addNotification({
               isSuccess: true,
               status: data.status,
               message: 'Sign up Succeeded!',
               description: data.message,
            })
         )
      } else if (error) {
         console.log('error', error)
         console.log('data', data)
         console.log('isError', isError)

         dispatch(
            addNotification({
               isSuccess: false,
               status: error.status,
               message: 'Sign up Failed!',
               description: error.data?.error || error.error,
            })
         )
      }
   }, [data, isError])

   return (
      <Transition.Root show={modal.show} as={Fragment}>
         <Dialog
            as='div'
            className='relative z-10 '
            onClose={() => {
               /*dispatch(hideSignup())*/
            }}>
            <Transition.Child
               as={Fragment}
               enter='ease-out duration-300'
               enterFrom='opacity-0'
               enterTo='opacity-100'
               leave='ease-in duration-200'
               leaveFrom='opacity-100'
               leaveTo='opacity-0'>
               <div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
            </Transition.Child>

            <div className='fixed z-30 inset-0 overflow-y-auto'>
               <form
                  method='post'
                  className='flex items-end sm:items-center justify-center min-h-full  text-center'>
                  <Transition.Child
                     as={Fragment}
                     enter='ease-out duration-500'
                     enterFrom='opacity-100 sm:opacity-0 translate-y-[500px] sm:translate-y-0 sm:scale-95'
                     enterTo='opacity-100 translate-y-0 sm:scale-100'
                     leave='ease-in duration-300'
                     leaveFrom='opacity-100 translate-y-0 sm:scale-100'
                     leaveTo='opacity-100 sm:opacity-0 translate-y-full sm:translate-y-0 sm:scale-95'>
                     <Dialog.Panel className='flex flex-col gap-7 justify-center w-full  relative bg-neutral-100 rounded-t-2xl  sm:rounded-xl px-6 pt-5 pb-4 text-left overflow-none shadow-xl transform transition-all sm:my-8 sm:max-w-md sm:w-full sm:p-10'>
                        <BouncingstarIcon className='absolute -top-20 sm:-top-6  sm:left-14 0scale-x-[-1] rotate-4 ' />
                        <div className=' absolute top-0 right-3 pt-4 pr-4'>
                           <button
                              type='button'
                              className=' rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                              onClick={toggleFormHandler}>
                              <span className='sr-only'>Close</span>
                              <XIcon className='h-5 w-5' aria-hidden='true' />
                           </button>
                        </div>
                        <Dialog.Title className='block text-2xl sm:text-3xl text-left  text-black sm:text-center font-medium'>
                           Sign Up to GiveStar
                        </Dialog.Title>
                        <div className='flex flex-row gap-4 justify-between'>
                           <div className='max-h-4'>
                              <div className='relative'>
                                 <input
                                    type='text'
                                    name='FirstName'
                                    id='FirstName'
                                    required
                                    className={` mt-1 relative  shadow-sm peer block w-full py-3 pl-3 pr-10 placeholder-transparent border-red-300 text-gray-900 ${
                                       values.FirstName?.error && 'border'
                                    } focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-md rounded-xl transition-all ease-out duration-300`}
                                    placeholder='First Name'
                                    aria-invalid='true'
                                    aria-describedby='FirstName-error'
                                    value={values.FirstName?.value}
                                    onChange={inputHandler}
                                    onBlur={validationHandler}
                                 />
                                 {values.FirstName?.error && (
                                    <div className='absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none '>
                                       <ExclamationCircleIcon
                                          className='h-5 w-5 text-red-400'
                                          aria-hidden='true'
                                       />
                                    </div>
                                 )}
                                 {values.FirstName.valid && (
                                    <div className='absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none '>
                                       <CheckCircleIcon
                                          className='h-5 w-5 text-army-400'
                                          aria-hidden='true'
                                       />
                                    </div>
                                 )}

                                 {values.FirstName?.error && (
                                    <div className='peer-hover:z-20 hover:z-20 absolute top-[55px] border-dashed  border-red-200  z-10  border-t-solid rounded-b-lg p-1 w-full   bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-60'>
                                       <p
                                          className='leading-4 -mt-1  ml-1 text-sm text-red-400'
                                          id='FirstName-error'>
                                          {values.FirstName.error}
                                       </p>
                                    </div>
                                 )}
                                 <label
                                    htmlFor='FirstName'
                                    className='absolute ease-out duration-500 -top-5 left-3 block text-sm font-medium text-gray-700 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:-top-5 transition-all peer-focus:text-gray-600 peer-focus:text-sm'>
                                    First Name
                                 </label>
                              </div>
                           </div>
                           <div>
                              <div className='relative'>
                                 <input
                                    type='text'
                                    name='LastName'
                                    id='LastName'
                                    required
                                    className={`mt-1 relative  shadow-sm peer block w-full py-3 pl-3 pr-10 placeholder-transparent border-red-300 text-gray-900 ${
                                       values.LastName?.error && 'border'
                                    } focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-md rounded-xl transition-all ease-out duration-300`}
                                    placeholder='Last Name'
                                    aria-invalid='true'
                                    aria-describedby='LastName-error'
                                    value={values.LastName?.value}
                                    onChange={inputHandler}
                                    onBlur={validationHandler}
                                 />
                                 {values.LastName?.error && (
                                    <div className='absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none '>
                                       <ExclamationCircleIcon
                                          className='h-5 w-5 text-red-400'
                                          aria-hidden='true'
                                       />
                                    </div>
                                 )}
                                 {values.LastName.valid && (
                                    <div className='absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none '>
                                       <CheckCircleIcon
                                          className='h-5 w-5 text-army-400'
                                          aria-hidden='true'
                                       />
                                    </div>
                                 )}
                                 {values.LastName?.error && (
                                    <div className='peer-hover:z-20 hover:z-20 absolute top-[55px] border-dashed  border-red-200  z-10  rounded-b-lg p-1 w-full   bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-60'>
                                       <p
                                          className='leading-4 -mt-1  ml-1 text-sm text-red-400'
                                          id='LastName-error'>
                                          {values.LastName.error}
                                       </p>
                                    </div>
                                 )}
                                 <label
                                    htmlFor='LastName'
                                    className='absolute ease-out duration-500 -top-5 left-3 block text-sm font-medium text-gray-700 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:-top-5 transition-all peer-focus:text-gray-600 peer-focus:text-sm'>
                                    Last Name
                                 </label>
                              </div>
                           </div>
                        </div>
                        <div>
                           <div className='relative'>
                              <input
                                 type='email'
                                 name='Email'
                                 id='Email'
                                 required
                                 className={`mt-1 relative  shadow-sm peer block w-full py-3 pl-3 pr-10 placeholder-transparent border-red-300 text-gray-900 ${
                                    values.Email?.error && 'border'
                                 } focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-md rounded-xl transition-all ease-out duration-300`}
                                 placeholder='Last Name'
                                 aria-invalid='true'
                                 aria-describedby='Email-error'
                                 value={values.Email?.value}
                                 onChange={inputHandler}
                                 onBlur={validationHandler}
                              />
                              {values.Email?.error && (
                                 <div className='absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none '>
                                    <ExclamationCircleIcon
                                       className='h-5 w-5 text-red-400'
                                       aria-hidden='true'
                                    />
                                 </div>
                              )}
                              {values.Email.valid && (
                                 <div className='absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none '>
                                    <CheckCircleIcon
                                       className='h-5 w-5 text-army-400'
                                       aria-hidden='true'
                                    />
                                 </div>
                              )}
                              {values.Email?.error && (
                                 <div className='peer-hover:z-20 hover:z-20 absolute top-[55px] border-dashed  border-red-200   z-10  rounded-b-lg p-1 w-full   bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-60'>
                                    <p
                                       className='leading-4 -mt-1  ml-1 text-sm text-red-400'
                                       id='Email-error'>
                                       {values.Email.error}
                                    </p>
                                 </div>
                              )}
                              <label
                                 htmlFor='Email'
                                 className='absolute ease-out duration-500 -top-5 left-3 block text-sm font-medium text-gray-700 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:-top-5 transition-all peer-focus:text-gray-600 peer-focus:text-sm'>
                                 E-mail
                              </label>
                           </div>
                        </div>
                        <div className='relative'>
                           <input
                              type='Password'
                              name='Password'
                              id='Password'
                              required
                              className={`mt-1 relative  shadow-sm peer block w-full py-3 pl-3 pr-10 placeholder-transparent border-red-300 text-gray-900 ${
                                 values.Password?.error && 'border'
                              } focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-md rounded-xl transition-all ease-out duration-300`}
                              placeholder='Last Name'
                              aria-invalid='true'
                              aria-describedby='Password-error'
                              value={values.Password?.value}
                              onChange={inputHandler}
                              onBlur={validationHandler}
                           />
                           {values.Password?.error && (
                              <div className='absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none '>
                                 <ExclamationCircleIcon
                                    className='h-5 w-5 text-red-400'
                                    aria-hidden='true'
                                 />
                              </div>
                           )}
                           {values.Password.valid && (
                              <div className='absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none '>
                                 <CheckCircleIcon
                                    className='h-5 w-5 text-army-400'
                                    aria-hidden='true'
                                 />
                              </div>
                           )}
                           {values.Password?.error && (
                              <div className='peer-hover:z-20 hover:z-20 absolute top-[55px] border-dashed  border-red-200  z-10  rounded-b-lg p-1 w-full   bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-60'>
                                 <p
                                    className='leading-4 -mt-1  ml-1 text-sm text-red-400'
                                    id='Password-error'>
                                    {values.Password.error}
                                 </p>
                              </div>
                           )}
                           <label
                              htmlFor='Password'
                              className='absolute ease-out duration-500 -top-5 left-3 block text-sm font-medium text-gray-700 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:-top-5 transition-all peer-focus:text-gray-600 peer-focus:text-sm'>
                              Password
                           </label>
                        </div>
                        <div className='relative'>
                           <input
                              type='Password'
                              name='ConfirmPassword'
                              id='ConfirmPassword'
                              required
                              className={`mt-1 relative  shadow-sm peer block w-full py-3 pl-3 pr-10 placeholder-transparent border-red-300 text-gray-900 ${
                                 values.ConfirmPassword?.error && 'border'
                              } focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-md rounded-xl transition-all ease-out duration-300`}
                              placeholder='Last Name'
                              aria-invalid='true'
                              aria-describedby='ConfirmPassword-error'
                              value={values.ConfirmPassword?.value}
                              onChange={inputHandler}
                              onBlur={validationHandler}
                           />
                           {values.ConfirmPassword?.error && (
                              <div className='absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none '>
                                 <ExclamationCircleIcon
                                    className='h-5 w-5 text-red-400'
                                    aria-hidden='true'
                                 />
                              </div>
                           )}
                           {values.ConfirmPassword?.error && (
                              <div className='peer-hover:z-20 hover:z-20 absolute top-[55px] border-dashed  border-red-200  z-10  rounded-b-lg p-1 w-full   bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-60'>
                                 <p
                                    className='leading-4 -mt-1  ml-1 text-sm text-red-400'
                                    id='ConfirmPassword-error'>
                                    {values.ConfirmPassword.error}
                                 </p>
                              </div>
                           )}
                           {values.ConfirmPassword.valid && (
                              <div className='absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none '>
                                 <CheckCircleIcon
                                    className='h-5 w-5 text-army-400'
                                    aria-hidden='true'
                                 />
                              </div>
                           )}
                           <label
                              htmlFor='ConfirmPassword'
                              className='absolute ease-out duration-500 -top-5 left-3 block text-sm font-medium text-gray-700 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:-top-5 transition-all peer-focus:text-gray-600 peer-focus:text-sm'>
                              Confirm Password
                           </label>
                        </div>
                        <div>
                           <div className='flex  items-center justify-between relative'>
                              <input
                                 id='SignupRequest'
                                 name='SignupRequest'
                                 type='checkbox'
                                 className=' h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded'
                                 checked={values.SignupRequest?.value}
                                 onChange={inputHandler}
                                 onBlur={validationHandler}
                              />
                              <label
                                 htmlFor='SignupRequest'
                                 className='ml-2 block text-sm text-gray-900'>
                                 I agree to{' '}
                                 <span className='text-army-500 '>
                                    <Link href='#' passHref>
                                       <a>GiveStar Terms of Use</a>
                                    </Link>
                                 </span>
                              </label>
                           </div>
                           {values.SignupRequest?.error && (
                              <div className='mt-2'>
                                 <p
                                    className='leading-4 -mt-1  ml-1 text-sm text-red-400'
                                    id='ConfirmPassword-error'>
                                    {values.SignupRequest.error}
                                 </p>
                              </div>
                           )}
                        </div>
                              {/* Sign Up Button */}
                        <button
                           disabled={isLoading}
                           onClick={signUpHandler}
                           className={`flex flex-col justify-center items-center w-full py-4 ${
                              isLoading
                                 ? 'bg-yellow-500 shadow-none'
                                 : 'bg-yellow-400'
                           } rounded-xl hover:scale-105 ease-in-out duration-300 hover:shadow-md hover:shadow-yellow-400/50 active:scale-100 active:shadow-none`}>
                           <p className='block w-[3.90rem] text-center text-black  font-semibold'>
                              {isLoading ? 'Loading...' : 'SIGN UP'}
                           </p>
                        </button>
                        {/* <p className='block text-center text-xs text-army-500  font-medium'>
                           TROUBLE SIGNING UP?
                        </p> */}
                        <div className='flex flex-row gap-[0.81rem] justify-start items-center'>
                           <p className='block text-center text-xs text-black  font-medium'>
                              Don you have an account?
                           </p>
                           <div className='flex flex-row gap-2.5 justify-start items-center'>
                              <button
                                 className='block text-center text-[0.81rem] text-army-500  font-semibold'
                                 onClick={e => {
                                    e.preventDefault()
                                    dispatch(toggleSignup())
                                    setTimeout(() => {
                                       dispatch(toggleSignin())
                                    }, 700)
                                 }}>
                                 <p>Sign in now →</p>
                              </button>
                              <div></div>
                           </div>
                        </div>
                     </Dialog.Panel>
                  </Transition.Child>
               </form>
            </div>
         </Dialog>
      </Transition.Root>
   )
}
