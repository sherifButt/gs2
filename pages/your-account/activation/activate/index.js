import React from 'react'
import Layout from '../../../../components/Layout/Layout5'
import RightSidebar from '../../../../components/right-sidebar/right-sidebar-2'
import LeftSidebar from '../../../../components/left-sidebar/left-sidebar-1'
import SigninForm from '../../../../components/forms/SigninForm'
import ButtonPrimary from '../../../../components/buttons/ButtonPrimary'
import { useDispatch, useSelector } from 'react-redux'
import { showSignin } from '../../../../redux/features/modalSlicer'
import { CheckCircleIcon } from '@heroicons/react/solid'

function Activation() {
   const dispatch = useDispatch()
   return (
      <div className='flex flex-col space-y-4 bg-white rounded-xl p-4'>
         

         
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
         <SigninForm />
      </div>
   )
}
Activation.layout = Layout
Activation.rightSideBar = RightSidebar
Activation.leftSideBar = LeftSidebar
export default Activation
