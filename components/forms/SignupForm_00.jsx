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
} from '../../redux/features/modalSlicer'
import { signin } from '../../redux/features/authSlicer'
// fetch
import { useSignupUserMutation } from '../../redux/services/authApi'

const SignupForm_00 = () => {
   const [signupUser, { data, isLoading, isError, error }] =
      useSignupUserMutation()
   return (
      <DefaultForm
         form={signup}
         hideThisForm={hideSignup}
         showNextForm={showSignin}
         showHelpForm={showRestorePassword}
         signin={signin}
         submitData={signupUser}
         data={data}
         isLoading={isLoading}
         isError={isError}
         error={error}
      />
   )
}

export default SignupForm_00