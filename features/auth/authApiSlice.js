import { apiSlice } from '../../app/api/apiSlice'

export const authApiSlice = apiSlice.injectEndpoints({
   endpoints: builder => ({
      signinUser: builder.mutation({
         query: credentials => {
            console.log(credentials)
            return {
               url: '/Users/Login',
               // url: '/hello',
               method: 'POST',
               body: { ...credentials },
            }
         },
      }),

      signupUser: builder.mutation({
         query: user => {
            return {
               url: '/Users/Signup',
               // url: 'api/hello',
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
