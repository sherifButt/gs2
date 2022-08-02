import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   data: {
      id: '',
      forename: 'Natash',
      surname: 'Storne',
      fullName: 'Natasha Stone',
      email: 'natasha.stone@give-star.com',
      selfBio: 'I love cats',
      phone: '004475674892',
      profileImage: '/assets/images/image-natasha.png',
      membershipDurationDays: 112,
      privilege: 'admin',
      initial: 'N',
      active: false,
      campaigns: 24,
      needHelp: false,
      streaming: true,
      online: true,
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