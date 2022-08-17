import React from 'react'
// Form Data
import { signup } from './fomrs'
// Components
import DefaultForm from './DefaultForm'
// GlobalState
import {
   showSignin,
   hideSignup,
   showRestorePassword,
} from '../../features/modalSlice'
import { signin } from '../../features/auth/authSlice'
// fetch
import { useSignupUserMutation } from '../../features/auth/authApiSlice'


const SignupForm_00 = ({className}) => {
   const [signupUser, { data, isLoading,isSuccess, isError, error }] =
      useSignupUserMutation()
   return (
      <DefaultForm
         form={ signup }
         className={className}
         hideThisForm={hideSignup}
         showNextForm={showSignin}
         showHelpForm={showRestorePassword}
         signin={signin}
         submitData={signupUser}
         data={data}
         isSuccess={isSuccess}
         isLoading={isLoading}
         isError={isError}
         error={error}
      />
   )
}

export default SignupForm_00