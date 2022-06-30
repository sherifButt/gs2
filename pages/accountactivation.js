import React from 'react'
import Layout from '../components/Layout/Layout5'
import RightSidebar from '../components/right-sidebar/right-sidebar-2'
import LeftSidebar from '../components/left-sidebar/left-sidebar-1'
import SignupForm from '../components/forms/SignupForm'
import ButtonPrimary from '../components/buttons/ButtonPrimary'
import { useDispatch, useSelector } from 'react-redux'
import {showSignin} from '../features/modalSlice'

function Activation () {
   const dispatch = useDispatch()
   return (
      <div className='flex flex-col space-y-4'>
         <h1 className="text-2xl">Activation</h1>
         
         <p>Your account has been activated!</p>
         <p>Please use your email address and password to sign in</p>
         <ButtonPrimary text='sign in' actionHandler={()=>dispatch(showSignin())}/>
      </div>
   )
}
Activation.layout = Layout
Activation.rightSidebar = RightSidebar
Activation.leftSidebar = LeftSidebar
export default Activation
