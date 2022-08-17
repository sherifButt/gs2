import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import BouncingstarIcon from '../icons/BouncingstarIcon'
import {
   CheckIcon,
   XIcon,
   ExclamationCircleIcon,
} from '@heroicons/react/outline'
import { useSelector, useDispatch } from 'react-redux'
import { toggleSignin, toggleSignup, toggleRestorePassword,hideRestorePassword } from '../../features/modalSlice'

const userInetialState = { email: '', password: '' }

export default function RestorePasswprdModal() {
   const dispatch = useDispatch()
   const modal = useSelector(state => state.modal.restorePassword)

   const [show, setShow] = useState(false)
   const [userInfo, setUserInfo] = useState(userInetialState)
   
   return (
      <Transition.Root show={modal.show} as={Fragment}>
         <Dialog
            as='div'
            className='relative z-10'
            onClose={() => {
               /*dispatch(hideRestorePassword())*/
            }}>
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
                  className='flex items-end sm:items-center justify-center min-h-full text-center'>
                  <Transition.Child
                     as={Fragment}
                     enter='ease-out duration-500'
                     enterFrom='opacity-100 sm:opacity-0 translate-y-[200px] sm:translate-y-0 sm:scale-95'
                     enterTo='opacity-100 translate-y-0 sm:scale-100'
                     leave='ease-in duration-300'
                     leaveFrom='opacity-100 translate-y-0 sm:scale-100'
                     leaveTo='opacity-100 sm:opacity-0 translate-y-full sm:translate-y-0 sm:scale-95'>
                     <Dialog.Panel className='flex flex-col gap-7 justify-center w-full  relative bg-neutral-100 rounded-t-2xl  sm:rounded-xl px-6 pt-5 pb-4 text-left overflow-none shadow-xl transform transition-all sm:my-8 sm:max-w-md sm:w-full sm:p-10'>
                        <BouncingstarIcon className='absolute -top-20 sm:-top-6  sm:left-14 0scale-x-[-1] rotate-4 ' />
                        <div className=' absolute top-0 right-3 pt-4 pr-4'>
                           <button
                              type='button'
                              className=' rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                              onClick={() => dispatch(toggleRestorePassword())}>
                              <span className='sr-only'>Close</span>
                              <XIcon className='h-5 w-5' aria-hidden='true' />
                           </button>
                        </div>
                        <p className='block text-2xl sm:text-3xl text-left  text-black sm:text-center font-medium'>
                           Restore Password
                        </p>
                        <div className='relative'>
                           <input
                              type='email'
                              name='email'
                              id='email'
                              className='mt-1 relative  shadow-sm peer block w-full py-3 pl-3 pr-10 placeholder-transparent border-red-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-md rounded-xl'
                              placeholder='Email Address'
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
                              Email Address
                           </label>
                           {/* <p
                              className='mt-2 text-sm text-red-600'
                              id='email-error'>
                              Your email must include @ sign.
                           </p> */}
                        </div>

                        <button
                           onClick={e => {
                              e.preventDefault()
                              console.log('userInfo', userInfo)
                           }}
                           className='flex flex-col justify-center items-center w-full py-4 bg-yellow-400 rounded-xl hover:scale-105 ease-in-out duration-300 hover:shadow-md active:scale-100 active:shadow-none'>
                           <p className='block w-rull text-center text-black  font-semibold'>
                              Restore Password
                           </p>
                        </button>

                        <div className='flex flex-row gap-[0.81rem] justify-start items-center'>
                           <div className='flex flex-row gap-2.5 justify-start items-center'>
                              <button
                                 className=' block text-center text-[0.81rem] text-[#7CA982]  font-semibold'
                                 onClick={e => {
                                    e.preventDefault()
                                    dispatch(toggleRestorePassword())
                                    setTimeout(() => {
                                       dispatch(toggleSignin())
                                    }, 700)
                                 }}>
                                 ← Back to Sign in
                              </button>

                              <div></div>
                           </div>
                        </div>
                     </Dialog.Panel>
                  </Transition.Child>
               </form>
            </div>
         </Dialog>
      </Transition.Root>
   )
}
