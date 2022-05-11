import React from 'react'

const PostLastUpdate = () => {
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
                     Natasha
                  </p>
                  <p className='block text-neutral-500 '>1 day</p>
                  <p className='block w-full text-black '>
                     Just completed my first training session,
                     absolutely EXHAUSTED. Thanks so much everyone for
                     your support.
                  </p>
               </div>
            </div>
            <div className='flex flex-col gap-5 justify-start items-start w-full'>
               <div className='flex flex-row justify-between items-center w-full py-[1.19rem] border-gray-100 border-b'>
                  <div className='flex flex-row gap-[0.69rem] justify-start items-center'>
                     <div className='flex flex-row gap-1.5 justify-start items-center'>
                        <img
                           className='block'
                           src='/assets/images/love.svg'
                        />
                        <img
                           className='block'
                           src='/assets/images/star.svg'
                        />
                        <img
                           className='block'
                           src='/assets/images/like-green.svg'
                        />
                        <img
                           className='block'
                           src='/assets/images/fire.svg'
                        />
                     </div>
                     <div className='flex flex-row gap-5 justify-end items-center w-[3.19rem] h-full'>
                        <p className='block text-[1.06rem] text-black  font-bold'>
                           2,345
                        </p>
                     </div>
                  </div>
                  <div className='flex flex-row gap-[1.69rem] justify-end items-center h-full'>
                     <p className='block text-right text-[1.06rem] text-black '>
                        23 comments
                     </p>
                  </div>
               </div>
               <div className='flex flex-row justify-between items-center w-full'>
                  <div className='flex flex-col gap-[0.56rem] justify-start items-center'>
                     <img
                        className='block'
                        src='/assets/images/like.svg'
                     />
                     <p className='block text-[1.06rem] text-black '>
                        Like
                     </p>
                  </div>
                  <div className='flex flex-col gap-2 justify-start items-center'>
                     <img
                        className='block'
                        src='/assets/images/share.svg'
                     />
                     <p className='block text-[1.06rem] text-black '>
                        Share
                     </p>
                  </div>
                  <div className='flex flex-col gap-2 justify-start items-center'>
                     <img
                        className='block'
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
