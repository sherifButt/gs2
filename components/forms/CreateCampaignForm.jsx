import React from 'react'
// Form Data
import { createCampaign as _signin } from './fomrs'
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

const SigninForm_00 = ({href}) => {
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
         hideThisForm={hideSignin}
         showNextForm={showSignup}
         showHelpForm={showRestorePassword}
         signin={signin}
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