import { useRouter } from 'next/router'
// Helpers
import { AnimatePresence, motion } from 'framer-motion'
import validateInput from '../../helpers/validateInput'
// Icons
import { useEffect, useState } from 'react'

// Redux
import { useDispatch } from 'react-redux'
import { addNotification } from '../../redux/features/notificationSlicer'

// components
import ButtonPrimary from '../buttons/ButtonPrimary'
import Lottie from '../Lottie'

function Form({
   hideThisForm,
   showNextForm,
   showHelpForm,
   signin,
   submitData,
   form,
   data,
  isLoading,
   isSuccess,
   isError,
   error,
}) {
   // Global State
   const dispatch = useDispatch()

   // Local State
   const [values, setValues] = useState(form.fields)
  //  const [isSuccess, setIsSuccess] = useState(false)
  console.log( 'values', values )
  
   // router
  const router = useRouter()
  
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
   const submitHandler = async e => {
      e.preventDefault()

      // Global form  validation
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

         if (form.notification?.error?.isNotification)
            dispatch(
               addNotification({
                  isSuccess: false,
                  message: form.notification?.error?.message || 'Failed!',
                  description:
                     'All marked Fields are required! Please fill in required empty fields and try again.',
               })
            )
         return
      }

      // is there any error message
      const isErrorMessages = values.find(field => field.error != '')
      if (isErrorMessages) {
         if (form.notification?.error?.isNotification)
            dispatch(
               addNotification({
                  isSuccess: false,
                  message: form.notification?.error?.message || 'Failed!',
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

      const dataObject = {}
      values.map((field, i) => {
         dataObject = { ...dataObject, [field.name]: field.value }
      })

      await submitData(dataObject)
      console.log('Form Submitted successfully')
   }
   // manage Global state and notifications
   useEffect(() => {
      console.log('data', data)
     if ( !data && isSuccess )
     {
        if (form.notification?.success?.isNotification)
           dispatch(
              addNotification({
                 isSuccess: true,
                 status: data?.status,
                 message: form.notification?.success?.message || 'Success!',
                 description:
                    data?.message ||
                    data?.data ||
                    form.notification?.success?.description,
              })
           )
      }
      if (data?.accessToken || data) {
         localStorage.setItem(
            'login',
            JSON.stringify({ userLogin: true, token: data.accessToken })
         )
         if (form.notification?.success?.isNotification)
            dispatch(
               addNotification({
                  isSuccess: true,
                  status: data.status,
                  message: form.notification?.success?.message || 'Success!',
                  description:
                     data.message ||
                     data.data ||
                     form.notification?.success?.description,
               })
            )

        //  setIsSuccess(true)
         setValues(form.fields)
         dispatch(signin())
         if (form.confirmation?.delay || form.confirmation?.href)
            setTimeout(() => {
               dispatch(hideThisForm())
               if (form.confirmation?.href) router.push(form.confirmation?.href)
            }, form.confirmation?.delay)
      } else if (isError) {
         console.log('error', error)
         if (form.notification?.error?.isNotification)
            dispatch(
               addNotification({
                  isSuccess: false,
                  status: error.status,
                  message: form.notification?.error?.message || 'Failed!',
                  description: error.data?.error || error.error,
               })
            )
      }
   }, [data, isError])

   return (
      <AnimatePresence exitBeforeEnter>
         {!isSuccess || !form.confirmation?.isConfirmation ? (
            <motion.form
               animate={{ opacity: 1, y: 0 }}
               exit={{ opacity: 0, y: 30 }}
               transition={{ delay: 0.1 }}
               key='stuff'
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
               {form.fields?.map((field, i) => (
                  <field.component
                     {...field}
                     key={field.name}
                     inputHandler={inputHandler}
                     validationHandler={validationHandler}
                     value={values[i].value}
                  />
               ))}
               {/* Sign Up Button */}
               <ButtonPrimary
                  idle={form.button.idle}
                  action={form.button.action}
                  success={form.button.success}
                  error={form.button.error}
                  actionHandler={submitHandler}
                  isLoading={isLoading}
                  isSuccess={isSuccess}
               />

               {form?.helpForm?.isHelpForm && (
                  <a
                     href={form?.helpForm?.href || `#`}
                     onClick={() => {
                        dispatch(hideThisForm())
                        setTimeout(() => {
                           dispatch(showHelpForm())
                        }, 700)
                     }}
                     className='block text-center text-xs text-army-500 font-medium'>
                     {form?.helpForm?.title || `TROUBLE FILLING IN THIS FORM?`}
                  </a>
               )}

               {form?.nextForm?.isNextForm && (
                  <div className='flex flex-row gap-[0.81rem] justify-start items-center'>
                     <p className='block text-center text-xs text-black  font-medium'>
                        {form?.nextForm?.title}
                     </p>
                     <div className='flex flex-row gap-2.5 justify-start items-center'>
                        <button
                           className='block text-center text-[0.81rem] text-army-500  font-semibold'
                           onClick={e => {
                              e.preventDefault()
                              dispatch(hideThisForm())
                              setTimeout(() => {
                                 dispatch(showNextForm())
                              }, 700)
                           }}>
                           <p>{form?.nextForm?.cta || `Sign up now →`}</p>
                        </button>
                     </div>
                  </div>
               )}
            </motion.form>
         ) : (
            <motion.form
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               exit={{ opacity: 0, transition: { duration: 3 } }}
               transition={{ ease: 'easeOut' }}
               key='message'
               className={form?.confirmation?.formHeight || 'h-[335px]'}>
               <Lottie
                  className={`${form?.confirmation?.lottieSize?form?.confirmation?.lottieSize:'w-96 h-96'} mx-auto -mt-10`}
                  loop={false}
                  path={
                     form?.confirmation?.lottiePath ||
                     `104369-check-motion.json`
                  }
               />
               <p className={`text-lg text-center ${form?.confirmation?.messageMarginTop?form?.confirmation?.messageMarginTop:'-mt-24'}`}>
                  {form?.confirmation?.message}
               </p>
            </motion.form>
         )}
      </AnimatePresence>
   )
}

export default Form
