import { createSlice } from '@reduxjs/toolkit'
const initialState = [
   {
      id: 34325532,
      isSuccess: true,
      message: 'Successfully Logged in!',
      description: 'Anyone with a link can now view this page.',
      href: '#',
   },
   {
      id: 34925532,
      isSuccess: true,
      message: 'Successfully Logged in2!',
      description: 'Anyone with a link can now view this page.',
      href: '#',
   },
   {
      id: 34625532,
      isSuccess: true,
      message: 'Successfully Logged in3!',
      description: 'Anyone with a link can now view this page.',
      href: '#',
   },
   {
      id: 34325332,
      isSuccess: true,
      message: 'Successfully Logged in!',
      description: 'Anyone with a link can now view this page.',
      href: '#',
   },
   {
      id: 34325535,
      isSuccess: true,
      message: 'Successfully Logged in!',
      description: 'Anyone with a link can now view this page.',
      href: '#',
   },
   {
      id: 34325435,
      isSuccess: true,
      message: 'Successfully Logged in!',
      description: 'Anyone with a link can now view this page.',
      href: '#',
   },
]
const notificationSlicer = createSlice({
   name: 'notificationSlice',

   initialState:[],
   reducers: {
      addNotification: (state, { payload }) => {
         state.push({
            id: Math.floor(1000 + Math.random() * 90000000),
            ...payload,
         } )
           if(state.length>=4) state.shift()
      },
      removeNotification: (state, { payload }) => {
         state = state.splice(payload, 1)
      },
      deleteAllNotifications: state => {
          state.length=0
      },
   },
})

export const { addNotification, removeNotification, deleteAllNotifications } =
   notificationSlicer.actions
export default notificationSlicer.reducer
