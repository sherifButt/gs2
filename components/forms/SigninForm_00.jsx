import React from 'react'
// Form Data
import { signin as _signin } from './fomrs'
// Components
import DefaultForm from './DefaultForm'
// GlobalState
import {
   hideSignin,
   showSignup,
   showRestorePassword,
} from '../../redux/features/modalSlicer'
import { signin } from '../../redux/features/authSlicer'
// fetch
import { useSigninUserMutation } from '../../redux/services/authApi'

const SigninForm_00 = () => {
   const [signinUser, { data, isLoading, isError, error }] =
      useSigninUserMutation()
   return (
      <DefaultForm
         form={_signin}
         hideThisForm={hideSignin}
         showNextForm={showSignup}
         showHelpForm={showRestorePassword}
         signin={signin}
         submitData={signinUser}
         data={data}
         isLoading={isLoading}
         isError={isError}
         error={error}
      />
   )
}

export default SigninForm_00