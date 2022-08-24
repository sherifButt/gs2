import React, { useEffect, useState } from 'react'
import ButtonPrimary from '../../components/buttons/ButtonPrimary'
import FieldCombobox from '../../components/forms/FieldCombobox'
import FieldFileupload from '../../components/forms/FieldFileupload'
import FieldLabel from '../../components/forms/FieldLabel'
import FieldText from '../../components/forms/FieldText'
import FieldTextarea from '../../components/forms/FieldTextarea'
import { useCreateCampaignMutation } from './campaignApiSlice'
import { useUploadFileMutation } from '../upload/uploadApiSlice'
import { useSelector, useDispatch } from 'react-redux'
import { selectCurrentUser } from '../user/userSlice'
import { useRouter } from 'next/router'
import { addNotification } from '../notificationSlice'

const CreateCampaignForm = () => {
   const user = useSelector(selectCurrentUser)
    const dispatch = useDispatch()
    const route = useRouter()
   const [
      createCampaign,
      {
         data: createCampaignData,
         isLoading: createCampaignIsLoading,
         error: createCampaignError,
      },
   ] = useCreateCampaignMutation()
   const [
      uploadFile,
      {
         data: uploadFileData,
         isLoading: uploadFileIsLoading,
         error: uploadFileError,
      },
   ] = useUploadFileMutation()

   const [campaignHeaderImageData, setCampaignHeaderImageData] = useState()
   const formInitialData = {
      id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
      name: '',
      createdBy: user?.id || '',
      description: '',
      target: null,
      currencyId: '9d6494c0-e364-43f0-b76c-52251df71133',
      private: true,
      status: 0,
      type: 1,
      owner: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
      campaignCharities: [
         {
            id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
            charityId: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
            donationSplit: 0,
         },
      ],
      defaultDonationSizes: [
         {
            id: '3fa85f64-5717-4562-b3fc-2c963f66afa6', 
            value: 0,
            name: 'string',
            description: 'string',
            campaignId: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
            charityId: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
         },
      ],
   }

   const createCampaignHandler = async e => { 
      e.preventDefault()

      const createCampaignResponse = await createCampaign(formData).unwrap()

       if ( !createCampaignResponse )
       {
           dispatch(
              addNotification({
                 isSuccess: false,
                 message: 'Failed!',
                 description: `Your campaign ${formData.name} creation has failed, please contact GiveStar Technical support!`,
              })
           )
           return
       }
      const imageDataObj = {
         file: campaignHeaderImageData,
         mediaType: 1,
         entityId: createCampaignResponse.data,
      }
      const uploadFileResponse = await uploadFile(imageDataObj).unwrap()

      if (!uploadFileResponse) return
      dispatch(
         addNotification({
            isSuccess: true,
            message: 'Success!',
            description:
               `Your campaign ${formData.name} has been created successfully!`,
         })
      )
      setTimeout(() => {route.push('/basecamp')}, 1000)
   }

   const uploadFileHandler = (entityId, fileData) => {}

   const [formData, setFormData] = useState(formInitialData)
   useEffect(() => {
      console.log('formData:', formData)
   }, [formData])
   useEffect(() => {
      setFormData({ ...formData, createdBy: user?.id })
   }, [user])

   return (
      <div className='flex flex-col gap-6 '>
         <FieldLabel
            text='Which charity would you like to support?'
            name=''
            forLabel='name'
         />
         <FieldCombobox
            name='campaignCharities'
            value={[]}
            description=''
            error=''
            valid=''
            title='The Charity Name.'
            placeholder='+ Add Charity Name'
            type='selectmultiple'
            required={false}
            inputHandler={e => {
               setFormData({
                  ...formData,
                  campaignCharities: e.target.selectedOptions,
               })
            }}
            disabled={false}
            hidden={false}
         />
         <FieldLabel
            text='Tell us about your campaign'
            name=''
            forLabel='name'
         />
         <FieldText
            name='name'
            value={formData.name}
            description=''
            error=''
            valid=''
            inputHandler={e => {
               setFormData({ ...formData, name: e.target.value })
            }}
            validationHandler={() => {}}
            title='The Campaign Name or Event Name.'
            placeholder='Campaign/event name'
            type='text'
            required={true}
         />
         <FieldLabel text='Create your Page' name='' forLabel='photo' />
         <FieldFileupload
            name='photo'
            value=''
            description=''
            campaignHeaderImageData={campaignHeaderImageData}
            setCampaignHeaderImageData={setCampaignHeaderImageData}
            inputHandler={e => {}}
            error=''
            valid=''
            title='Your page where you will launch your campaign'
            placeholder='Add a Photo'
            type='file'
            mediaType={1}
         />
         <FieldText
            name='target'
            value={formData.target}
            description=''
            error=''
            valid=''
            inputHandler={e => {
               setFormData({ ...formData, target: Number(e.target.value) })
            }}
            validationHandler={() => {}}
            title='Your page where you will launch your campaign'
            placeholder='Fundraising Target'
            type='number'
            required={true}
            min={100}
            step={50}
         />
         <FieldTextarea
            name='description'
            value={formData.description}
            description=''
            error=''
            valid=''
            inputHandler={e => {
               setFormData({ ...formData, description: e.target.value })
            }}
            validationHandler={() => {}}
            title='Your campaign description, this will help your supporters connect with your cause.'
            placeholder='Description ...'
            type='textarea'
            required={true}
            rows={6}
         />
         <ButtonPrimary
            actionHandler={createCampaignHandler}
            text='create campaign'
            isLoading={createCampaignIsLoading || uploadFileIsLoading}
         />
      </div>
   )
}

export default CreateCampaignForm
