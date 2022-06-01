import React from 'react'

export default function Modal() {
   const [showModal, setShowModal] = React.useState(false)
   return (
      <>
         <button
            className='flex w-full flex-row gap-5 justify-center items-center  py-3 bg-yellow-400 rounded-xl hover:scale-105 ease-out duration-300 hover:shadow-md active:scale-100 active:shadow-none'
            type='button'
            onClick={() => setShowModal(true)}>
            <p className='block text-center text-gray-600  font-semibold'>
               SIGN UP
            </p>
         </button>
         {showModal ? (
            <>
               <div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0  outline-none focus:outline-none z-50'>
                  <div className='relative w-auto my-6 mx-auto max-w-3xl '>
                     {/*content*/}
                     <div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
                        <div className='flex flex-col gap-7 justify-start items-center max-w-[26.38rem] mx-auto px-10 py-[3.13rem] bg-neutral-100 rounded-xl'>
                           <p className='block text-[1.75rem] text-black  font-medium'>
                              Sign in to GiveStar
                           </p>
                           <div>
                              <img
                                 className='block'
                                 src='./assets/image-11818.535205757396.png'
                              />
                              <p className='block opacity-50 text-neutral-500 '>
                                 Email Address
                              </p>
                           </div>
                           <div>
                              <img
                                 className='block'
                                 src='./assets/image-13356.571695926255.png'
                              />
                              <p className='block opacity-50 text-neutral-500 '>
                                 Password
                              </p>
                           </div>
                           <div className='flex flex-col justify-center items-center w-full py-4 bg-yellow-400 rounded-xl'>
                              <p className='block w-[3.90rem] text-center text-black  font-semibold'>
                                 SIGN IN
                              </p>
                           </div>
                           <p className='block text-center text-xs text-neutral-400  font-medium'>
                              TROUBLE SIGNING IN?
                           </p>
                           <div className='flex flex-row gap-[0.81rem] justify-start items-center'>
                              <p className='block text-right text-xs text-black  font-medium'>
                                 Don’t have an account?
                              </p>
                              <div className='flex flex-row gap-2.5 justify-start items-center'>
                                 <p className='block text-right text-[0.81rem] text-neutral-400  font-semibold'>
                                    Sign up now
                                 </p>
                                 <div></div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className='opacity-25 fixed inset-0 z-500 bg-black'></div>
            </>
         ) : null}
      </>
   )
}
