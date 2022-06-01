import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import {
   CheckIcon,
   XIcon,
   ExclamationCircleIcon,
} from '@heroicons/react/outline'

export default function SignUpModal() {
   const [open, setOpen] = useState(true)

   return (
      <Transition.Root show={open} as={Fragment}>
         <Dialog as='div' className='relative z-10' onClose={setOpen}>
            <Transition.Child
               as={Fragment}
               enter='ease-out duration-300'
               enterFrom='opacity-0'
               enterTo='opacity-100'
               leave='ease-in duration-200'
               leaveFrom='opacity-100'
               leaveTo='opacity-0'>
               <div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
            </Transition.Child>

            <div className='fixed z-10 inset-0 overflow-y-auto'>
               <div className='flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0'>
                  <Transition.Child
                     as={Fragment}
                     enter='ease-out duration-300'
                     enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
                     enterTo='opacity-100 translate-y-0 sm:scale-100'
                     leave='ease-in duration-200'
                     leaveFrom='opacity-100 translate-y-0 sm:scale-100'
                     leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'>
                     <Dialog.Panel className='flex flex-col gap-7 justify-center  relative bg-neutral-100 rounded-xl px-6 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-sm sm:w-full sm:p-10'>
                        <div className='hidden sm:block absolute top-0 right-0 pt-4 pr-4'>
                           <button
                              type='button'
                              className=' rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                              onClick={() => setOpen(false)}>
                              <span className='sr-only'>Close</span>
                              <XIcon className='h-6 w-6' aria-hidden='true' />
                           </button>
                        </div>

                        <p className='block text-[1.75rem] text-black text-center font-medium'>
                           Sign in to GiveStar
                        </p>
                        <div>
                           <label
                              htmlFor='email'
                              className='block text-sm font-medium text-gray-700'>
                              Email
                           </label>
                           <div className='mt-1 relative rounded-md shadow-sm'>
                              <input
                                 type='email'
                                 name='email'
                                 id='email'
                                 className='block w-full py-3 pl-3 pr-10 border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm rounded-xl'
                                 placeholder='you@example.com'
                                 defaultValue='adamwathan'
                                 aria-invalid='true'
                                 aria-describedby='email-error'
                              />
                              <div className='absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none'>
                                 <ExclamationCircleIcon
                                    className='h-5 w-5 text-red-500'
                                    aria-hidden='true'
                                 />
                              </div>
                           </div>
                           <p
                              className='mt-2 text-sm text-red-600'
                              id='email-error'>
                              Your email must include @ sign.
                           </p>
                        </div>
                        <div>
                           <label
                              htmlFor='password'
                              className='block text-sm font-medium text-gray-700'>
                              Password
                           </label>
                           <div className='mt-1 relative rounded-md shadow-sm'>
                              <input
                                 type='password'
                                 name='password'
                                 id='password'
                                 className='block w-full py-3 pl-3 pr-10 border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm rounded-xl'
                                 placeholder='you@example.com'
                                 defaultValue='adamwathan'
                                 aria-invalid='true'
                                 aria-describedby='password-error'
                              />
                              <div className='absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none'>
                                 <ExclamationCircleIcon
                                    className='h-5 w-5 text-red-500'
                                    aria-hidden='true'
                                 />
                              </div>
                           </div>
                           <p
                              className='mt-2 text-sm text-red-600'
                              id='password-error'>
                              Your password must be less than 4 characters.
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
                     </Dialog.Panel>
                  </Transition.Child>
               </div>
            </div>
         </Dialog>
      </Transition.Root>
   )
}
