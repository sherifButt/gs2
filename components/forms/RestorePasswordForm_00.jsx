import React from 'react'
// Form Data
import { restorePassword as _restorePassword } from './fomrs'
// Components
import DefaultForm from './DefaultForm'
// GlobalState
import {
   hideSignin,
   showSignin,
   hideRestorePassword,
} from '../../features/modalSlice'
import { signin } from '../../features/auth/authSlice'
// fetch
import { useRestorePasswordMutation } from '../../features/auth/authApiSlice'

const RestorePasswordForm_00 = ({ className}) => {
   const [restorePassword, { data, isLoading,isSuccess, isError, error }] =
      useRestorePasswordMutation()
   return (
      <DefaultForm
         form={ _restorePassword }
         className={className}
         hideThisForm={hideRestorePassword}
         showNextForm={showSignin}
         showHelpForm={hideSignin}
         signin={signin}
         submitData={restorePassword}
         data={data}
         isSuccess={isSuccess}
         isLoading={isLoading}
         isError={isError}
         error={error}
      />
   )
}

export default RestorePasswordForm_00