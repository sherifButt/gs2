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
        
        <div class="flex flex-col gap-2.5 justify-start items-center max-w-[30.63rem] mx-auto p-4 bg-white rounded-xl">
            <div class="flex flex-row justify-start items-start w-full">
                <div class="flex flex-col gap-10 justify-start items-start h-full">
                    <img class="block" src="./assets/image-27252.50611298562.png" />
                </div>
                <div class="flex flex-col gap-2.5 justify-start items-start w-full h-full pl-5 pr-10 pb-5">
                    <p class="block text-lg text-black  font-semibold">Natasha</p>
                    <p class="block text-neutral-500 ">1 day</p>
                    <p class="block w-full text-black ">Adipiscing nulla feugiat viverra adipiscing cursus vulputate non. Sit
                        arcu orci, in purus, quis commodo. In tellus, in ut vitae. In tincidunt
                        a sed volutpat odio euismod etiam erat ipsum. In faucibus enim eget malesuada
                        sed. Amet gravida blandit in velit lacus sed aliquet tortor. Ultrices.</p>
                </div>
            </div>
            <div class="flex flex-col gap-5 justify-start items-center w-full">
                <div class="flex flex-row justify-between items-center w-full py-5 border-gray-100 border">
                    <div class="flex flex-row gap-2.5 justify-start items-center">
                        <div class="flex flex-row gap-1.5 justify-start items-center">
                            <img class="block" src="./assets/image-38679.4409781426.svg" />
                            <img class="block" src="./assets/image-64591.33045760192.svg" />
                            <img class="block" src="./assets/image-18919.28865533479.svg" />
                            <img class="block" src="./assets/image-24705.28679167725.svg" />
                        </div>
                        <div class="flex flex-row gap-5 justify-end items-center h-full">
                            <p class="block text-lg text-black  font-bold">2,345</p>
                        </div>
                    </div>
                    <div class="flex flex-row gap-5 justify-end items-center h-full">
                        <p class="block text-right text-lg text-black ">23 comments</p>
                    </div>
                </div>
                <div class="flex flex-row justify-between items-center w-full">
                    <div class="flex flex-col gap-2 justify-start items-center">
                        <img class="block" src="./assets/image-4838.121086250946.svg" />
                        <p class="block text-lg text-black ">Like</p>
                    </div>
                    <div class="flex flex-col gap-2 justify-start items-center">
                        <img class="block" src="./assets/image-86939.94198920416.svg" />
                        <p class="block text-lg text-black ">Share</p>
                    </div>
                    <div class="flex flex-col gap-2 justify-start items-center">
                        <img class="block" src="./assets/image-69440.5244297061.svg" />
                        <p class="block text-lg text-black ">Comment</p>
                    </div>
                </div>
            </div>
        </div>
    
      </div>
   )
}

export default PostLastUpdate
