import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   signin: { show: false },
   signup: { show: false },
   restorePassword: { show: false },
   createCampaign: { show: false },
   notification: {
      show: true,
      isSuccess: true,
      message: 'Successfully logged in!',
      description: 'Anyone with a link can now view this page.',
      href: '#',
   },
}

const modalSlicer = createSlice({
   name: 'modalSlice',
   initialState,
   reducers: {
      toggleSignin: state => {
         state.signin.show = !state.signin.show
      },
      showSignin: state => {
         state.signin.show = true
      },
      toggleSignup: state => {
         state.signup.show = !state.signup.show
      },
      showSignup: state => {
         state.signup.show = true
      },
      showCreateCampaign: state => {
         state.createCampaign.show = true
      },
      hideCreateCampaign: state => {
         state.createCampaign.show = false
      },
      showRestorePassword: state => {
         state.restorePassword.show = true
      },
      toggleRestorePassword: state => {
         state.restorePassword.show = !state.restorePassword.show
      },
      showNotification: ( state, { payload } ) => {
         console.log(payload)
         
         state.notification.show = true 
         state.notification.isSuccess = payload?.isSuccess 
         state.notification.message = payload?.message 
         state.notification.description = payload?.description
         state.notification.href = payload?.href
      },
      hideSignin: state => {
         state.signin.show = false
      },
      hideSignup: state => {
         state.signup.show = false
      },
      hideRestorePassword: state => {
         state.restorePassword.show = false
      },
      hideNotification: state => {
         state.notification.show = false
         state.notification = {
            show: false,
            isSuccess: true,
            message: '',
            description: '',
            href: '#',
         }
      },
      hideAllModals: state => {
         for ( const key in state )
         {
            if ( state[key] == 'notification' ) return state
            state[key].show = false
         }
      }
      
   },
} )



export const {
   toggleSignin,
   showSignin,
   toggleSignup,
   showSignup,
   showNotification,
   toggleRestorePassword,
   showRestorePassword,
   hideSignin,
   hideSignup,
   hideNotification,
   hideRestorePassword,
   showCreateCampaign,
   hideCreateCampaign,
   hideAllModals,
} = modalSlicer.actions
export default modalSlicer.reducer
