import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   auth: false,
   authError: false,
   authMessage: '',
}

const authSlice = createSlice({
   name: 'auth',
   initialState,
   reducers: {
      signin: state => {
         state.auth = !state.auth
      },
   },
})


export const { signin } = authSlice.actions
export default authSlice.reducer