import { apiSlice } from '../../app/api/apiSlice'

export const authApiSlice = apiSlice.injectEndpoints({
   endpoints: builder => ({
      signinUser: builder.mutation({
         query: credentials => {
            return {
               url: '/Users/Login',
               method: 'POST',
               body: { ...credentials },
            }
         },
      }),
      
      signupUser: builder.mutation({
         query: user => {
            return {
               url: '/Users/Signup',
               method: 'POST',
               body: user,
            }
         },
         invalidatesTags: ['User'],
      }),
      restorePassword: builder.mutation({
         query: email => {
            return {
               url: '/Users/Forgotpw',
               method: 'POST',
               body: email,
            }
         },
         invalidatesTags: ['Email'],
      }),
      activateUser: builder.mutation({
         query: body => {
            return {
               url: '/Users/Activate',
               method: 'POST',
               body,
            }
         },
      }),
   }),
})

export const {
   useSigninUserMutation,
   useSignupUserMutation,
   useRestorePasswordMutation,
   useActivateUserMutation,
} = authApiSlice
