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
         <div className='flex flex-col gap-2 justify-center items-start max-w-md mx-auto p-5 bg-white sm:rounded-xl rounded-none shadow-md sm:mt-6 mt-0 '>
            <div className='flex flex-row flex-wrap sm:flex-nowrap  justify-start items-start w-full'>
               <div className='flex flex-col gap-10 m-4 sm:m-0 justify-start items-center w-16 h-full'>
                  <img
                     className='block rounded-full w-16'
                     src='/assets/images/image-natasha.png'
                  />
               </div>
               <div className='flex flex-col gap-2.5 justify-start items-start w-full  pl-5 pb-5'>
                  <p className='block text-lg text-black  font-semibold'>
                     {name}
                  </p>
                  <p className='block text-neutral-500 '>1 day</p>
                  <p className='block  text-black '>{comment}</p>
               </div>
            </div>
            <div className='flex flex-col gap-5 justify-start items-start w-full'>
               <div className='flex flex-row flex-wrap justify-between items-center w-full py-4 border-gray-100 border-b'>
                  <div className='flex flex-row  gap-2.5 justify-start items-center mx-auto xs:mx-0'>
                     <div className='flex flex-wrap  gap-1.5 justify-start items-center'>
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
                        <p className='block text-lg text-black  font-bold'>
                           {Number(loves + stars + likes + hot)}
                        </p>
                     </div>
                  </div>
                  <div className='flex flex-row gap-4 justify-end  items-center my-4 xs:my-0 mx-auto xs:mx-0'>
                     <p className='inline-block  text-lg text-black '>
                        {comments.length} comment
                        {comments.length > 1 && 's'}
                     </p>
                  </div>
               </div>
               <div className='flex flex-row flex-wrap justify-between items-center w-full'>
                  <div
                     className='flex flex-col gap-2.5 justify-start items-center hover:scale-110 transition duration-300 ease-in-out active:scale-95 hover:drop-shadow'
                     onClick={() => dispatch(like())}>
                     <img
                        className='block   '
                        src='/assets/images/like.svg'
                     />
                     <p className='block text-lg text-black '>Like</p>
                  </div>
                  <div className='flex flex-col gap-2 justify-start items-center hover:scale-110 transition duration-300 ease-in-out active:scale-95 hover:drop-shadow'>
                     <img
                        className='block '
                        src='/assets/images/share.svg'
                     />
                     <p className='block text-lg text-black '>
                        Share
                     </p>
                  </div>
                  <div className='flex flex-col gap-2 justify-start items-center hover:scale-110 transition duration-300 ease-in-out active:scale-95 hover:drop-shadow'>
                     <img
                        className='block  '
                        src='/assets/images/comment.svg'
                     />
                     <p className='block text-lg text-black '>
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
