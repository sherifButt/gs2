import React, { useEffect } from 'react'
import { skipToken } from '@reduxjs/toolkit/query'
// Form Data
import { signin as _signin } from '../../components/forms/fomrs'
// Components
import DefaultForm from '../../components/forms/DefaultForm'
// GlobalState
import { hideSignin, showSignup, showRestorePassword } from '../modalSlice'
import { setCredentials } from './authSlice'
import { selectCurrentAuth } from './authSlice'
// fetch
import { useSigninUserMutation } from './authApiSlice.js'
import { useLoadUserQuery } from '../user/userApiSlice'
import { setUser } from '../user/userSlice'
import { useDispatch, useSelector } from 'react-redux'

const SigninForm_00 = ({ className, href }) => {
   const dispatch = useDispatch()
   const auth = useSelector(selectCurrentAuth)
   const [signinUser, { data, isLoading, isSuccess, isError, error }] =
      useSigninUserMutation()
   const {data:userData,isLoading:userIsLoading,isSuccess:userIsSuccess,isError:userIsError,error:userError} = useLoadUserQuery(auth?auth.token:skipToken)

   // FIX:
   // is there data
   useEffect(() => {
      if (data) {
         if (data.accessToken) {
            // get user id
            const id = data.useId
            console.log('-------> data:', data)
            // load user data using id
            const loadUserData = async () => {
               console.log('auth0', auth)
               await dispatch( setCredentials( data ) )
               console.log('auth1', auth)
               // const user = userData.data
              
            }
            loadUserData()
         }
      }
   }, [ auth.token ] )
   
   useEffect(() => {
     
    console.log('-------> user:', userData)
    // const userData = userData.data
    // set  user data
    dispatch(setUser(userData))
    console.log('-------> userData:', userData)
     
   }, [userData])
   

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
