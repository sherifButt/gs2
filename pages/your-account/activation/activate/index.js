import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/solid'
// Redux
import { useDispatch } from 'react-redux'
import { useActivateUserMutation } from '../../../../redux/services/authApi'
// Components
import SigninForm from '../../../../components/forms/SigninForm'
import Layout from '../../../../components/Layout/Layout5'
import LeftSidebar from '../../../../components/left-sidebar/left-sidebar-1'
import RightSidebar from '../../../../components/right-sidebar/right-sidebar-2'

const SuccessActivationAlert = () => {
   return (
      <div className='rounded-md bg-green-50 p-4'>
         <div className='flex'>
            <div className='flex-shrink-0'>
               <CheckCircleIcon
                  className='h-5 w-5 text-green-400'
                  aria-hidden='true'
               />
            </div>
            <div className='ml-3'>
               <h3 className='text-sm font-medium text-green-800'>
                  Your account has been activated!
               </h3>
               <div className='mt-2 text-sm text-green-700'>
                  <p>
                     Please use your email address and password to sign in below
                  </p>
               </div>
            </div>
         </div>
      </div>
   )
}
const FaillActivationAlert = ({ message }) => {
   return (
      <div className='rounded-md bg-red-50 p-4'>
         <div className='flex'>
            <div className='flex-shrink-0'>
               <XCircleIcon
                  className='h-5 w-5 text-red-400'
                  aria-hidden='true'
               />
            </div>
            <div className='ml-3'>
               <h3 className='text-sm font-medium text-red-800'>
                  Your account <u>Failed</u> to Activate!
               </h3>
               <div className='mt-2 text-sm text-red-700'>
                  <p>
                     <b>{message}</b>, go to your email and copy the
                     verification link then paste it in your browser. and click
                     enter.
                  </p>
               </div>
            </div>
         </div>
      </div>
   )
}

function Activation() {
   // const []
   const dispatch = useDispatch()
   const [activateUser, { data, isSuccess, isLoading, isError, error }] =
      useActivateUserMutation()
   const route = useRouter()
   const { userId, activationCode } = route.query
   
   
   useEffect(() => {
      const activationData = { userId, activationCode }
      console.log('activationData', activationData)
      activateUser(activationData)
   }, [userId, activationCode])

   useEffect(() => {
      
   }, [data, isError, isSuccess, error])

   return (
      <div className='flex flex-col space-y-4  p-4'>
         {isLoading ? (
            'Activating...'
         ) : isSuccess ? (
            <SuccessActivationAlert />
         ) : isLoading ? (
            'Activating...'
         ) : (
            isError && <FaillActivationAlert message={error?.data?.message} />
         )}

         <div className='bg-white rounded-xl p-4 pt-12 mt-20'>
            <SigninForm className='' />
         </div>
      </div>
   )
}
Activation.layout = Layout
Activation.rightSideBar = RightSidebar
Activation.leftSideBar = LeftSidebar
export default Activation
