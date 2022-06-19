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
} from '../../redux/features/modalSlicer'
import { signin } from '../../redux/features/authSlicer'
// fetch
import { useRestorePasswordMutation } from '../../redux/services/authApi'

const RestorePasswordForm_00 = () => {
   const [restorePassword, { data, isLoading, isError, error }] =
      useRestorePasswordMutation()
   return (
      <DefaultForm
         form={_restorePassword}
         hideThisForm={hideRestorePassword}
         showNextForm={showSignin}
         showHelpForm={hideSignin}
         signin={signin}
         submitData={restorePassword}
         data={data}
         isLoading={isLoading}
         isError={isError}
         error={error}
      />
   )
}

export default RestorePasswordForm_00