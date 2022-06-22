// Field Components
import FieldText from './FieldText'
import FieldCheckbox from './FieldCheckbox'

export const signin = {
   title: 'Sign in to Give Star',
   subtitle: '',
   button: {
      icon: '',
      idle: 'Sign in',
      action: 'signing...',
      success: 'Signed in!',
      error: 'Tray Signing in again!',
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
      message: 'Your are Logged in!',
      messageMarginTop: '',
      description: '',
      href: '/discover',
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
         name: 'Email',
         value: 'ant@there.com',
         description: '',
         error: '',
         valid: '',
         placeholder: 'Email',
         type: 'email',
         required: true,
         component: FieldText,
         disabled: false,
         hidden: false,
      },
      {
         name: 'Password',
         value: '@Ahandsomepassword333',
         description: '',
         error: '',
         valid: '',
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
   title: 'Sign up to Give Star',
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
      delay: '',
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
         value: 'John Smith',
         description: '',
         error: '',
         valid: '',
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
         placeholder: 'Last Name',
         type: 'text',
         required: false,
         component: FieldText,
         disabled: false,
         hidden: true,
      },
      {
         name: 'Email',
         value: 'sherif+@give-star.com',
         description: '',
         error: '',
         valid: '',
         placeholder: 'Email',
         type: 'email',
         required: true,
         component: FieldText,
         disabled: false,
         hidden: false,
      },
      {
         name: 'Password',
         value: '123qweASD',
         description: '',
         error: '',
         valid: '',
         placeholder: 'Password',
         type: 'password',
         required: true,
         component: FieldText,
         disabled: false,
         hidden: false,
      },
      {
         name: 'ConfirmPassword',
         value: '123qweASD',
         description: '',
         error: '',
         valid: '',
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

            <p>
               Please go to your email and click on the activation link.
            </p>
         </div>
      ),
      messageMarginTop: '',
      description: '',
      href: '',
      delay: '',
      lottiePath: '',
      lottieSize:'',
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
         placeholder: 'Email',
         type: 'email',
         required: true,
         component: FieldText,
         disabled: false,
         hidden: false,
      },
   ],
}
