import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   authError: false,
   authMessage: '',
   isAuthenticated: false,
   user: null,
   token: null,
   refreshToken: null,
}

const authSlice = createSlice({
   name: 'auth',
   initialState,
   reducers: {
      signin: state => {
         state.auth = !state.auth
      },
      setCredentials: (
         state,
         { payload: { userId, accessToken, refreshToken } }
      ) => {
         localStorage.setItem(
            'user',
            JSON.stringify({
               isAuthenticated: true,
               user: userId,
               token: accessToken,
               refreshToken,
            })
         )
         state.isAuthenticated = true
         state.user = userId
         state.token = accessToken
         state.refreshToken = refreshToken
      },
      logOut: state => {
         state.isAuthenticated = false
         state.user = null
         state.token = null
         state.refreshToken = null
      },
   },
})

export const { signin, setCredentials, logOut } = authSlice.actions
export default authSlice.reducer

export const selectCurrentAuth = state => state.auth
