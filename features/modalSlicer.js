import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   signin: { show: false },
   signup: { show: false },
   restorePassword: { show: false },
   notification: {
      show: false,
      isSuccess: true,
      message: 'Successfully Logged in!',
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
      showRestorePassword: state => {
         state.restorePassword.show = true
      },
      toggleRestorePassword: state => {
         state.restorePassword.show = !state.restorePassword.show
      },
      showNotification: (state, { payload }) => {
         state.notification.show = true
         state.notification.isSuccess = payload.isSuccess || true
         state.notification.message = payload.message || null
         state.notification.message = payload.description || null
         state.notification.href = payload.href || null
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
   },
})

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
} = modalSlicer.actions
export default modalSlicer.reducer
