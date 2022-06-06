import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   foreName: 'Natash',
   surName: 'Storne',
   name: 'Natasha Stone',
   email: 'natasha.stone@give-star.com',
   phone: '004475674892',
   image: '/assets/images/image-natasha.png',
   privilege: 'admin',
   campaigns: 24,
   needHelp: false,
   streaming: true,
   online: true,
}

const userSlicer = createSlice({
   name: 'user',
   initialState,
   reducers: {},
})

export default userSlicer.reducer
