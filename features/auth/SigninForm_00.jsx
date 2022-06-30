import React from 'react'
// Form Data
import { signin as _signin } from '../../components/forms/fomrs'
// Components
import DefaultForm from '../../components/forms/DefaultForm'
// GlobalState
import {
   hideSignin,
   showSignup,
   showRestorePassword,
} from '../modalSlice'
import { setCredentials } from './authSlice'
// fetch
// import { useSigninUserMutation } from '../../app/api/authApi'
import { useSigninUserMutation } from './authApiSlice.js'

const SigninForm_00 = ({className,href}) => {
   const [signinUser, { data, isLoading,isSuccess, isError, error }] =
      useSigninUserMutation()
   return (
      <DefaultForm
         form={{
            ..._signin,
            confirmation: {
               ..._signin.confirmation,
               href: href ? href : _signin.confirmation.href,
            },
         }}
         className={className}
         hideThisForm={hideSignin}
         showNextForm={showSignup}
         showHelpForm={showRestorePassword}
         setCredentials={setCredentials}
         submitData={signinUser}
         data={data}
         isSuccess={isSuccess}
         isLoading={isLoading}
         isError={isError}
         error={error}
      />
   )
}

export default SigninForm_00