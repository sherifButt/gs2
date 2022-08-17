
import { useEffect, useState } from 'react'
import { signup as form } from './fomrs'

import validateInput from '../../helpers/validateInput'
import ButtonPrimary from '../buttons/ButtonPrimary'
// Icons


// Redux
import { useDispatch, useSelector } from 'react-redux'
import {
   toggleSignin,
   toggleSignup
} from '../../features/modalSlice'

import { addNotification } from '../../features/notificationSlice'
import { useSignupUserMutation } from '../../features/auth/authApiSlice'

const SignupForm = () => {
   // Global State
   const dispatch = useDispatch()
   const modal = useSelector(state => state.modal.signup)
   const [signupUser, { data, isLoading, isError, error }] =
      useSignupUserMutation()
   // Local State
   // const [show, setShow] = useState(true)
   const [values, setValues] = useState(form.fields)
   console.log('values', values)

   // Handlers (event listeners)
   const inputHandler = e => {
      const inputIdx = values.findIndex(input => input.name == e.target.name)
      const isCheckbox = e.target.type === 'checkbox'

      const _values = [...values]
      _values[inputIdx].value = isCheckbox ? e.target.checked : e.target.value

      setValues(_values)
   }

   // Handle Validation
   const validationHandler = e => {
      const inputIdx = values.findIndex(input => input.name == e.target.name)

      validateInput(e, inputIdx, values, setValues)

      // Splitting Full name into fistst name and second name
      if (e.target.name.toUpperCase() === 'fullname'.toUpperCase()) {
         const _values = [...values]

         const fullnameIdx = _values.findIndex(
            field => field.name.toUpperCase() === 'fullname'.toUpperCase()
         )
         const firstnameIdx = _values.findIndex(
            field => field.name.toUpperCase() === 'firstname'.toUpperCase()
         )
         const lastnameIdx = _values.findIndex(
            field => field.name.toUpperCase() === 'lastname'.toUpperCase()
         )

         const [firstname, lastname] = _values[fullnameIdx].value.split(' ')
         _values[firstnameIdx].value = firstname
         _values[lastnameIdx].value = lastname
         setValues(_values)
      }
   }

   // Sign up
   const signupHandler = async e => {
      e.preventDefault()

      // Must pass global form  validation
      // required fields validation
      const requiredAny = values.find(field => field.required == true)
      // is any required fields are empty
      const isEmptyRequiredFields = values.find(field => field.value == '')
   
      if (requiredAny && isEmptyRequiredFields) {
         const _values = [...values]
         _values.map((field, i) => {
            if (!_values[i].value && _values[i].required && !_values[i].error)
               _values[i].error = `${field.placeholder} is required!`
         })
         setValues(_values)
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

// is there any error message
      const isErrorMessages = values.find(field => field.error != '')
      if (isErrorMessages) {
         dispatch(
            addNotification({
               isSuccess: false,
               message: 'Signing up Failed!',
               description: (
                  <>
                     <p>Please correct your entries!</p>
                     <ol className='list-disc'>
                        {values.map(
                           (field, i) =>
                              field.error != '' && <li>{field.error}</li>
                        )}
                     </ol>
                  </>
               ),
            })
         )
         return
      }

      console.log('Form Submitted successfully')

      const dataObject = {}
      values.map((field, i) => {
         dataObject = { ...dataObject, [field.name]: field.value }
      })

      await signupUser(dataObject)
   }

   // manage Global state and notifications
   useEffect(() => {
      if (data) {
         console.log('data', data)
         dispatch(
            addNotification({
               isSuccess: true,
               status: data.status,
               message: 'Sign up Succeeded!',
               description: data.data,
            })
         )
      } else if (error) {
         // console.log('error', error)
         // console.log('data', data)
         // console.log('isError', isError)

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
      <form
         method='post'
         className='flex flex-col space-y-6 last:-mt-10'>
         {form?.title && (
            <h1 className='block text-2xl sm:text-3xl text-left  text-black sm:text-center font-medium'>
               {form.title}
            </h1>
         )}
         {form?.subtitle && (
            <h3 className='block text-l sm:text-l text-left  text-black sm:text-center font-medium'>
               {form.subtitle}
            </h3>
         )}
         <div className='flex flex-row gap-4 justify-between'></div>
         {form.fields.map((field, i) => (
            <field.component
               {...field}
               key={field.name}
               inputHandler={inputHandler}
               validationHandler={validationHandler}
               value={values[i].value}
            />
         ))}
         {/* Sign Up Button */}
         <ButtonPrimary text={form.button} actionHandler={signupHandler} />
         {/* <p className='block text-center text-xs text-army-500 font-medium'>
                           TROUBLE SIGNING UP?
                        </p> */}
         <div className='flex flex-row gap-[0.81rem] justify-start items-center'>
            <p className='block text-center text-xs text-black  font-medium'>
               Don&apos;t you have an account?
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
      </form>
   )
}

export default SignupForm
