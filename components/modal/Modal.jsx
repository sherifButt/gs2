import { Dialog, Transition } from '@headlessui/react'
// Icons
import { XIcon } from '@heroicons/react/outline'
import { Fragment, useEffect, useState } from 'react'
// Redux
import { useDispatch, useSelector } from 'react-redux'
import { toggleSignup } from '../../redux/features/modalSlicer'
import { addNotification } from '../../redux/features/notificationSlicer'
import { useSignupUserMutation } from '../../redux/services/authApi'

export default function Modal({ active, children }) {
   const dispatch = useDispatch()
   const modal = useSelector(state => state.modal.signup)
   const [signupUser, { data, isLoading, isError, error }] =
      useSignupUserMutation()

   const [show, setShow] = useState(active)
   useEffect(() => {
      setShow(active)
   }, [active])
   return (
      <Transition.Root show={show} as={Fragment}>
         <Dialog
            as='div'
            className='relative z-10 '
            onClose={() => {
               /*dispatch(hideSignup())*/
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
                  className='flex items-end sm:items-center justify-center min-h-full  text-center'>
                  <Transition.Child
                     as={Fragment}
                     enter='ease-out duration-500'
                     enterFrom='opacity-100 sm:opacity-0 translate-y-[500px] sm:translate-y-0 sm:scale-95'
                     enterTo='opacity-100 translate-y-0 sm:scale-100'
                     leave='ease-in duration-300'
                     leaveFrom='opacity-100 translate-y-0 sm:scale-100'
                     leaveTo='opacity-100 sm:opacity-0 translate-y-full sm:translate-y-0 sm:scale-95'>
                     <Dialog.Panel className='flex flex-col gap-7 justify-center w-full  relative bg-neutral-100 rounded-t-2xl  sm:rounded-xl px-6 pt-5 pb-4 text-left overflow-none shadow-xl transform transition-all sm:my-8 sm:max-w-md sm:w-full sm:p-10'>
                        <div className='flex justify-end'>
                           <button
                              type='button'
                              className=' rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 right-0'
                              onClick={() => dispatch(toggleSignup())}>
                              <span className='sr-only'>Close</span>
                              <XIcon className='h-5 w-5' aria-hidden='true' />
                           </button>
                        </div>

                        {children}
                     </Dialog.Panel>
                  </Transition.Child>
               </form>
            </div>
         </Dialog>
      </Transition.Root>
   )
}
Modal.defaultProps = { active: false }
