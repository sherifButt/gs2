 // Field Components
import FieldText from './FieldText'
import FieldCheckbox from './FieldCheckbox'
import FieldLabel from './FieldLabel'
import FieldTextarea from './FieldTextarea'
import FieldFileupload from './FieldFileupload'
import FieldCurrency from './FieldCurrency'
import FieldCombobox from './FieldCombobox'
import FieldSelect from './FieldSelect'
import FieldMultiSelect from './FieldMultiselect'
import FieldDonationSize from './FieldDonationSize'
// data queries
import {useLoadCurrencyListQuery} from '../../features/currency/currencyApiSlice'
import { useGetByQuickCodeQuery } from '../../features/campaign/campaignApiSlice'

export const signin = {
   title: 'Sign in to GiveStar',
   subtitle: '',
   button: {
      icon: '',
      idle: 'Sign in',
      action: 'signing...',
      success: 'Signed in!',
      error: 'Try signing in again!',
   },

   method: 'post',
   nextForm: {
      isNextForm: true,
      title: 'Do not you have an account?',
      cta: 'Sign up now →',
      action: '',
      href: '#',
   },
   previousForm: {
      title: '',
   },
   helpForm: {
      isHelpForm: true,
      title: 'TROUBLE SIGNING IN?',
      action: '',
      href: '#',
   },
   confirmation: {
      isConfirmation: true,
      message: "Let's Do Some Good!",
      messageMarginTop: '',
      description: '',
      href: '/basecamp',
      delay: '2400',
      lottiePath: '',
      lottieSize: '',
      formHeight: 'h-[335px]',
   },
   notification: {
      success: {
         isNotification: false,
         isSuccess: true,
         message: 'Success!',
         description: 'Your are Logged in!',
         href: '',
         delay: '',
      },
      error: {
         isNotification: true,
         isSuccess: false,
         message: 'Failed!',
         description: '',
         href: '',
         delay: '',
      },
   },
   fields: [
      {
         name: 'email',
         value: '',
         description: '',
         error: '',
         valid: '',
         title: '',
         placeholder: 'Email',
         type: 'email',
         required: true,
         component: FieldText,
         disabled: false,
         hidden: false,
      },
      {
         name: 'password',
         value: '',
         description: '',
         error: '',
         valid: '',
         title: '',
         placeholder: 'Password',
         type: 'password',
         required: true,
         component: FieldText,
         disabled: false,
         hidden: false,
      },
   ],
}

export const signup = {
   title: 'Sign up to GiveStar',
   subtitle: '',
   button: {
      icon: '',
      idle: 'Sign up',
      action: 'signing...',
      success: 'Signed up!',
      error: 'Tray Signing up again!',
   },

   method: 'post',
   nextForm: {
      isNextForm: true,
      title: 'Do you have an account?',
      cta: 'Sign in now →',
      action: '',
      href: '#',
   },
   previousForm: {
      title: '',
   },
   helpForm: {
      isHelpForm: false,
      title: 'TROUBLE SIGNING UP?',
      action: '',
      href: '#',
   },
   confirmation: {
      isConfirmation: true,

      message: (
         <div>
            <h1 className='text-xl font-bold'>Welcome to GiveStar!</h1>

            <p>
               We are excited to have you get started. First, you need to
               confirm your account. Just go to your email and click the
               activation link.
            </p>
            <p>The GiveStar Team</p>
         </div>
      ),
      messageMarginTop: '-mt-4',
      description: '',
      href: '',
      delay: '3700',
      lottiePath: 'email-sent.json',
      lottieSize: 'w-72 h-72',

      formHeight: 'h-[500px]',
   },
   notification: {
      success: {
         isNotification: true,
         isSuccess: true,
         message: 'Success!',
         description: 'account been created!',
         href: '',
         delay: '',
      },
      error: {
         isNotification: true,
         isSuccess: false,
         message: 'Failed!',
         description: '',
         href: '',
         delay: '',
      },
   },
   fields: [
      {
         name: 'FullName',
         value: '',
         description: '',
         error: '',
         valid: '',
         title: '',
         placeholder: 'Full Name',
         type: 'text',
         required: true,
         component: FieldText,
         disabled: false,
         hidden: false,
      },

      {
         name: 'FirstName',
         value: '',
         description: '',
         error: '',
         valid: '',
         title: '',
         placeholder: 'First Name',
         type: 'text',
         required: false,
         component: FieldText,
         disabled: false,
         hidden: true,
      },
      {
         name: 'LastName',
         value: '',
         description: '',
         error: '',
         valid: '',
         title: '',
         placeholder: 'Last Name',
         type: 'text',
         required: false,
         component: FieldText,
         disabled: false,
         hidden: true,
      },
      {
         name: 'Email',
         value: '',
         description: '',
         error: '',
         valid: '',
         title: '',
         placeholder: 'Email',
         type: 'email',
         required: true,
         component: FieldText,
         disabled: false,
         hidden: false,
      },
      {
         name: 'Password',
         value: '',
         description: '',
         error: '',
         valid: '',
         title: '',
         placeholder: 'Password',
         type: 'password',
         required: true,
         component: FieldText,
         disabled: false,
         hidden: false,
      },
      {
         name: 'ConfirmPassword',
         value: '',
         description: '',
         error: '',
         valid: '',
         title: '',
         placeholder: 'Confirm Password',
         type: 'password',
         required: true,
         component: FieldText,
         disabled: false,
         hidden: false,
      },
      {
         name: 'SignupRequest',
         value: true,
         description: '',
         error: '',
         valid: '',
         title: '',
         placeholder: 'Signup Request',
         type: 'checkbox',
         required: true,
         component: FieldCheckbox,
         terms: (
            <>
               <span className='text-black'>I agree to </span>Givestar Terms of
               Use
            </>
         ),
         href: '#',
      },
   ],
}
export const restorePassword = {
   title: 'Restore Password',
   subtitle: '',
   animationHeight: 'h-[300px]',
   button: {
      icon: '',
      idle: 'Restore Password',
      action: 'Restoring...',
      success: 'Password Restored!',
      error: 'Restore again!',
   },

   method: 'post',
   nextForm: {
      isNextForm: true,
      title: ' ',
      cta: '← Back to Sign in',
      action: '',
      href: '#',
   },
   previousForm: {
      title: '',
   },
   helpForm: {
      isHelpForm: false,
      title: 'TROUBLE SIGNING IN?',
      action: '',
      href: '#',
   },
   confirmation: {
      isConfirmation: true,
      message: (
         <div>
            <h1 className='text-xl font-bold'>Your password Restored!</h1>

            <p>Please go to your email and click on the activation link.</p>
         </div>
      ),
      messageMarginTop: '',
      description: '',
      href: '',
      delay: '4000',
      lottiePath: '',
      lottieSize: '',
      formHeight: 'h-[300px]',
   },
   notification: {
      success: {
         isNotification: true,
         isSuccess: true,
         message: 'Success!',
         description: 'Your password reset request been successful!',
         href: '',
         delay: '',
      },
      error: {
         isNotification: true,
         isSuccess: false,
         message: 'Failed!',
         description: '',
         href: '',
         delay: '',
      },
   },
   fields: [
      {
         name: 'Email',
         value: '',
         description: '',
         error: '',
         valid: '',
         title: '',
         placeholder: 'Email',
         type: 'email',
         required: true,
         component: FieldText,
         disabled: false,
         hidden: false,
      },
   ],
}

export const createCampaign = {
   title: 'Create Campaign',
   backButton: true,
   button: {
      icon: '',
      idle: 'Create Campaign',
      action: 'Creating...',
      success: 'Campaign Created successfully!',
      error: 'Tray Creating again!',
   },

   method: 'post',
   nextForm: {
      isNextForm: false,
      title: 'Do not you have an account?',
      cta: 'Sign up now →',
      action: '',
      href: '#',
   },
   previousForm: {
      title: '',
   },
   helpForm: {
      isHelpForm: false,
      title: 'TROUBLE SIGNING IN?',
      action: '',
      href: '#',
   },
   confirmation: {
      isConfirmation: true,
      message: 'Your campaign has been created!',
      messageMarginTop: '',
      description: '',
      href: '/basecamp',
      delay: '2400',
      lottiePath: '',
      lottieSize: '',
      formHeight: 'h-[335px]',
   },
   notification: {
      success: {
         isNotification: false,
         isSuccess: true,
         message: 'Success!',
         description: 'Your are Logged in!',
         href: '',
         delay: '',
      },
      error: {
         isNotification: true,
         isSuccess: false,
         message: 'Failed!',
         description: '',
         href: '',
         delay: '',
      },
   },
   fields: [
      {
         name: '',
         forLabel: 'name',
         text: 'Which charity would you like to support?',
         component: FieldLabel,
         type: 'label',
         required: false,
         disabled: false,
         hidden: false,
      },
      {
         name: 'createdBy',
         value: '',
         description: '',
         error: '',
         valid: '',
         title: 'UserId',
         placeholder: 'user ID',
         type: 'text',
         required: false,
         component: FieldText,
         disabled: false,
         hidden: true,
      },
      {
         name: 'campaignCharities',
         value: [],
         description: '',
         error: '',
         valid: '',
         title: 'The Charity Name.',
         placeholder: '+ Add Charity Name',
         type: 'selectmultiple',
         required: false,
         component: FieldCombobox,
         disabled: false,
         hidden: false,
      },

      {
         name: '',
         forLabel: 'name',
         text: 'Tell us about your campaign',
         component: FieldLabel,
         type: 'label',
         required: false,
         disabled: false,
         hidden: false,
      },
      {
         name: 'name',
         value: '',
         description: '',
         error: '',
         valid: '',
         title: 'The Campaign Name or Event Name.',
         placeholder: 'Campaign/event name',
         type: 'text',
         required: true,
         component: FieldText,
         disabled: false,
         hidden: false,
      },
      // {
      //    name: 'targetStart',
      //    value: '',
      //    description: '',
      //    error: '',
      //    valid: '',
      //    title: 'Date when the campaign will go live.',
      //    placeholder: 'Start Date',
      //    type: 'date',
      //    required: true,
      //    step: 1,
      //    min: 3,
      //    component: FieldText,
      //    disabled: false,
      //    hidden: false,
      // },
      // {
      //    name: 'targetEnd',
      //    value: '',
      //    description: '',
      //    error: '',
      //    valid: '',
      //    title: 'Date when the campaign will go live.',
      //    placeholder: 'End Date',
      //    type: 'date',
      //    required: true,
      //    step: 1,
      //    min: 3,
      //    component: FieldText,
      //    disabled: false,
      //    hidden: false,
      // },
      {
         forLabel: 'photo',
         text: 'Create your Page',
         component: FieldLabel,
         type: 'label',
         required: false,
         disabled: false,
         hidden: false,
      },

      {
         name: 'photo',
         value: '',
         description: '',
         error: '',
         valid: '',
         title: '',
         title: 'Your page where you will launch your campaign',
         placeholder: 'Add a Photo',
         type: 'file',
         mediaType: 1,
         required: false,
         component: FieldFileupload,
         disabled: false,
         hidden: false,
      },
      // {
      //    name: 'quickCode',
      //    value: '',
      //    description: '',
      //    error: '',
      //    valid: '',
      //    title: 'Create your custome short url',
      //    placeholder: 'YOUR-COSTUME-URL',
      //    type: 'url',
      //    rightText: 'https: //give-star.com/',
      //    rightTextPadding: 'pl-44',
      //    required: false,
      //    component: FieldText,
      //    data: useGetByQuickCodeQuery,
      //    disabled: false,
      //    hidden: false,
      //    usedSearch: false,
      // },
      {
         name: 'currencyId',
         value: '',
         description: '',
         error: '',
         valid: '',
         title: 'Create your custome short url',
         placeholder: 'Base Currency',
         type: 'select',
         data: useLoadCurrencyListQuery,
         required: false,
         component: FieldSelect,
         disabled: false,
         hidden: false,
      },
      {
         name: 'target',
         value: '',
         description: '',
         error: '',
         valid: '',
         title: 'Your page where you will launch your campaign',
         placeholder: 'Fundraising Target',
         type: 'number',
         min: 100,
         step: 50,
         required: true,
         component: FieldText,
         disabled: false,
         hidden: false,
      },
      {
         name: 'description',
         value: '',
         description: '',
         error: '',
         valid: '',
         title: '',
         title: 'Your campaign description, this will help your supporters connect with your cause.',
         placeholder: 'Description ...',
         type: 'text',
         required: true,
         component: FieldTextarea,
         disabled: false,
         hidden: false,
         rows: 15,
      },
      // {
      //    forLabel: 'defaultDonationSizes',
      //    text: 'Default Donation Sizes',
      //    component: FieldLabel,
      //    type: 'label',
      //    required: false,
      //    disabled: false,
      //    hidden: false,
      // },
      // {
      //    name: 'defaultDonationSizes',
      //    value: '',
      //    description: '',
      //    error: '',
      //    valid: '',
      //    title: 'Your page where you will launch your campaign',
      //    placeholder: 'defaultDonationSizes',
      //    type: 'number',
      //    min: 100,
      //    step: 50,
      //    required: false,
      //    component: FieldDonationSize,
      //    disabled: false,
      //    hidden: false,
      // },
      // {
      //    name: 'stravaCode',
      //    value: '',
      //    description: '',
      //    error: '',
      //    valid: '',
      //    title: 'Your page where you will launch your campaign',
      //    placeholder: 'Enter STRAVA code',
      //    type: 'text',
      //    required: true,
      //    component: FieldText,
      //    disabled: false,
      //    hidden: false,
      // },
   ],
}
