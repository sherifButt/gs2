import { Dialog, Transition } from '@headlessui/react'
// Icons
import { XIcon } from '@heroicons/react/outline'
import { Fragment, useEffect, useState } from 'react'
// Redux
import { useDispatch, useSelector } from 'react-redux'
import { hideAllModals } from '../../redux/features/modalSlicer'
import { useSignupUserMutation } from '../../redux/services/authApi'
import BouncingstarIcon from '../icons/BouncingstarIcon'

export default function Modal ( { active, children } ) {
   
   const dispatch = useDispatch()
   
   const [ show, setShow ] = useState( active )
   
   useEffect(() => {
      setShow(active)
   }, [ active ] )
   
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
               <div className='fixed inset-0 bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-60' />
            </Transition.Child>

            <div className='fixed z-10 inset-0 overflow-y-auto'>
               <div className='flex items-end sm:items-center justify-center min-h-full  text-center'>
                  <Transition.Child
                     as={Fragment}
                     enter='ease-out duration-500'
                     enterFrom='opacity-100 sm:opacity-0 translate-y-[240px] sm:translate-y-0 sm:scale-95'
                     enterTo='opacity-100 translate-y-0 sm:scale-100'
                     leave='ease-in duration-300'
                     leaveFrom='opacity-100 translate-y-0 sm:scale-100'
                     leaveTo='opacity-100 sm:opacity-0 translate-y-full sm:translate-y-0 sm:scale-95'>
                     <Dialog.Panel className='flex flex-col gap-7 justify-center w-full  relative bg-neutral-100 rounded-t-2xl  sm:rounded-xl px-6 pt-5 pb-4 text-left overflow-none shadow-xl transform transition-all sm:my-8 sm:max-w-md sm:w-full sm:p-10'>
                        <BouncingstarIcon className='absolute -top-20 sm:-top-6  sm:left-14 0scale-x-[-1] rotate-4 ' />
                        <div className='flex justify-end z-10'>
                           <button
                              type='button'
                              className=' absolute right-10 rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                              onClick={() => {
                                 setShow(false)
                                 dispatch(hideAllModals())
                              }}>
                              <span className='sr-only'>Close</span>
                              <XIcon className='h-5 w-5' aria-hidden='true' />
                           </button>
                        </div>

                        {children}
                     </Dialog.Panel>
                  </Transition.Child>
               </div>
            </div>
         </Dialog>
      </Transition.Root>
   )
}
Modal.defaultProps = { active: false }
