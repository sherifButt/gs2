import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   data: {
      id: '',
      forename: '',
      surname: '',
      fullName: 'Natasha ',
      email: '',
      selfBio: '',
      phone: '',
      profileImage: '',
      membershipDurationDays: 0,
      privilege: '',
      initial: '',
      active: false,
      campaigns: 0,
      needHelp: false,
      streaming: false,
      online: false,
   },
}

const userSlice = createSlice({
   name: 'user',
   initialState,
   reducers: {
      setUser: (state, { payload }) => {
         // console.log('setUser', payload)
         // for (const key in payload) {
         //    state[key] = payload.key
         // }
         state.data = { ...payload }
         // console.log('state', state) 
      },
      removeUser: ( state ) => {
         state.data = {}
      }
   },
})
export const { setUser, removeUser } = userSlice.actions
export default userSlice.reducer

export const selectCurrentUser = state =>state.user.data