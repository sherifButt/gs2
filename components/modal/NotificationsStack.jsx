import { Fragment, useEffect, useState } from 'react'
import { Transition } from '@headlessui/react'
// Icons
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/outline'
import { XIcon } from '@heroicons/react/solid'
import { motion, AnimatePresence } from 'framer-motion'
// Redux
import { useDispatch, useSelector } from 'react-redux'
import { hideNotification } from '../../redux/features/modalSlicer'
import {
   removeNotification,
   deleteAllNotifications,
} from '../../redux/features/notificationSlicer'

// const opacity = ['opacity-100', 'opacity-80', 'opacity-60', 'opacity-40']

export default function NotificationsStack() {
   // Global State
   const notifications = useSelector(state => state.notification)
   const dispatch = useDispatch()

   

   return (
      <>
         {/* Global notification live region, render this permanently at the end of the document */}
         <div
            aria-live='assertive'
            className='fixed right-0 top-0 sm:top-auto sm:bottom-0 w-full  sm:w-[30rem] sm:left-160 flex flex-row justify-end items-end px-4 py-4 sm:py-6 pointer-events-none sm:p-6 sm:items-start  z-20'>
            <ol className='w-full flex flex-col items-start -space-y-12  sm:-space-y-12 sm:items-end'>
               {/* Notification panel, dynamically insert this into the live region when it needs to be displayed */}
               <AnimatePresence>
                  {notifications.map((item, i) => (
                     <motion.li
                        layoutId={item.id}
                        key={item.id}
                        initial={{ x: 500, opacity: 1 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: 500, opacity: 0 }}
                        className='w-full'>
                        <div
                           className={`max-w-sm w-full ${
                              notifications.length - i == 1
                                 ? 'opacity-100 scale-100 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-60  '
                                 : notifications.length - i == 2
                                 ? ' blur-[1px] scale-95 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-60'
                                 : notifications.length - i == 3
                                 ? ' blur-[2px] -mb-4 scale-90 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-60'
                                 : notifications.length - i == 4
                                 ? ' -mb-4 blur-[3px] scale-75 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 '
                                 : ''
                           } bg-neutral-100  shadow-lg rounded-xl pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden`}>
                           <div className='p-2 sm:p-4'>
                              <div className='flex items-start'>
                                 <div className='flex-shrink-0'>
                                    {item.isSuccess ? (
                                       <CheckCircleIcon
                                          className='h-6 w-6 text-green-400 '
                                          aria-hidden='true'
                                       />
                                    ) : (
                                       <XCircleIcon
                                          className='h-6 w-6 text-red-400'
                                          aria-hidden='true'
                                       />
                                    )}
                                 </div>
                                 <div className='ml-3 w-0 flex-1 pt-0.5'>
                                    <p className='text-sm font-medium text-gray-900'>
                                       {item.message}
                                    </p>
                                    <p className='mt-1 text-sm text-gray-500'>
                                       {item.description}
                                    </p>
                                 </div>
                                 <div className='ml-4 flex-shrink-0 flex flex-col items-end justify-between'>
                                    <button
                                       type='button'
                                       className='bg-transparent rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                                       onClick={() => {
                                          dispatch(removeNotification(i))
                                       }}>
                                       <span className='sr-only'>Close</span>
                                       <XIcon
                                          className='h-5 w-5'
                                          aria-hidden='true'
                                       />
                                    </button>{' '}
                                    {notifications.length > 2 && (
                                       <button
                                          type='button'
                                          className='bg-transparent rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                                          onClick={() => {
                                             dispatch(deleteAllNotifications())
                                          }}>
                                          <span className='sr-only'>
                                             Close All
                                          </span>
                                          <span className='text-xs font-thin'>
                                             clear all
                                          </span>
                                       </button>
                                    )}
                                 </div>
                              </div>
                           </div>
                        </div>
                     </motion.li>
                  ))}
               </AnimatePresence>
            </ol>
         </div>
      </>
   )
}

NotificationsStack.defaultProps = {
   isNotification: false,
   isSuccess: true,
   message: 'Successfully Logged ins!',
   description: 'Anyone with a link can now view this page.',
}
