import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import BouncingstarIcon from '../icons/BouncingstarIcon'
import {
   CheckIcon,
   XIcon,
   ExclamationCircleIcon,
} from '@heroicons/react/outline'
import Link from 'next/link'
import AlertWithDismissButton from '../alerts/AlertWithDismissButton'
import Notifications from './Notifications'

const userInetialState = {
   forename: '',
   surname: '',
   email: '',
   password: '',
   confirmpassword: '',
}

export default function SignUpModal() {
   const [open, setOpen] = useState(true)
   const [userInfo, setUserInfo] = useState(userInetialState)
   
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
               <form
                  method='post'
                  className='flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0'>
                  <Transition.Child
                     as={Fragment}
                     enter='ease-out duration-300'
                     enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
                     enterTo='opacity-100 translate-y-0 sm:scale-100'
                     leave='ease-in duration-200'
                     leaveFrom='opacity-100 translate-y-0 sm:scale-100'
                     leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'>
                     <Dialog.Panel className='flex flex-col gap-7 justify-center w-full  relative bg-neutral-100 rounded-xl px-6 pt-5 pb-4 text-left overflow-none shadow-xl transform transition-all sm:my-8 sm:max-w-md sm:w-full sm:p-10'>
                        <BouncingstarIcon className='absolute -top-6  sm:left-14 0scale-x-[-1] rotate-4 ' />
                        <div className=' absolute top-0 right-3 pt-4 pr-4'>
                           <button
                              type='button'
                              className=' rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                              onClick={() => setOpen(false)}>
                              <span className='sr-only'>Close</span>
                              <XIcon className='h-5 w-5' aria-hidden='true' />
                           </button>
                        </div>
                        <p className='block text-3xl text-black text-center font-medium z-10'>
                           Sign Up to GiveStar
                        </p>
                        <div className='flex flex-row gap-4 justify-between'>
                           <div className='max-h-4'>
                              <div className='relative'>
                                 <input
                                    type='forename'
                                    name='forename'
                                    id='forename'
                                    className='mt-1 relative  shadow-sm peer block w-full py-3 pl-3 pr-10 placeholder-transparent border-red-300 text-gray-900  focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-md rounded-xl'
                                    placeholder='Fore Name'
                                    defaultValue=''
                                    aria-invalid='true'
                                    aria-describedby='forename-error'
                                    onChange={e =>
                                       setUserInfo({
                                          ...userInfo,
                                          forename: e.target.value,
                                       })
                                    }
                                 />
                                 {/* <div className='absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none'>
                                     <ExclamationCircleIcon
                                        className='h-5 w-5 text-red-500'
                                        aria-hidden='true'
                                     />
                                  </div> */}

                                 <label
                                    htmlFor='forename'
                                    className='absolute ease-out duration-500 -top-5 left-3 block text-sm font-medium text-gray-700 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-5 transition-all peer-focus:text-gray-600 peer-focus:text-sm'>
                                    Fore Name
                                 </label>
                                 {/* <p
                                  className='mt-2 text-sm text-red-600'
                                  id='forename-error'>
                                  Your forename must include @ sign.
                               </p> */}
                              </div>
                           </div>
                           <div>
                              <div className='relative'>
                                 <input
                                    type='surname'
                                    name='surname'
                                    id='surname'
                                    className='mt-1 relative  shadow-sm peer block w-full py-3 pl-3 pr-10 placeholder-transparent border-red-300 text-gray-900  focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-md rounded-xl'
                                    placeholder='Sur Name'
                                    defaultValue=''
                                    aria-invalid='true'
                                    aria-describedby='surname-error'
                                    onChange={e =>
                                       setUserInfo({
                                          ...userInfo,
                                          surname: e.target.value,
                                       })
                                    }
                                 />
                                 {/* <div className='absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none'>
                                     <ExclamationCircleIcon
                                        className='h-5 w-5 text-red-500'
                                        aria-hidden='true'
                                     />
                                  </div> */}

                                 <label
                                    htmlFor='surname'
                                    className='absolute ease-out duration-500 -top-5 left-3 block text-sm font-medium text-gray-700 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-5 transition-all peer-focus:text-gray-600 peer-focus:text-sm'>
                                    Sur Name
                                 </label>
                                 {/* <p
                                  className='mt-2 text-sm text-red-600'
                                  id='surname-error'>
                                  Your surname must include @ sign.
                               </p> */}
                              </div>
                           </div>
                        </div>
                        <div className='relative'>
                           <input
                              type='email'
                              name='email'
                              id='email'
                              className='mt-1 relative  shadow-sm peer block w-full py-3 pl-3 pr-10 placeholder-transparent border-red-300 text-gray-900  focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-md rounded-xl'
                              placeholder='Email'
                              defaultValue=''
                              aria-invalid='true'
                              aria-describedby='email-error'
                              onChange={e =>
                                 setUserInfo({
                                    ...userInfo,
                                    email: e.target.value,
                                 })
                              }
                           />
                           {/* <div className='absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none'>
                                 <ExclamationCircleIcon
                                    className='h-5 w-5 text-red-500'
                                    aria-hidden='true'
                                 />
                              </div> */}

                           <label
                              htmlFor='email'
                              className='absolute ease-out duration-500 -top-4 left-3 block text-sm font-medium text-gray-700 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:-top-4 transition-all peer-focus:text-gray-600 peer-focus:text-sm'>
                              Email
                           </label>
                           {/* <p
                              className='mt-2 text-sm text-red-600'
                              id='email-error'>
                              Your email must include @ sign.
                           </p> */}
                        </div>
                        <div className='relative'>
                           <input
                              type='password'
                              name='password'
                              id='password'
                              className='mt-1 relative  shadow-sm peer block w-full py-3 pl-3 pr-10 placeholder-transparent border-red-300 text-gray-900  focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-md rounded-xl'
                              placeholder='Password'
                              defaultValue=''
                              aria-invalid='true'
                              aria-describedby='password-error'
                              onChange={e =>
                                 setUserInfo({
                                    ...userInfo,
                                    password: e.target.value,
                                 })
                              }
                           />
                           {/* <div className='absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none'>
                                 <ExclamationCircleIcon
                                    className='h-5 w-5 text-red-500'
                                    aria-hidden='true'
                                 />
                              </div> */}
                           <label
                              htmlFor='password'
                              className='absolute ease-out duration-500 -top-4 left-3 block text-sm font-medium text-gray-700 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:-top-4 transition-all peer-focus:text-gray-600 peer-focus:text-sm'>
                              Password
                           </label>

                           {/* <p
                              className='mt-2 text-sm text-red-600'
                              id='password-error'>
                              Your password must be less than 4 characters.
                           </p> */}
                        </div>
                        <div className='relative'>
                           <input
                              type='password'
                              name='confirmpassword'
                              id='confirmpassword'
                              className='mt-1 relative  shadow-sm peer block w-full py-3 pl-3 pr-10 placeholder-transparent border-red-300 text-gray-900  focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-md rounded-xl'
                              placeholder='Confirm Password'
                              defaultValue=''
                              aria-invalid='true'
                              aria-describedby='confirmpassword-error'
                              onChange={e =>
                                 setUserInfo({
                                    ...userInfo,
                                    confirmpassword: e.target.value,
                                 })
                              }
                           />
                           {/* <div className='absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none'>
                                 <ExclamationCircleIcon
                                    className='h-5 w-5 text-red-500'
                                    aria-hidden='true'
                                 />
                              </div> */}
                           <label
                              htmlFor='confirmpassword'
                              className='absolute ease-out duration-500 -top-4 left-3 block text-sm font-medium text-gray-700 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:-top-4 transition-all peer-focus:text-gray-600 peer-focus:text-sm'>
                              Confirm Password
                           </label>

                           {/* <p
                              className='mt-2 text-sm text-red-600'
                              id='confirmpassword-error'>
                              Your confirmpassword must be less than 4 characters.
                           </p> */}
                        </div>
                        <div className='flex items-center justify-between'>
                           <input
                              id='remember-me'
                              name='remember-me'
                              type='checkbox'
                              className='h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded'
                           />
                           <label
                              htmlFor='remember-me'
                              className='ml-2 block text-sm text-gray-900'>
                              I agree to{' '}
                              <sapn className='text-[#7CA982]'>
                                 <Link href='#' passHref>
                                    <a>GiveStar Terms of Use</a>
                                 </Link>
                              </sapn>
                           </label>
                        </div>
                        {/* <AlertWithDismissButton
                           isAlert
                           isSuccess={false}
                           message='Hi there!'
                        /> */}
                        <button
                           onClick={e => {
                              e.preventDefault()
                              console.log('userInfo', userInfo)
                           }}
                           className='flex flex-col justify-center items-center w-full py-4 bg-yellow-400 rounded-xl hover:scale-105 ease-in-out duration-300 hover:shadow-md active:scale-100 active:shadow-none'>
                           <p className='block w-[3.90rem] text-center text-black  font-semibold'>
                              SIGN UP
                           </p>
                        </button>
                        <p className='block text-center text-xs text-[#7CA982]  font-medium'>
                           TROUBLE SIGNING UP?
                        </p>
                        <div className='flex flex-row gap-[0.81rem] justify-start items-center'>
                           <p className='block text-center text-xs text-black  font-medium'>
                              Don’t have an account?
                           </p>
                           <div className='flex flex-row gap-2.5 justify-start items-center'>
                              <button className='block text-center text-[0.81rem] text-[#7CA982]  font-semibold'>
                                 Sign in now →
                              </button>
                              <div></div>
                           </div>
                        </div>
                     </Dialog.Panel>
                  </Transition.Child>
               </form>
               <Notifications />
            </div>
         </Dialog>
      </Transition.Root>
   )
}
