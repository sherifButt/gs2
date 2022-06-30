import React from 'react'
// Form Data
import { createCampaign as _createCampaign  } from './fomrs'
// Components
import DefaultForm from './DefaultForm'
// GlobalState
import {
   hideCreateCampaign,
   showSignup,
   showRestorePassword,
} from '../../features/modalSlice'
import { signin } from '../../features/auth/authSlice'
// fetch
import { useCreateCampaignMutation } from '../../features/auth/authApiSlice'


const CreateCampaignForm = ({className,href}) => {
   const [createCampaign, { data, isLoading, isSuccess, isError, error }] =
      useCreateCampaignMutation()
   return (
      <DefaultForm
         form={{
            ..._createCampaign,
            confirmation: {
               ..._createCampaign.confirmation,
               href: href ? href : _createCampaign.confirmation?.href,
            },
         }}
         className={className}
         hideThisForm={hideCreateCampaign}
         showNextForm={showSignup}
         showHelpForm={showRestorePassword}
         signin={signin}
         submitData={createCampaign}
         data={data}
         isSuccess={isSuccess}
         isLoading={isLoading}
         isError={isError}
         error={error}
      />
   )
}

export default CreateCampaignForm