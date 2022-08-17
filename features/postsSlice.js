import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   Posts: {
      id: '434324fkljsfsdjfsdfd',
      author: { id: '434894384239242432', name: 'Natasha' },
      publishedDate: '2017-12-21',
      comment:
         'Just completed my first training session, absolutely EXHAUSTED. Thanks so much everyone for your support. ',
      comments: [
         {
            id: '3242342342j432lk',
            title: 'Training Session',
            content: 'Some content',
         },
      ],
      impressions: { loves: 1, stars: 3, likes: 45, hot: 43 },
   },
}

export const postsSlicer = createSlice({
   name: 'posts',
   initialState,
   reducers: {
      like: state => {
         state.Posts.impressions.likes += 1
      },
   },
})

export const { like } = postsSlicer.actions
export default postsSlicer.reducer
