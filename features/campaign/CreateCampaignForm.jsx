import React from 'react'
// Form Data
import { createCampaign as _createCampaign  } from '../../components/forms/fomrs'
// Components
import DefaultForm from '../../components/forms/DefaultForm'
// GlobalState
import {
   hideCreateCampaign,
   showSignup,
   showRestorePassword,
} from '../modalSlice'
import { signin } from '../auth/authSlice'
// fetch
import { useCreateCampaignMutation } from './campaignApiSlice'


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