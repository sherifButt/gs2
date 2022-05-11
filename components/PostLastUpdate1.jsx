import { Transition } from '@headlessui/react'
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {like} from '../redux/features/postsSlicer'
const PostLastUpdate = () => {

   const dispatch = useDispatch()
   const {
      id,
      author:{name},
      comment,
      comments,  
      impressions: { loves, stars, likes, hot }
   } = useSelector(store => store.posts.Posts)

   return (
      <div>
         <div className='flex flex-col gap-[0.69rem] justify-center items-start max-w-[31.25rem] mx-auto p-[1.06rem] bg-white rounded-xl'>
            <div className='flex flex-row justify-start items-start w-full'>
               <div className='flex flex-col gap-10 justify-start items-center'>
                  <img
                     className='block rounded-full w-16'
                     src='/assets/images/image-natasha.png'
                  />
               </div>
               <div className='flex flex-col gap-[0.56rem] justify-start items-start w-full h-full pl-[1.31rem] pb-5'>
                  <p className='block text-lg text-black  font-semibold'>
                     {name}
                  </p>
                  <p className='block text-neutral-500 '>1 day</p>
                  <p className='block w-full text-black '>
                     {comment}
                  </p>
               </div>
            </div>
            <div className='flex flex-col gap-5 justify-start items-start w-full'>
               <div className='flex flex-row justify-between items-center w-full py-[1.19rem] border-gray-100 border-b'>
                  <div className='flex flex-row gap-[0.69rem] justify-start items-center'>
                     <div className='flex  gap-1.5 justify-start items-center'>
                        <img
                           className='block hover:scale-110 hover:drop-shadow transition duration-300 ease-in-out active:scale-95'
                           src='/assets/images/love.svg'
                           onClick={() => dispatch(like())}
                        />
                        <img
                           className='block hover:scale-110 hover:drop-shadow transition duration-300 ease-in-out active:scale-95'
                           src='/assets/images/star.svg'
                           onClick={() => dispatch(like())}
                        />
                        <img
                           className='block hover:scale-110 hover:drop-shadow transition duration-300 ease-in-out active:scale-95'
                           src='/assets/images/like-green.svg'
                           onClick={() => dispatch(like())}
                        />
                        <img
                           className='block hover:scale-110 hover:drop-shadow transition duration-300 ease-in-out active:scale-95'
                           src='/assets/images/fire.svg'
                           onClick={() => dispatch(like())}
                        />
                     </div>
                     <div className='flex flex-row gap-5 justify-end items-center '>
                        <p className='block text-[1.06rem] text-black  font-bold'>
                           {Number(loves + stars + likes + hot)}
                        </p>
                     </div>
                  </div>
                  <div className='flex flex-row gap-[1.69rem] justify-end items-center'>
                     <p className='inline-block text-right text-[1.06rem] text-black '>
                        {comments.length} comment
                        {comments.length > 1 && 's'}
                     </p>
                  </div>
               </div>
               <div className='flex flex-row justify-between items-center w-full'>
                  <div
                     className='flex flex-col gap-[0.56rem] justify-start items-center hover:scale-110 transition duration-300 ease-in-out active:scale-95 hover:drop-shadow'
                     onClick={() => dispatch(like())}>
                     <img
                        className='block   '
                        src='/assets/images/like.svg'
                     />
                     <p className='block text-[1.06rem] text-black '>
                        Like
                     </p>
                  </div>
                  <div className='flex flex-col gap-2 justify-start items-center'>
                     <img
                        className='block hover:scale-125 transition duration-300 ease-in-out active:scale-95 hover:drop-shadow'
                        src='/assets/images/share.svg'
                     />
                     <p className='block text-[1.06rem] text-black '>
                        Share
                     </p>
                  </div>
                  <div className='flex flex-col gap-2 justify-start items-center'>
                     <img
                        className='block hover:scale-125 transition duration-300 ease-in-out active:scale-95 hover:drop-shadow'
                        src='/assets/images/comment.svg'
                     />
                     <p className='block text-[1.06rem] text-black '>
                        Comment
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default PostLastUpdate
