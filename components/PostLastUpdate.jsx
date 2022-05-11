import React from 'react'

const PostLastUpdate = () => {
   return (
      <div>
         <div className='flex flex-col gap-[0.69rem] justify-center items-start max-w-[31.25rem] mx-auto p-[1.06rem] bg-white rounded-xl'>
            <div className='flex flex-row justify-start items-center w-full'>
               <div className='flex flex-row gap-5 justify-center items-start h-full'>
                  <img
                     className='block'
                     src='./assets/images/image-81567.36693810504.png'
                  />
               </div>
               <div className='flex flex-col gap-[0.56rem] justify-start items-start w-full h-full pl-[1.31rem] pr-[2.69rem] pb-5'>
                  <p className='block text-lg text-black  font-semibold'>
                     Natasha
                  </p>
                  <p className='block text-neutral-500 '>1 day</p>
                  <p className='block w-full text-black '>
                     Just completed my first training session,
                     absolutely EXHAUSTED. Thanks so much everyone for
                     your support. Just completed my first training
                     session, absolutely EXHAUSTED. Thanks so much
                     everyone for your support.
                  </p>
               </div>
            </div>
            <div className='flex flex-col gap-5 justify-start items-start w-full'>
               <div className='flex flex-row gap-[0.94rem] justify-start items-center w-full py-[1.19rem] border-gray-100  border-b'>
                  <div className='flex flex-row gap-[1.13rem] justify-between items-center'>
                     <div className='flex flex-row gap-2'>
                        <img
                           className='block'
                           src='./assets/images/image-54910.11276359341.svg'
                        />
                        <img
                           className='block'
                           src='./assets/images/image-51454.61409838166.svg'
                        />
                        <img
                           className='block'
                           src='./assets/images/image-38589.08926505855.svg'
                        />
                        <img
                           className='block'
                           src='./assets/images/image-41998.15443488206.svg'
                        />
                     </div>
                     <div>
                        <p className='block text-[1.06rem] text-black  font-bold'>
                           2,345
                        </p>
                     </div>
                  </div>
                  <div className='flex flex-row gap-[1.69rem] justify-end items-center w-full h-full'>
                     <p className='block text-right text-[1.06rem] text-black '>
                        23 comments
                     </p>
                  </div>
               </div>
               <div className='flex flex-row justify-between items-center w-full'>
                  <div>
                     <p className='block text-[1.06rem] text-black '>
                        Like
                     </p>
                     <img
                        className='block'
                        src='./assets/images/image-464.2967356825345.svg'
                     />
                  </div>
                  <div>
                     <p className='block text-[1.06rem] text-black '>
                        Share
                     </p>
                     <img
                        className='block'
                        src='./assets/images/image-56026.445602567466.svg'
                     />
                  </div>
                  <div>
                     <p className='block text-[1.06rem] text-black '>
                        Comment
                     </p>
                     <img
                        className='block'
                        src='./assets/images/image-52955.782869759634.svg'
                     />
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default PostLastUpdate
