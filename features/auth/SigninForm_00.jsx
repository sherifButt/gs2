import React, { useEffect } from 'react'
// Form Data
import { signin as _signin } from '../../components/forms/fomrs'
// Components
import DefaultForm from '../../components/forms/DefaultForm'
// GlobalState
import { hideSignin, showSignup, showRestorePassword } from '../modalSlice'
import { setCredentials } from './authSlice'
// fetch
import { useSigninUserMutation } from './authApiSlice.js'
import { useLoadUserQuery } from '../user/userApiSlice'
import { setUser } from '../user/userSlice'
import { useDispatch } from 'react-redux'

const SigninForm_00 = ({ className, href }) => {
   const dispatch = useDispatch()
   const [signinUser, { data, isLoading, isSuccess, isError, error }] =
      useSigninUserMutation()
   const loadUser = useLoadUserQuery()

   // FIX:
   // is there data
   useEffect(() => {
      if (data ) {
         // get user id
         const id = data.useId

         console.log('-------> data:', data)
         // load user data using id
         const userData = loadUser.data
         console.log('-------> userData:', userData)

         // set  user data
         dispatch(setUser(userData))
      }
   }, [data])

   return (
      <DefaultForm
         form={{
            ..._signin,
            confirmation: {
               ..._signin.confirmation,
               href: href ? href : _signin.confirmation.href,
            },
         }}
         className={className}
         hideThisForm={hideSignin}
         showNextForm={showSignup}
         showHelpForm={showRestorePassword}
         setCredentials={setCredentials}
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
